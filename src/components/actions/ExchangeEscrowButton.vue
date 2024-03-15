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
import { useWorkspace } from 'src/adapter/adapterEscrow';
import { useQuasar } from 'quasar';
import { waitForTransactionConfirmation } from 'src/helper/waitForTransactionConfirmation';
import { FEE_ACCOUNT } from 'stores/constants';
import { ui2amount } from 'src/helper/tokenDecimalConversion';
import { amount } from '@metaplex-foundation/js';

const props = defineProps(['escrow_address', 'exchange_amount']);

const q = useQuasar();

async function build_tx() {
  const { pg_escrow } = useWorkspace();

  let notification_process = q.notify({
    group: false,
    timeout: 0,
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

    const creator = escrow_account.maker;
    const escrow = anchor.web3.PublicKey.findProgramAddressSync(
      [
        Buffer.from('escrow'),
        creator.toBytes(),
        seed.toArrayLike(Buffer).reverse(),
      ],
      pg_escrow.value.programId,
    )[0];

    const vault = anchor.web3.PublicKey.findProgramAddressSync(
      [Buffer.from('vault'), escrow.toBuffer()],
      pg_escrow.value.programId,
    )[0];

    const maker_receive_ata = getAssociatedTokenAddressSync(
      new PublicKey(escrow_account.requestToken),
      escrow_account.maker,
      undefined,
      TOKEN_PROGRAM_ID,
      ASSOCIATED_TOKEN_PROGRAM_ID,
    );

    const taker_request_ata = getAssociatedTokenAddressSync(
      new PublicKey(escrow_account.depositToken),
      useWallet().publicKey.value as PublicKey,
      undefined,
      TOKEN_PROGRAM_ID,
      ASSOCIATED_TOKEN_PROGRAM_ID,
    );

    const taker_deposit_ata = getAssociatedTokenAddressSync(
      new PublicKey(escrow_account.requestToken),
      useWallet().publicKey.value as PublicKey,
      undefined,
      TOKEN_PROGRAM_ID,
      ASSOCIATED_TOKEN_PROGRAM_ID,
    );

    console.log(`maker_receive_ata: ${maker_receive_ata}`);
    console.log(`taker_request_ata: ${taker_request_ata}`);
    console.log(`taker_deposit_ata: ${taker_deposit_ata}`);
    console.log(`exchange_amount: ${props.exchange_amount}`);
    const exchange_amount = await ui2amount(
      escrow_account.depositToken,
      props.exchange_amount,
    );
    console.log(`exchange_amount: ${exchange_amount}`);

    let signature = await pg_escrow.value.methods
      .exchange(new anchor.BN(exchange_amount))
      .accounts({
        taker: useWallet().publicKey!.value,
        takerAta: taker_deposit_ata,
        takerReceiveAta: taker_request_ata,
        requestToken: escrow_account.requestToken,
        maker: escrow_account.maker,
        makerReceiveAta: maker_receive_ata,
        depositToken: escrow_account.depositToken,
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

    console.log(signature);

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
    console.error(err);
    notification_process({
      type: 'negative',
      icon: 'error',
      spinner: false,
      message: err.toString(),
      timeout: 5000,
    });
  }
}
</script>

<template>
  <q-btn
    color="primary"
    icon="send"
    @click="
      build_tx().then(() => {
        console.info('build_tx executed');
      })
    "
  ></q-btn>
</template>

<style scoped lang="sass"></style>
