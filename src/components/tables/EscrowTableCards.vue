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

const props = defineProps(['title', 'escrow_filter']);

let escrows = ref<Escrow[]>([]);
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
  const escrows_list = (await pg_escrow.value.account.escrow.all()) as Escrow[];
  switch (props.escrow_filter) {
    case 'p2p':
      escrows.value = escrows_list.filter(
        (escrow) =>
          (escrow.recipient?.toString() ?? NULL_ADDRESS.toString()) !=
          NULL_ADDRESS.toString(),
      );
      break;
    case 'deals':
      escrows.value = escrows_list.filter(
        (escrow) => escrow.onlyWhitelist == true,
      );
      break;
    default:
      escrows.value = escrows.value = escrows_list.filter(
        (escrow) => !escrow.recipient || escrow.onlyWhitelist != true,
      );
      break;
  }

  amount_to_buy.value = [];
  escrows.value.forEach((e) => amount_to_buy.value.push(0));
}

const cardContainerClass = computed(() => {
  return useQuasar().screen.gt.xs
    ? 'grid-masonry grid-masonry--' + (useQuasar().screen.gt.sm ? '3' : '2')
    : null;
});

function getItemsPerPage() {
  if (useQuasar().screen.lt.sm) {
    return 3;
  }
  if (useQuasar().screen.lt.md) {
    return 6;
  }
  return 9;
}

const pagination = ref({
  page: 1,
  rowsPerPage: getItemsPerPage(),
});

const rowsPerPageOptions = computed(() => {
  return useQuasar().screen.gt.xs
    ? useQuasar().screen.gt.sm
      ? [3, 6, 9]
      : [3, 6]
    : [3];
});

const columns = ref([
  { name: 'name', label: 'Name', field: 'name' },
  { name: 'price', label: 'Price', field: 'price' },
  { name: 'calories', label: 'Calories (g)', field: 'calories' },
]);

const rows = ref([
  {
    name: 'hello',
    calories: 1,
  },
]);
</script>

<template>
  <div class="q-pa-md">
    <q-table
      grid
      flat
      bordered
      :card-container-class="cardContainerClass"
      :title="props.title"
      :rows="escrows"
      :columns="columns"
      row-key="name"
      :filter="filter"
      hide-header
      v-model:pagination="pagination"
      :rows-per-page-options="rowsPerPageOptions"
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
        <div class="q-pa-xs col-xs-12 col-sm-6 col-md-4">
          <q-card flat bordered>
            <q-card-section class="text-center">
              <q-avatar>
                <img src="unknown.png" />
              </q-avatar>
              vs.
              <q-avatar>
                <img src="unknown.png" />
              </q-avatar>
            </q-card-section>

            <div class="q-mx-sm">
              <q-linear-progress
                size="25px"
                :value="
                  (props.row.account.tokensDepositInit.toNumber() -
                    props.row.account.tokensDepositRemaining.toNumber()) /
                  props.row.account.tokensDepositInit.toNumber()
                "
                color="accent"
              >
                <div class="absolute-full flex flex-center">
                  <q-badge
                    color="white"
                    text-color="secondary"
                    :label="
                      ((props.row.account.tokensDepositInit.toNumber() -
                        props.row.account.tokensDepositRemaining.toNumber()) /
                        props.row.account.tokensDepositInit.toNumber()) *
                        100 +
                      '%'
                    "
                  />
                </div>
              </q-linear-progress>
            </div>
            <q-card-section>
              <div class="row">
                <p class="col">Deposited:</p>
                <strong>{{ props.row.account.depositToken }}</strong>
              </div>
              <div class="row">
                <p class="col">Requested:</p>
                <strong>{{ props.row.account.requestToken }}</strong>
              </div>
            </q-card-section>
            <q-separator />
            <q-card-section>
              <div class="row">
                <p class="col">Price:</p>
                <strong>{{ props.row.account.price }}</strong>
              </div>
              <div class="row">
                <p class="col">Available:</p>
                <strong>{{
                  amount2ui(
                    props.row.account.depositToken,
                    props.row.account.tokensDepositRemaining.toNumber(),
                  )
                }}</strong>
              </div>
              <div class="row">
                <p class="col">Partial Fill:</p>
                <strong>{{ props.row.account.allowPartialFill }}</strong>
              </div>
            </q-card-section>
            <q-separator />
            <q-card-section class="q-gutter-y-sm">
              <div class="row">
                <q-input
                  class="col"
                  standout
                  square
                  v-model="amount_to_buy[props.rowIndex]"
                  label="Amount to buy"
                />
                <ExchangeEscrowButton
                  :escrow_address="props.row.publicKey"
                  :exchange_amount="amount_to_buy[props.rowIndex]"
                />
              </div>

              <div
                v-if="
                  useWallet().publicKey?.value?.toString() ==
                  props.row.account.maker.toString()
                "
                class="row"
              >
                <CancelEscrowButton :escrow_address="props.row.publicKey" />
              </div>
            </q-card-section>
          </q-card>
        </div>
      </template>
    </q-table>
  </div>
</template>

<style lang="sass">
.grid-masonry
  flex-direction: column
  height: 700px

  &--2
    > div
      &:nth-child(2n + 1)
        order: 1
      &:nth-child(2n)
        order: 2

    &:before
      content: ''
      flex: 1 0 100% !important
      width: 0 !important
      order: 1
  &--3
    > div
      &:nth-child(3n + 1)
        order: 1
      &:nth-child(3n + 2)
        order: 2
      &:nth-child(3n)
        order: 3

    &:before,
    &:after
      content: ''
      flex: 1 0 100% !important
      width: 0 !important
      order: 2
</style>
