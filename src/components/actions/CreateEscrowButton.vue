<script setup lang="ts">
import {
  Connection,
  PublicKey,
  sendAndConfirmTransaction,
  SystemProgram,
  Transaction,
} from '@solana/web3.js';
import * as anchor from '@coral-xyz/anchor';

import { FEE_ACCOUNT, useGlobalStore } from 'stores/GlobalStore';
import {
  ASSOCIATED_TOKEN_PROGRAM_ID,
  getAssociatedTokenAddressSync,
  TOKEN_PROGRAM_ID,
} from '@solana/spl-token';
import { PROGRAM_ID } from 'src/adapter/escrow_gen/programId';
import { useAnchorWallet, useWallet } from 'solana-wallets-vue';
import { programID, useWorkspace } from 'src/adapter/adapterEscrow';

const props = defineProps([
  'deposit_mint',
  'deposit_amount',
  'deposit_decimals',

  'request_mint',
  'request_amount',
  'request_decimals',
]);

async function build_tx() {
  const { program } = useWorkspace();

  const seed = new anchor.BN(window.crypto.getRandomValues(new Uint8Array(8)));

  const auth = anchor.web3.PublicKey.findProgramAddressSync(
    [Buffer.from('auth')],
    PROGRAM_ID,
  )[0];

  const escrow = anchor.web3.PublicKey.findProgramAddressSync(
    [
      Buffer.from('escrow'),
      useWallet().publicKey.value!.toBytes(),
      seed.toBuffer().reverse(),
    ],
    program.value.programId,
  )[0];

  const vault = anchor.web3.PublicKey.findProgramAddressSync(
    [Buffer.from('vault'), escrow.toBuffer()],
    program.value.programId,
  )[0];

  const maker_ata = getAssociatedTokenAddressSync(
    new PublicKey('DzMwjrnAQa6nThhnLQ1KjsaNJfPffMELvJ3BCn8RvXNv'),
    useWallet().publicKey.value as PublicKey,
    true,
    TOKEN_PROGRAM_ID,
    ASSOCIATED_TOKEN_PROGRAM_ID,
  );

  try {
    const signature = await program.value.methods
      .initialize(seed, new anchor.BN(100), new anchor.BN(100), false, false)
      .accounts({
        maker: useWallet().publicKey!.value,
        makerAta: maker_ata,
        recipient: null,
        depositToken: new PublicKey(
          'DzMwjrnAQa6nThhnLQ1KjsaNJfPffMELvJ3BCn8RvXNv',
        ),
        requestToken: new PublicKey(
          'CHrs2ZSKfrnXhGYqeBv4iD2UbQYid2PBwgFwe2DAdFjE',
        ),
        auth: auth,
        escrow: escrow,
        vault: vault,
        tokenProgram: TOKEN_PROGRAM_ID,
        associatedTokenProgram: ASSOCIATED_TOKEN_PROGRAM_ID,
        systemProgram: SystemProgram.programId,
        fee: FEE_ACCOUNT,
      })
      .rpc();
    console.log(`TX_Signature = ${signature}`);
  } catch (err) {
    console.error(err);
  }
}
</script>

<template>
  <q-btn
    label="Create"
    class="full-width"
    color="primary"
    @click="
      build_tx().then(() => {
        console.info('build_tx executed');
      })
    "
  />
</template>

<style scoped lang="sass"></style>
