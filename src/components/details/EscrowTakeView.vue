<script setup lang="ts">
import { useGlobalStore } from 'stores/GlobalStore';
import { computed, ref, watch } from 'vue';
import ExchangeEscrowButton from 'components/actions/ExchangeEscrowButton.vue';

const token_depostit_info = computed(() => {
  return useGlobalStore().token_list.find(
    (t) =>
      t.address ==
      useGlobalStore().escrow_selected?.account.depositToken.toString(),
  );
});

const token_request_info = computed(() => {
  return useGlobalStore().token_list.find(
    (t) =>
      t.address ==
      useGlobalStore().escrow_selected?.account.requestToken.toString(),
  );
});

const amount_to_buy_comp = computed(() => {
  return parseInt(
    (
      (useGlobalStore().escrow_selected?.account.tokensDepositRemaining.toNumber() ??
        0) * Math.pow(10, -(token_depostit_info.value?.decimals ?? 0))
    ).toFixed(2),
  );
});

watch(
  () => amount_to_buy_comp.value,
  () => {
    amount_to_buy.value = amount_to_buy_comp.value;
  },
);

const amount_to_buy = ref(amount_to_buy_comp.value);

function calc_percent_amount(percentage: number) {
  amount_to_buy.value =
    (useGlobalStore().escrow_selected?.account.tokensDepositRemaining.toNumber() ??
      0) *
    Math.pow(10, -(token_depostit_info.value?.decimals ?? 0)) *
    percentage;
}
</script>

<template>
  <q-card flat>
    <q-card-section class="row items-center">
      <div class="row">
        <div>
          <q-avatar size="40px">
            <img :src="token_depostit_info?.logoURI" />
          </q-avatar>
          <q-avatar size="40px" class="overlapping" :style="`right: ${15}px`">
            <img :src="token_request_info?.logoURI" />
          </q-avatar>
        </div>
        <div class="row items-center q-gutter-x-xs">
          <b>{{ token_depostit_info?.symbol }}</b>
          <p>/</p>
          <b>{{ token_request_info?.symbol }}</b>
        </div>
      </div>
    </q-card-section>
    <q-card-section class="row q-py-none items-center">
      <p class="col">Price</p>

      <p class="text-subtitle1">
        {{ useGlobalStore().escrow_selected?.account.price.toFixed(2) }}
      </p>
    </q-card-section>
    <q-card-section class="q-gutter-y-md">
      <q-card
        bordered
        class="q-pa-sm bg-secondary"
        flat
        :disabled="!useGlobalStore().escrow_selected?.account.allowPartialFill"
      >
        <div><q-badge outline label="BUYING" color="green" rounded /></div>
        <div class="col">
          <div class="row items-center">
            <q-input
              dense
              class="col"
              borderless
              v-model="amount_to_buy"
              label="Amount"
              type="number"
            />
            <q-avatar size="30px">
              <img :src="token_depostit_info?.logoURI" />
            </q-avatar>
          </div>

          <q-slider
            class="q-px-sm"
            dense
            v-model="amount_to_buy"
            :min="0"
            :max="
              useGlobalStore().escrow_selected?.account.tokensDepositRemaining.toNumber() *
              Math.pow(10, -token_depostit_info?.decimals)
            "
            color="blue"
            track-size="10px"
            thumb-color="black"
            markers
          />
          <div class="q-px-sm row">
            <q-btn
              dense
              flat
              class="col"
              label="25%"
              @click="calc_percent_amount(0.25)"
            />
            <q-btn
              :disable="
                !useGlobalStore().escrow_selected?.account.allowPartialFill
              "
              dense
              flat
              class="col"
              label="50%"
              @click="calc_percent_amount(0.5)"
            />
            <q-btn
              :disable="
                !useGlobalStore().escrow_selected?.account.allowPartialFill
              "
              dense
              flat
              class="col"
              label="75%"
              @click="calc_percent_amount(0.75)"
            />
            <q-btn
              :disable="
                !useGlobalStore().escrow_selected?.account.allowPartialFill
              "
              dense
              flat
              class="col"
              label="Max"
              @click="calc_percent_amount(1)"
            />
          </div>
        </div>
      </q-card>
      <q-card disabled="" bordered class="q-pa-sm bg-secondary" flat>
        <div><q-badge outline label="SELLING" color="red" rounded /></div>
        <div class="row items-center">
          <q-input
            dense
            class="col"
            borderless
            v-model="amount_to_buy"
            label="Amount"
            type="number"
          />
          <q-avatar size="30px" class="overlapping">
            <img :src="token_request_info?.logoURI" />
          </q-avatar>
        </div>
      </q-card>
    </q-card-section>
    <q-card-section class="">
      <ExchangeEscrowButton
        :escrow_address="useGlobalStore().escrow_selected?.publicKey"
        :exchange_amount="amount_to_buy"
      />
    </q-card-section>
  </q-card>
</template>

<style scoped lang="sass"></style>
