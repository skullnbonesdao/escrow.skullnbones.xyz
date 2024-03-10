<script setup lang="ts">
import { useWorkspace } from 'src/adapter/adapterEscrow';
import { computed, onMounted, ref, watch } from 'vue';
import { useGlobalStore } from 'stores/GlobalStore';
import { useQuasar } from 'quasar';
import { Escrow } from 'src/adapter/escrow_gen/accounts';
import { amount2ui } from 'src/helper/tokenDecimalConversion';
import { useWallet } from 'solana-wallets-vue';
import { NULL_ADDRESS } from 'stores/constants';
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

interface EscrowAccounts {
  publicKey: PublicKey;
  account: Escrow;
}

async function load_escrows() {
  const { pg_escrow } = useWorkspace();
  const escrows_list =
    (await pg_escrow.value.account.escrow.all()) as EscrowAccounts[];
  console.log(escrows_list);
  escrows.value = escrows.value = escrows_list.filter(
    (escrow) =>
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

          <div class="q-mx-sm row items-center">
            <p class="col">Price:</p>
            <strong class="col text-right">{{ escrow.account.price }}</strong>
          </div>

          <div class="q-mx-sm row items-center">
            <p class="col-2">Available:</p>
            <q-linear-progress
              class="col"
              size="25px"
              :value="
                1 -
                (escrow.account.tokensDepositInit.toNumber() -
                  escrow.account.tokensDepositRemaining.toNumber()) /
                  escrow.account.tokensDepositInit.toNumber()
              "
              color="accent"
            >
              <div class="absolute-full flex flex-center">
                <q-badge
                  color="white"
                  text-color="secondary"
                  :label="
                    (1 -
                      (escrow.account.tokensDepositInit.toNumber() -
                        escrow.account.tokensDepositRemaining.toNumber()) /
                        escrow.account.tokensDepositInit.toNumber()) *
                      100 +
                    '%'
                  "
                />
              </div>
            </q-linear-progress>
          </div>

          <CancelEscrowButton
            :escrow_address="escrow.publicKey"
            label="cancel"
          />
        </q-item-section>
      </q-item>
      <q-item clickable v-ripple v-if="!escrows.length">
        <q-item-section class="text-center">
          There are no open escrow accounts!</q-item-section
        >
      </q-item>
    </q-list>
  </div>
</template>

<style lang="sass">
.grid-style-transition
  transition: transform .28s, background-color .28s
</style>
