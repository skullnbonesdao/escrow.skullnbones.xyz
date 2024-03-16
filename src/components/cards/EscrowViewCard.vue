<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue';
import { Escrow } from 'src/adapter/escrow_gen/accounts';
import { format_address } from '../../stores/format_address';
import AsyncDecimalsComponent from 'components/asyncComponents/AsyncDecimalsComponent.vue';
import EscrowDetails from 'components/details/EscrowDetails.vue';
import ExchangeEscrowButtonFill from 'components/actions/ExchangeEscrowButtonFill.vue';
import ExchangeEscrowButton from 'components/actions/ExchangeEscrowButton.vue';
import AsyncTokenAmountSlider from 'components/asyncComponents/AsyncTokenAmountSlider.vue';

import { amount2ui } from 'src/helper/tokenDecimalConversion';
import { useGlobalStore } from '../../stores/GlobalStore';

const props = defineProps(['escrow']);

const publickey = computed(() => {
  return props.escrow.publicKey as Escrow;
});
const amount_to_buy = ref(0);

const escrow_account = computed(() => {
  return props.escrow.account as Escrow;
});

watch(
  () => escrow_account.value,
  () => {
    amount_to_buy.value = findAndFormatAmountUI(
      escrow_account.value.tokensDepositRemaining.toNumber(),
      escrow_account.value.depositToken.toString(),
    );
  },
);

onMounted(() => {
  amount_to_buy.value = findAndFormatAmountUI(
    escrow_account.value.tokensDepositRemaining.toNumber(),
    escrow_account.value.depositToken.toString(),
  );
});

function findAndFormatAmountUI(
  amount: number | undefined,
  mint: string | undefined,
) {
  if (amount && mint)
    return (
      amount *
      Math.pow(
        10,
        -(
          useGlobalStore().token_list.find((t) => t.address == mint)
            ?.decimals ?? 0
        ),
      )
    );
  else return 0;
}
</script>

<template>
  <q-card flat v-if="escrow && escrow_account">
    <q-card-section>
      <q-card flat class="bg-secondary q-mb-sm" bordered>
        <p class="text-subtitle1 text-green-7 q-ml-md q-mt-sm">Buying</p>
        <q-card-section class="row items-center q-gutter-x-xs">
          <q-avatar>
            <img
              :src="
                useGlobalStore().token_list.find(
                  (token) =>
                    token.address == escrow.account?.depositToken.toString(),
                )?.logoURI ?? 'unknown.png'
              "
            />
          </q-avatar>
          <p class="">
            {{
              useGlobalStore().token_list.find(
                (token) =>
                  token.address == escrow_account?.depositToken.toString(),
              )?.symbol
            }}
          </p>
          <q-space />
          <b class="col text-right">{{ amount_to_buy.toFixed(2) }}</b>
        </q-card-section>
      </q-card>

      <q-card flat class="bg-secondary q-mb-sm" bordered>
        <q-card-section class="row items-center">
          <p class="text-subtitle1 text-orange-6">Price</p>
          <div class="col text-right">
            {{ escrow_account.price.toFixed(2) }}
          </div>
        </q-card-section>
      </q-card>

      <q-card flat class="bg-secondary" bordered>
        <p class="text-subtitle1 text-red-7 q-ml-md q-mt-sm">Selling</p>
        <q-card-section class="row items-center">
          <q-avatar>
            <img
              :src="
                useGlobalStore().token_list.find(
                  (token) =>
                    token.address == escrow_account?.requestToken.toString(),
                )?.logoURI ?? 'unknown.png'
              "
            />
          </q-avatar>

          <p class="col q-mx-sm">
            {{
              useGlobalStore().token_list.find(
                (token) =>
                  token.address == escrow_account?.depositToken.toString(),
              )?.symbol
            }}
          </p>
          <div>
            <div class="col">
              <b class="text-right">{{
                (amount_to_buy * escrow_account?.price).toFixed(2)
              }}</b>
            </div>
          </div>
        </q-card-section>
      </q-card>
    </q-card-section>
    <q-separator />
    <q-card-section>
      <ExchangeEscrowButtonFill
        v-if="!escrow_account?.allowPartialFill"
        class="full-width"
        :escrow_address="publickey"
      />
      <q-card bordered class="col q-pa-sm bg-secondary" flat v-else>
        <div class="row q-gutter-x-sm">
          <div class="col">
            <q-input
              dense
              class="col"
              standout
              square
              v-model="amount_to_buy"
              label="Amount"
              type="number"
            />
            <q-slider
              class="q-px-sm q-pt-sm"
              dense
              v-model="amount_to_buy"
              :min="0"
              :max="
                findAndFormatAmountUI(
                  escrow_account.tokensDepositRemaining.toNumber(),
                  escrow_account.depositToken.toString(),
                )
              "
              color="blue"
              track-size="10px"
              thumb-color="black"
              markers
            />
          </div>
          <ExchangeEscrowButton
            :escrow_address="publickey"
            :exchange_amount="amount_to_buy"
          />
        </div>
      </q-card>
    </q-card-section>
    <q-separator />
    <q-card-section>
      <q-list bordered class="rounded-borders">
        <q-expansion-item icon="info" label="Details">
          <q-card-section>
            <EscrowDetails
              v-if="escrow"
              :escrow="useGlobalStore().escrow_selected"
            />
          </q-card-section>
        </q-expansion-item>
      </q-list>
    </q-card-section>
    <p class="text-right q-mx-sm q-mb-sm text-weight-thin">Fee: 0.006</p>
  </q-card>
</template>

<style scoped lang="sass"></style>
