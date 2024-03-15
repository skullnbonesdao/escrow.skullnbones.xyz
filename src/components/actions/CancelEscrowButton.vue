<script setup lang="ts">
import { Connection, PublicKey, SystemProgram } from '@solana/web3.js';
import * as anchor from '@coral-xyz/anchor';

import { useGlobalStore } from 'stores/GlobalStore';
import {
  ASSOCIATED_TOKEN_PROGRAM_ID,
  getAssociatedTokenAddressSync,
  TOKEN_PROGRAM_ID,
} from '@solana/spl-token';
import { useWallet } from 'solana-wallets-vue';
import { useWorkspace } from 'src/adapter/adapterPrograms';
import { useQuasar } from 'quasar';
import { waitForTransactionConfirmation } from 'src/helper/waitForTransactionConfirmation';

const props = defineProps(['escrow_address', 'label']);

const $q = useQuasar();

async function build_tx() {
  const { pg_escrow } = useWorkspace();

  let notification_process: any;

  notification_process = $q.notify({
    group: false, // required to be updatable
    timeout: 0, // we want to be in control when it gets dismissed
    spinner: true,
    message: 'Sending TX...',
  });

  try {
    const escrow_account = await pg_escrow.value.account.escrow.fetch(
      props.escrow_address,
    );

    const seed = escrow_account.seed;

    const auth = anchor.web3.PublicKey.findProgramAddressSync(
      [Buffer.from('auth')],
      pg_escrow.value.programId,
    )[0];

    const escrow = anchor.web3.PublicKey.findProgramAddressSync(
      [
        Buffer.from('escrow'),
        useWallet().publicKey.value!.toBytes(),
        seed.toArrayLike(Buffer).reverse(),
        ,
      ],
      pg_escrow.value.programId,
    )[0];

    const vault = anchor.web3.PublicKey.findProgramAddressSync(
      [Buffer.from('vault'), escrow.toBuffer()],
      pg_escrow.value.programId,
    )[0];

    const maker_ata = getAssociatedTokenAddressSync(
      new PublicKey(escrow_account.depositToken),
      useWallet().publicKey.value as PublicKey,
      undefined,
      TOKEN_PROGRAM_ID,
      ASSOCIATED_TOKEN_PROGRAM_ID,
    );

    const maker_ata_request = getAssociatedTokenAddressSync(
      new PublicKey(escrow_account.requestToken),
      useWallet().publicKey.value as PublicKey,
      undefined,
      TOKEN_PROGRAM_ID,
      ASSOCIATED_TOKEN_PROGRAM_ID,
    );

    let signature = await pg_escrow.value.methods.cancel().accounts({
      maker: useWallet().publicKey!.value,
      makerAta: maker_ata,
      depositToken: escrow_account.depositToken,
      makerAtaRequest: maker_ata_request,
      makerTokenRequest: escrow_account.requestToken,
      auth: auth,
      escrow: escrow,
      vault: vault,
      tokenProgram: TOKEN_PROGRAM_ID,
      associatedTokenProgram: ASSOCIATED_TOKEN_PROGRAM_ID,
      systemProgram: SystemProgram.programId,
    });

    signature = await signature.rpc();

    console.log(`TX_Signature = ${signature}`);

    await waitForTransactionConfirmation(
      useGlobalStore().connection as Connection,
      signature,
    );

    notification_process({
      type: 'positive',
      icon: 'done', // we add an icon
      spinner: false, // we reset the spinner setting so the icon can be displayed
      message: 'Transaction confirmed!',
      timeout: 2500, // we will timeout it in 2.5s
    });
  } catch (err: any) {
    notification_process({
      type: 'negative',
      icon: 'error', // we add an icon
      spinner: false, // we reset the spinner setting so the icon can be displayed
      message: err.toString(),
      timeout: 5000, // we will timeout it in 2.5s
    });
    console.error(err);
  }
}
</script>

<template>
  <q-btn
    class="col"
    color="primary"
    :label="label"
    @click="
      build_tx().then(() => {
        console.info('build_tx executed');
      })
    "
  ></q-btn>
</template>

<style scoped lang="sass"></style>
