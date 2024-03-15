<script setup lang="ts">
import { useWorkspace } from 'src/adapter/adapterPrograms';
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
import EscrowDetails from 'components/details/EscrowDetails.vue';
import EscrowViewCard from 'components/cards/EscrowViewCard.vue';

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
  const escrows_list = (
    (await pg_escrow.value.account.escrow.all()) as EscrowAccounts[]
  ).filter((escrow) => escrow.account.tokensDepositRemaining.toNumber() > 0);

  switch (props.escrow_filter) {
    case 'p2p':
      console.log(escrows_list);
      escrows.value = escrows_list.filter(
        (escrow) =>
          escrow.account.recipient.toString() != NULL_ADDRESS.toString(),
      );
      break;
    case 'deals':
      escrows.value = escrows_list.filter(
        (escrow) => escrow.account.onlyWhitelist == true,
      );
      break;
    default:
      escrows.value = escrows.value = escrows_list.filter(
        (escrow) =>
          escrow.account.recipient.toString() == NULL_ADDRESS.toString() &&
          escrow.account.onlyWhitelist != true,
      );
      break;
  }

  amount_to_buy.value = [];
}

const pagination = ref({
  page: 1,
});

const columns = ref([
  { name: 'name', label: 'Name', field: 'name' },
  { name: 'price', label: 'Price', field: 'price' },
  { name: 'calories', label: 'Calories (g)', field: 'calories' },
]);
</script>

<template>
  <div class="q-pa-md">
    <q-table
      grid
      flat
      :title="props.title"
      :rows="escrows"
      :columns="columns"
      row-key="name"
      :filter="filter"
      hide-header
      v-model:pagination="pagination"
    >
      <template v-slot:top-right>
        <q-input
          borderless
          dense
          debounce="300"
          v-model="filter"
          placeholder="Search"
        >
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>

      <template v-slot:item="props">
        <div
          class="q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition"
          :style="props.selected ? 'transform: scale(0.95);' : ''"
        >
          <EscrowViewCard :escrow="props.row" />
        </div>
      </template>
    </q-table>
  </div>
</template>

<style lang="sass">
.grid-style-transition
  transition: transform .28s, background-color .28s
</style>
