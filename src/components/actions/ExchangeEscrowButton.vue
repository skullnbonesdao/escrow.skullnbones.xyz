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
import { FEE_ACCOUNT, WHITELIST_PROGRAM_ID } from 'stores/constants';
import { ui2amount } from 'src/helper/tokenDecimalConversion';
import { amount } from '@metaplex-foundation/js';
import { useWalletStore } from 'stores/WalletStore';
import { check_and_make_ata, make_ata } from 'src/functions/check_and_make_ata';

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
    const creator = escrow_account.maker;

    const escrow = PublicKey.findProgramAddressSync(
      [
        Buffer.from('escrow'),
        creator.toBytes(),
        seed.toArrayLike(Buffer).reverse(),
      ],
      pg_escrow.value.programId,
    )[0];

    const vault = PublicKey.findProgramAddressSync(
      [Buffer.from('vault'), escrow.toBuffer()],
      pg_escrow.value.programId,
    )[0];

    const auth = PublicKey.findProgramAddressSync(
      [Buffer.from('auth'), escrow.toBuffer()],
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

    if (
      !(await check_and_make_ata(
        new PublicKey(escrow_account.depositToken),
        useWallet().publicKey.value!,
      ))
    ) {
      await make_ata(
        taker_request_ata,
        new PublicKey(escrow_account.depositToken),
      );
    }

    const taker_deposit_ata = getAssociatedTokenAddressSync(
      new PublicKey(escrow_account.requestToken),
      useWallet().publicKey.value as PublicKey,
      undefined,
      TOKEN_PROGRAM_ID,
      ASSOCIATED_TOKEN_PROGRAM_ID,
    );

    if (
      !(await check_and_make_ata(
        new PublicKey(escrow_account.requestToken),
        useWallet().publicKey.value!,
      ))
    ) {
      await make_ata(
        taker_deposit_ata,
        new PublicKey(escrow_account.requestToken),
      );
    }

    const exchange_amount = await ui2amount(
      escrow_account.depositToken,
      props.exchange_amount,
    );
    console.log(`exchange_amount: ${exchange_amount}`);

    let whitelistProgram = null;
    let whitelist = null;
    let entry = null;

    if (useWalletStore().is_whitelisted) {
      whitelistProgram = WHITELIST_PROGRAM_ID;
      whitelist = useWalletStore().whitelist_account;
      entry = useWalletStore().entry_account;
    }

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
        whitelistProgram,
        whitelist,
        entry,
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

    await useGlobalStore().load_escrow(props.escrow_address);
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
    :disable="exchange_amount == 0"
    class="full-width"
    color="primary"
    label="Take offer"
    icon-right="send"
    @click="
      build_tx().then(() => {
        console.info('build_tx executed');
      })
    "
  ></q-btn>
</template>

<style scoped lang="sass"></style>
