<script setup lang="ts">
import {
  Connection,
  PublicKey,
  sendAndConfirmTransaction,
  SystemProgram,
  Transaction,
} from '@solana/web3.js';
import * as anchor from '@coral-xyz/anchor';

import { useGlobalStore } from 'stores/GlobalStore';
import {
  ASSOCIATED_TOKEN_PROGRAM_ID,
  getAssociatedTokenAddressSync,
  TOKEN_PROGRAM_ID,
} from '@solana/spl-token';

import { useAnchorWallet, useWallet } from 'solana-wallets-vue';
import { useWorkspace } from 'src/adapter/adapterEscrow';
import { useQuasar } from 'quasar';
import { waitForTransactionConfirmation } from 'src/helper/waitForTransactionConfirmation';
import { FEE_ACCOUNT } from 'stores/constants';

const props = defineProps([
  'deposit_mint',
  'deposit_amount',
  'request_mint',
  'request_amount',
  'allow_partial_fill',
  'only_whitelist',
  'closing_timestamp',
  'recipient_address',
]);

const $q = useQuasar();

async function build_tx() {
  const { pg_escrow } = useWorkspace();

  let notification_process: any;

  try {
    const seed = new anchor.BN(
      window.crypto.getRandomValues(new Uint8Array(8)),
    );

    const [auth, auth_bump] = anchor.web3.PublicKey.findProgramAddressSync(
      [Buffer.from('auth')],
      pg_escrow.value.programId,
    );
    console.log(auth);
    console.log(auth_bump);

    const escrow = anchor.web3.PublicKey.findProgramAddressSync(
      [
        Buffer.from('escrow'),
        useWallet().publicKey.value!.toBytes(),
        seed.toArrayLike(Buffer).reverse(),
      ],
      pg_escrow.value.programId,
    )[0];

    const vault = anchor.web3.PublicKey.findProgramAddressSync(
      [Buffer.from('vault'), escrow.toBuffer()],
      pg_escrow.value.programId,
    )[0];

    console.log(`vault: ${vault.toString()}`);

    const maker_ata = getAssociatedTokenAddressSync(
      new PublicKey(props.deposit_mint),
      useWallet().publicKey.value as PublicKey,
      true,
      TOKEN_PROGRAM_ID,
      ASSOCIATED_TOKEN_PROGRAM_ID,
    );

    console.log(`maker_ata: ${maker_ata.toString()}`);

    const recipient = props.recipient_address ? props.recipient_address : null;

    let signature = await pg_escrow.value.methods
      .initialize(
        seed,
        new anchor.BN(props.deposit_amount),
        new anchor.BN(props.request_amount),
        new anchor.BN(props.closing_timestamp),
        props.allow_partial_fill,
        props.only_whitelist,
      )
      .accounts({
        maker: useWallet().publicKey!.value,
        makerAta: maker_ata,
        recipient: recipient,
        depositToken: new PublicKey(props.deposit_mint),
        requestToken: new PublicKey(props.request_mint),
        auth: auth,
        escrow: escrow,
        vault: vault,
        tokenProgram: TOKEN_PROGRAM_ID,
        associatedTokenProgram: ASSOCIATED_TOKEN_PROGRAM_ID,
        systemProgram: SystemProgram.programId,
        fee: FEE_ACCOUNT,
        whitelistProgram: null,
        whitelist: null,
        entry: null,
      });

    notification_process = $q.notify({
      group: false,
      timeout: 0,
      spinner: true,
      message: 'Sending TX...',
    });
    signature = await signature.rpc();

    console.log(`TX_Signature = ${signature}`);

    await waitForTransactionConfirmation(
      useGlobalStore().connection as Connection,
      signature,
    );

    notification_process({
      type: 'positive',
      icon: 'done',
      spinner: false,
      message: 'Transaction confirmed!',
      timeout: 2500,
    });
  } catch (err: any) {
    notification_process({
      type: 'negative',
      icon: 'error',
      spinner: false,
      message: err.toString(),
      timeout: 5000,
    });
    console.error(err);
  }
}
</script>

<template>
  <q-btn
    :disable="
      !(
        deposit_mint?.length &&
        request_mint?.length &&
        deposit_amount > 1 &&
        request_amount > 1
      )
    "
    label="Create"
    class="full-width"
    color="primary"
    @click="build_tx()"
  />
</template>

<style scoped lang="sass"></style>