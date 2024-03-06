<script setup lang="ts">
import * as escrow_instructions from 'src/adapter/escrow_gen/instructions';
import BN from 'bn.js';
import { randomBytes } from 'crypto';
import { PublicKey, SystemProgram, Transaction } from '@solana/web3.js';
import { FEE_ACCOUNT } from 'stores/GlobalStore';
import {
  ASSOCIATED_TOKEN_PROGRAM_ID,
  getAssociatedTokenAddressSync,
  TOKEN_PROGRAM_ID,
} from '@solana/spl-token';
import { PROGRAM_ID } from 'src/adapter/escrow_gen/programId';
import { useWallet } from 'solana-wallets-vue';

const props = defineProps([
  'deposit_mint',
  'request_mint',
  'deposit_amount',
  'request_amount',
]);

function build_tx() {
  const tx = new Transaction();
  const seed = new BN(randomBytes(8));
  const auth = PublicKey.findProgramAddressSync(
    [Buffer.from('auth')],
    PROGRAM_ID,
  )[0];
  const escrow = PublicKey.findProgramAddressSync(
    [
      Buffer.from('escrow'),
      useWallet().publicKey.value!.toBytes(),
      seed.toBuffer().reverse(),
    ],
    PROGRAM_ID,
  )[0];

  const vault = PublicKey.findProgramAddressSync(
    [Buffer.from('vault'), escrow.toBuffer()],
    PROGRAM_ID,
  )[0];

  const maker_ata = getAssociatedTokenAddressSync(
    new PublicKey(props.request_mint),
    useWallet().publicKey.value as PublicKey,
  );

  const ix = escrow_instructions.initialize(
    {
      seed: seed,
      depositAmount: new BN(100),
      requestAmount: new BN(100),
      allowPartialFill: false,
      onlyWhitelist: false,
    },
    {
      maker: useWallet().publicKey.value ?? new PublicKey(''),
      makerAta: maker_ata,
      recipient: null,
      depositToken: new PublicKey(props.deposit_mint),
      requestToken: new PublicKey(props.request_mint),
      auth,
      escrow,
      vault,
      tokenProgram: TOKEN_PROGRAM_ID,
      associatedTokenProgram: ASSOCIATED_TOKEN_PROGRAM_ID,
      systemProgram: SystemProgram.programId,
      fee: FEE_ACCOUNT,
    },
  );

  tx.add(ix);
  console.log(ix);
}
</script>

<template>
  <q-btn label="Create" class="full-width" color="primary" @click="build_tx" />
</template>

<style scoped lang="sass"></style>
