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
import { useQuasar } from 'quasar';
import {
  awaitTransactionConfirmation,
  waitForTransactionConfirmation,
} from 'src/helper/waitForTransactionConfirmation';

const props = defineProps([
  'deposit_mint',
  'deposit_amount',

  'request_mint',
  'request_amount',
]);

const $q = useQuasar();

async function build_tx() {
  const { pg_escrow } = useWorkspace();

  let notification_process: any;

  try {
    const seed = new anchor.BN(
      window.crypto.getRandomValues(new Uint8Array(8)),
    );

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
      pg_escrow.value.programId,
    )[0];

    const vault = anchor.web3.PublicKey.findProgramAddressSync(
      [Buffer.from('vault'), escrow.toBuffer()],
      pg_escrow.value.programId,
    )[0];

    const maker_ata = getAssociatedTokenAddressSync(
      new PublicKey(props.deposit_mint),
      useWallet().publicKey.value as PublicKey,
      true,
      TOKEN_PROGRAM_ID,
      ASSOCIATED_TOKEN_PROGRAM_ID,
    );

    const signature = await pg_escrow.value.methods
      .initialize(
        seed,
        new anchor.BN(props.deposit_amount),
        new anchor.BN(props.request_amount),
        false,
        false,
      )
      .accounts({
        maker: useWallet().publicKey!.value,
        makerAta: maker_ata,
        recipient: null,
        depositToken: new PublicKey(props.deposit_mint),
        requestToken: new PublicKey(props.request_mint),
        auth: auth,
        escrow: escrow,
        vault: vault,
        tokenProgram: TOKEN_PROGRAM_ID,
        associatedTokenProgram: ASSOCIATED_TOKEN_PROGRAM_ID,
        systemProgram: SystemProgram.programId,
        fee: FEE_ACCOUNT,
      })
      .rpc();

    notification_process = $q.notify({
      group: false, // required to be updatable
      timeout: 0, // we want to be in control when it gets dismissed
      spinner: true,
      message: 'Confirming TX...',
    });
    console.log(`TX_Signature = ${signature}`);

    await waitForTransactionConfirmation(
      useGlobalStore().connection as Connection,
      signature,
    );

    notification_process({
      icon: 'done', // we add an icon
      spinner: false, // we reset the spinner setting so the icon can be displayed
      message: 'Transaction confirmed!',
      timeout: 2500, // we will timeout it in 2.5s
    });
  } catch (err: any) {
    $q.notify({
      type: 'negative',
      message: err.toString(),
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
    @click="
      build_tx().then(() => {
        console.info('build_tx executed');
      })
    "
  />
</template>

<style scoped lang="sass"></style>
