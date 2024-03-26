<script setup lang="ts">
import { useWorkspace } from 'src/adapter/adapterPrograms';
import { computed, onMounted, ref, watch } from 'vue';
import { I_Escrows, useGlobalStore } from 'stores/GlobalStore';
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
import EscrowDetails from 'components/details/EscrowDetails.vue';
import EscrowViewCard from 'components/cards/EscrowViewCard.vue';
import SelectTokenDropdown from 'components/dropdowns/SelectTokenDropdown.vue';
import { token } from '@metaplex-foundation/js';
import EscrowTakeDrawer from 'components/drawer/EscrowTakeDrawer.vue';
import EscrowStateElement from 'components/details/EscrowStateElement.vue';
import { useRoute } from 'vue-router';

const props = defineProps(['title', 'escrow_filter', 'show_close_button']);

const show_close = ref(false);

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

function handle_action(escrow: any) {
  if (!props.show_close_button) {
    if (escrow.publicKey != useGlobalStore().escrow_selected?.publicKey) {
      useGlobalStore().escrow_selected = escrow;
      useGlobalStore().showRightDrawer = true;
    } else {
      useGlobalStore().showRightDrawer = !useGlobalStore().showRightDrawer;
    }
  } else {
    useGlobalStore().escrow_selected = escrow;
    show_close.value = !show_close.value;
  }
}

const pagination = ref({
  page: 1,
});

const columns = ref([
  { name: 'sides', label: '', style: 'width: 20px' },
  { name: 'amounts', label: 'Amounts' },
  { name: 'icons', label: 'Tokens', align: 'center', style: 'width: 50px' },

  { name: 'price', label: 'Price', align: 'center' },

  { name: 'balance', label: '', style: 'width: 20px' },
  { name: 'expire', label: '', style: 'width: 20px' },
  { name: 'creator', label: '', style: 'width: 20px' },
  { name: 'state', label: '', style: 'width: 20px' },
  { name: 'take', label: '', style: 'width: 20px' },
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
  <q-table
    flat
    :title="props.title"
    :rows="useGlobalStore().escrows_filtered"
    :columns="columns"
    row-key="name"
    :filter="filter"
    v-model:pagination="pagination"
  >
    <template v-slot:top> </template>

    <template v-slot:body="props">
      <q-tr :props="props" @click="handle_action(props.row)">
        <q-td key="sides" :props="props">
          <div class="col items-center">
            <q-badge outline label="BUY" color="green" rounded />

            <div class="q-my-md" />

            <q-badge outline label="SELL" color="red" rounded />
          </div>
        </q-td>

        <q-td key="amounts" :props="props">
          <div class="col">
            <div class="col text-right text-h6">
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
            </div>
            <q-separator class="q-my-sm" />
            <div class="text-right text-h6">
              {{
                (
                  props.row.account.tokensDepositRemaining *
                  10 **
                    -useGlobalStore().token_list.find(
                      (token) =>
                        token.address ==
                        props.row.account.depositToken.toString(),
                    )?.decimals *
                  props.row.account.price
                ).toFixed(2)
              }}
            </div>
          </div>
        </q-td>

        <q-td key="icons" :props="props">
          <div class="col items-center q-gutter-x-sm">
            <q-avatar size="md">
              <q-img
                :src="
                  useGlobalStore().token_list.find(
                    (token) =>
                      token.address ==
                      props.row.account.depositToken.toString(),
                  )?.logoURI ?? 'unknown.png'
                "
              />
            </q-avatar>

            <div style="font-size: 10px">
              {{
                useGlobalStore().token_list.find(
                  (token) =>
                    token.address == props.row.account.depositToken.toString(),
                ).symbol
              }}
            </div>
          </div>

          <div class="col items-center q-gutter-x-sm">
            <q-avatar size="md">
              <q-img
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
                    token.address == props.row.account.requestToken.toString(),
                ).symbol
              }}
            </p>
          </div>
        </q-td>

        <q-td key="price" :props="props">
          <div class="text-h5 text-weight-bold">
            {{ props.row.account.price.toFixed(5) }}
          </div>
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

        <q-td key="state" :props="props">
          <EscrowStateElement :escrow="props.row" />
        </q-td>

        <q-td v-if="!show_close_button" key="take" :props="props">
          <q-btn color="primary" icon="send" />
        </q-td>

        <q-td v-if="show_close_button" key="take" :props="props">
          <q-btn color="primary" icon="close" />
        </q-td>
      </q-tr>

      <q-tr
        :props="props"
        v-if="
          show_close &&
          props.row.publicKey ==
            useGlobalStore().escrow_selected.publicKey.toString()
        "
      >
        <q-td colspan="100%">
          <CancelEscrowButton
            class="full-width"
            :escrow_address="props.row.publicKey"
            :label="`${
              props.row.account.tokensDepositRemaining > 0 ? 'cancel' : 'close'
            } (+${ACCOUNT_COST_ESCROW}sol)`"
          />
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
        <q-td
          v-if="!show_close_button"
          colspan="100%"
          class="bg-secondary q-ma-none q-pa-none"
        >
          <EscrowTakeDrawer />
        </q-td>
      </q-tr>
    </template>
  </q-table>
</template>

<style lang="sass">
.grid-style-transition
  transition: transform .28s, background-color .28s
</style>
