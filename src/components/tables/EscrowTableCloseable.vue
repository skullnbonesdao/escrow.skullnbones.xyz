<script setup lang="ts">
import { EscrowAccounts, useWorkspace } from 'src/adapter/adapterEscrow';
import { computed, onMounted, ref, watch } from 'vue';
import { useGlobalStore } from 'stores/GlobalStore';
import { useQuasar } from 'quasar';
import { Escrow } from 'src/adapter/escrow_gen/accounts';
import { amount2ui } from 'src/helper/tokenDecimalConversion';
import { useWallet } from 'solana-wallets-vue';
import { ACCOUNT_COST_ESCROW, NULL_ADDRESS } from 'stores/constants';
import CancelEscrowButton from 'components/actions/CancelEscrowButton.vue';
import ExchangeEscrowButton from 'components/actions/ExchangeEscrowButton.vue';
import AsyncDecimalsComponent from 'components/asyncComponents/AsyncDecimalsComponent.vue';
import { PublicKey } from '@solana/web3.js';
import ExchangeEscrowButtonFill from 'components/actions/ExchangeEscrowButtonFill.vue';

const props = defineProps(['title', 'escrow_filter']);

const $q = useQuasar();

let escrows = ref<EscrowAccounts[]>([]);
const amount_to_buy = ref<number[]>([]);
watch(
  () => useGlobalStore().is_initialized,
  async () => {
    await load_escrows();
  },
);
onMounted(async () => {
  if (useGlobalStore().is_initialized) {
    await load_escrows();
  }
});

async function load_escrows() {
  const { pg_escrow } = useWorkspace();
  const escrows_list =
    (await pg_escrow.value.account.escrow.all()) as EscrowAccounts[];
  console.log(escrows_list);
  escrows.value = escrows.value = escrows_list.filter(
    (escrow) =>
      escrow.account.tokensDepositRemaining.toNumber() == 0 &&
      escrow.account.maker.toString() ==
        useWallet().publicKey.value?.toString(),
  );
}
</script>

<template>
  <div class="q-pa-md">
    <q-list bordered separator>
      <q-item clickable v-ripple v-for="escrow in escrows" :key="escrow">
        <q-item-section class="q-gutter-y-md">
          <div>
            <div class="row">
              <p class="col">Deposited:</p>
              <strong>{{ escrow.account.depositToken }}</strong>
            </div>
            <div class="row">
              <p class="col">Requested:</p>
              <strong>{{ escrow.account.requestToken }}</strong>
            </div>
          </div>
          <CancelEscrowButton
            :escrow_address="escrow.publicKey"
            :label="`close (+${ACCOUNT_COST_ESCROW}sol)`"
          />
        </q-item-section>
      </q-item>
      <q-item clickable v-ripple v-if="!escrows.length">
        <q-item-section class="text-center">
          There are no empty escrow accounts!</q-item-section
        >
      </q-item>
    </q-list>
  </div>
</template>

<style lang="sass">
.grid-style-transition
  transition: transform .28s, background-color .28s
</style>
