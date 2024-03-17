<script setup lang="ts">
import { useWorkspace } from 'src/adapter/adapterPrograms';
import { computed, onMounted, ref, watch } from 'vue';
import { I_Escrows, useGlobalStore } from 'stores/GlobalStore';
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
import SelectTokenDropdown from 'components/dropdowns/SelectTokenDropdown.vue';
import { token } from '@metaplex-foundation/js';
import EscrowTakeDrawer from 'components/drawer/EscrowTakeDrawer.vue';

const props = defineProps(['title', 'escrow_filter']);

const $q = useQuasar();

let escrows = computed(() => {
  let escrows_list = useGlobalStore().escrows;

  switch (props.escrow_filter) {
    case 'p2p':
      escrows_list = useGlobalStore().escrows?.filter(
        (escrow) =>
          escrow.account.recipient.toString() != NULL_ADDRESS.toString() &&
          (escrow.account.maker.toString() ==
            useWallet().publicKey.value?.toString() ||
            escrow.account.recipient.toString() ==
              useWallet().publicKey.value?.toString()),
      );
      break;
    case 'b2b':
      escrows_list = useGlobalStore().escrows?.filter(
        (escrow) => escrow.account.onlyWhitelist == true,
      );
      break;
    default:
      escrows_list = useGlobalStore().escrows?.filter(
        (escrow) =>
          escrow.account.recipient.toString() == NULL_ADDRESS.toString() &&
          escrow.account.onlyWhitelist != true &&
          escrow.account.tokensDepositRemaining.toNumber() > 0,
      );
      break;
  }

  if (token_selected.value) {
    if (accepted.value.some((v) => v == 'buying')) {
      console.log(token_selected.value.mint.toString());
      escrows_list = escrows_list?.filter(
        (e) =>
          e.account.depositToken.toString() ==
          token_selected.value.mint.toString(),
      );
    }
    if (accepted.value.some((v) => v == 'selling')) {
      console.log(token_selected.value.mint.toString());
      escrows_list = escrows_list?.filter(
        (e) =>
          e.account.requestToken.toString() ===
          token_selected.value.mint.toString(),
      );
    }
  }
  return escrows_list;
});

watch(
  () => useGlobalStore().is_initialized,
  async () => {
    await useGlobalStore().load_all_escrows();
  },
);

onMounted(async () => {
  if (useGlobalStore().is_initialized) {
    await useGlobalStore().load_all_escrows();
  }
});

function handle_buy(escrow: any) {
  if (escrow.publicKey != useGlobalStore().escrow_selected?.publicKey) {
    useGlobalStore().escrow_selected = escrow;
    useGlobalStore().showRightDrawer = true;
  } else {
    useGlobalStore().showRightDrawer = !useGlobalStore().showRightDrawer;
  }
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
  { name: 'balance', label: '' },
  { name: 'expire', label: '' },
  { name: 'creator', label: '' },
  { name: 'take', label: '' },
]);

const options = ref([
  {
    label: 'Buying',
    value: 'buying',
  },
  {
    label: 'Selling',
    value: 'selling',
  },
]);

const accepted = ref([]);
const token_selected = ref();
</script>

<template>
  <div class="q-pa-md">
    <div class="row">
      <SelectTokenDropdown
        class="col full-width"
        @mint_selected="(data) => (token_selected = data)"
      />

      <div class="bg-secondary">
        <q-option-group
          class="q-pa-sm q-pr-md"
          name="accepted_genres"
          v-model="accepted"
          :options="options"
          type="checkbox"
          color="primary"
          inline
        />
      </div>
    </div>

    <q-table
      flat
      :title="props.title"
      :rows="escrows"
      :columns="columns"
      row-key="name"
      :filter="filter"
      v-model:pagination="pagination"
    >
      <template v-slot:top> </template>

      <template v-slot:body="props">
        <q-tr :props="props" @click="handle_buy(props.row)">
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
              {{
                (
                  props.row.account.price *
                  Math.pow(
                    10,
                    useGlobalStore().token_list.find(
                      (token) =>
                        token.address ==
                        props.row.account.depositToken.toString(),
                    ).decimals -
                      useGlobalStore().token_list.find(
                        (token) =>
                          token.address ==
                          props.row.account.requestToken.toString(),
                      ).decimals,
                  )
                ).toFixed(2)
              }}
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
                        props.row.account.requestToken.toString(),
                    ).decimals,
                  ) *
                  props.row.account.price
                ).toFixed(2)
              }}
            </b>
          </q-td>

          <q-td key="balance" :props="props">
            <q-icon
              size="sm"
              name="balance"
              :color="props.row.account.allowPartialFill ? 'purple' : 'grey'"
            >
              <q-tooltip
                >Partial fill
                {{ props.row.account.allowPartialFill ? '' : 'NOT ' }}
                allowed</q-tooltip
              >
            </q-icon>
          </q-td>
          <q-td key="expire" :props="props">
            <q-icon
              size="sm"
              name="timer"
              :color="props.row.account.expireTimestamp > 0 ? 'orange' : 'grey'"
            >
              <q-tooltip
                >Will
                {{ props.row.account.expireTimestamp > 0 ? '' : 'NOT ' }}
                expire</q-tooltip
              >
            </q-icon>
          </q-td>
          <q-td key="creator" :props="props">
            <q-icon
              size="sm"
              name="design_services"
              :color="
                props.row.account.maker.toString() ==
                useWallet().publicKey.value?.toString()
                  ? 'orange'
                  : 'grey'
              "
            >
              <q-tooltip
                >You are
                {{
                  props.row.account.maker.toString() ==
                  useWallet().publicKey.value?.toString()
                    ? ''
                    : 'NOT '
                }}
                the creator</q-tooltip
              >
            </q-icon>
          </q-td>
          <q-td key="take" :props="props">
            <q-btn flat color="primary" icon="send" />
          </q-td>
        </q-tr>
        <q-tr
          no-hover
          :props="props"
          v-if="
            useQuasar().screen.lt.md &&
            useGlobalStore().showRightDrawer &&
            props.row.publicKey ==
              useGlobalStore().escrow_selected.publicKey.toString()
          "
        >
          <q-td colspan="100%" class="bg-secondary q-ma-none q-pa-none">
            <EscrowTakeDrawer class="q-pb-md" />
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
