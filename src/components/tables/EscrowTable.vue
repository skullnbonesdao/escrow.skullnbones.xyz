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
const expanded_details = ref<boolean[]>([]);
const expanded_take = ref<boolean[]>([]);

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

function handle_buy(escrow: any) {
  useGlobalStore().escrow_selected = escrow;
  useGlobalStore().showRightDrawer = true;
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
          escrow.account.recipient.toString() != NULL_ADDRESS.toString() &&
          (escrow.account.maker.toString() ==
            useWallet().publicKey.value?.toString() ||
            escrow.account.recipient.toString() ==
              useWallet().publicKey.value?.toString()),
      );
      break;
    case 'p2g':
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
  expanded_details.value = escrows.value.flatMap((escrow) => false);
  expanded_take.value = escrows.value.flatMap((escrow) => false);
}

const pagination = ref({
  page: 1,
});

const columns = ref([
  { name: 'buying', label: 'Buying', align: 'right' },
  { name: 'icon_1', label: '', align: 'left' },
  { name: 'price', label: 'Price', align: 'center' },
  { name: 'icon_2', label: '', align: 'left' },
  { name: 'selling', label: 'Selling' },

  { name: 'take', label: '' },
]);
</script>

<template>
  <div class="q-pa-md">
    <q-table
      flat
      :title="props.title"
      :rows="escrows"
      :columns="columns"
      row-key="name"
      :filter="filter"
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

      <template v-slot:body="props">
        <q-tr :props="props" class="bg-secondary">
          <q-td key="buying" :props="props" class="">
            <div class="row items-center">
              <b class="col text-right text-h6">
                {{
                  (
                    props.row.account.tokensDepositRemaining *
                    Math.pow(
                      10,
                      -useGlobalStore().token_list.find(
                        (token) =>
                          token.address ==
                          props.row.account.depositToken.toString(),
                      ).decimals,
                    )
                  ).toFixed(2)
                }}
              </b>
            </div>
          </q-td>

          <q-td key="icon_1" :props="props">
            <div class="row items-center">
              <div class="col text-center">
                <q-avatar size="md">
                  <img
                    :src="
                      useGlobalStore().token_list.find(
                        (token) =>
                          token.address ==
                          props.row.account.depositToken.toString(),
                      )?.logoURI ?? 'unknown.png'
                    "
                  />
                </q-avatar>
                <p style="font-size: 10px">
                  {{
                    useGlobalStore().token_list.find(
                      (token) =>
                        token.address ==
                        props.row.account.depositToken.toString(),
                    ).symbol
                  }}
                </p>
              </div>

              <q-icon class="col" name="arrow_forward"></q-icon>
            </div>
          </q-td>

          <q-td key="price" :props="props">
            <p class="text-subtitle1">
              {{ props.row.account.price.toFixed(2) }}
            </p>
          </q-td>

          <q-td key="icon_2" :props="props">
            <div class="row items-center">
              <q-icon class="col" name="arrow_forward"></q-icon>

              <div class="col text-center">
                <q-avatar size="md">
                  <img
                    :src="
                      useGlobalStore().token_list.find(
                        (token) =>
                          token.address ==
                          props.row.account.requestToken.toString(),
                      )?.logoURI ?? 'unknown.png'
                    "
                  />
                </q-avatar>
                <p style="font-size: 10px">
                  {{
                    useGlobalStore().token_list.find(
                      (token) =>
                        token.address ==
                        props.row.account.requestToken.toString(),
                    ).symbol
                  }}
                </p>
              </div>
            </div>
          </q-td>
          <q-td key="selling" :props="props" class="text-right">
            <b class="text-h6">
              {{
                (
                  props.row.account.tokensDepositRemaining *
                  Math.pow(
                    10,
                    -useGlobalStore().token_list.find(
                      (token) =>
                        token.address ==
                        props.row.account.depositToken.toString(),
                    ).decimals,
                  ) *
                  props.row.account.price
                ).toFixed(2)
              }}
            </b>
          </q-td>

          <q-td key="take" :props="props">
            <q-btn
              flat
              color="primary"
              :icon="expanded_take[props.rowIndex] ? 'remove' : 'send'"
              v-c
              @click="handle_buy(props.row)"
            />
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </div>
</template>

<style lang="sass">
.grid-style-transition
  transition: transform .28s, background-color .28s
</style>
