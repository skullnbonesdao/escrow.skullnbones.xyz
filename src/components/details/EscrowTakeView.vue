<script setup lang="ts">
import { useGlobalStore } from 'stores/GlobalStore';
import { computed, ref, watch } from 'vue';
import ExchangeEscrowButton from 'components/actions/ExchangeEscrowButton.vue';
import { useWalletStore } from 'stores/WalletStore';
import { TAKER_FEE } from '../../stores/constants';
import { watchArray } from '@vueuse/core';
import { useQuasar } from 'quasar';

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
    calculate_side('sell', amount_to_buy.value);
  },
);

const amount_to_buy = ref<number>(amount_to_buy_comp.value);
const amount_to_sell = ref(0);
calculate_side('sell', amount_to_buy.value);

watch(
  () => useGlobalStore().escrow_selected,
  () => {
    amount_to_buy.value = amount_to_buy_comp.value;
    calculate_side('sell', amount_to_buy.value);
  },
);

function calc_percent_amount(percentage: number) {
  amount_to_buy.value =
    (useGlobalStore().escrow_selected?.account.tokensDepositRemaining.toNumber() ??
      0) *
    Math.pow(10, -(token_depostit_info.value?.decimals ?? 0)) *
    percentage;

  calculate_side('sell', amount_to_buy.value);
}

function calculate_side(side: 'buy' | 'sell', other: number) {
  console.log(side);

  switch (side) {
    case 'buy':
      amount_to_buy.value =
        other / (useGlobalStore().escrow_selected?.account.price ?? 0);
      break;
    case 'sell':
      amount_to_sell.value =
        other * (useGlobalStore().escrow_selected?.account.price ?? 0);
  }

  console.log(amount_to_buy.value);
  console.log(amount_to_sell.value);
}
</script>

<template>
  <q-card flat>
    <q-card-section class="row">
      <div class="row">
        <q-avatar size="40px" color="white">
          <img :src="token_request_info?.logoURI" />
        </q-avatar>
        <q-avatar
          size="40px"
          class="overlapping"
          :style="`right: ${15}px`"
          color="white"
        >
          <img :src="token_depostit_info?.logoURI" />
        </q-avatar>
      </div>
      <div class="row items-center q-gutter-x-xs">
        <b>{{ token_request_info?.symbol }}</b>
        <q-icon size="sm" name="chevron_right" />
        <b>{{ token_depostit_info?.symbol }}</b>
      </div>
      <q-space />
      <q-icon
        size="sm"
        name="balance"
        :color="
          useGlobalStore().escrow_selected?.account.allowPartialFill
            ? 'purple'
            : 'grey'
        "
      >
        <q-tooltip
          >Partial fill
          {{
            useGlobalStore().escrow_selected?.account.allowPartialFill
              ? ''
              : 'NOT '
          }}
          allowed</q-tooltip
        >
      </q-icon>
    </q-card-section>
    <q-card-section class="">
      <q-card flat bordered>
        <q-card-section class="items-center bg-secondary">
          <div class="row">
            <q-space class="col" />
            <q-badge outline label="Price per Unit" color="yellow" rounded />
            <q-space class="col" />
          </div>
          <q-separator class="q-my-sm" />

          <div class="col q-gutter-y-xs">
            <div class="row q-gutter-x-sm items-center">
              <div class="col text-subtitle1 text-weight-bold text-right">
                {{ useGlobalStore().escrow_selected?.account.price.toFixed(5) }}
              </div>

              <q-avatar size="xs" color="white">
                <q-img
                  :src="
                    useGlobalStore().token_list.find(
                      (token) =>
                        token.address ==
                        useGlobalStore().escrow_selected?.account.requestToken.toString(),
                    )?.logoURI ?? 'unknown.png'
                  "
                />
              </q-avatar>

              <div class="text-subtitle2 col">
                {{
                  useGlobalStore().token_list.find(
                    (token) =>
                      token.address ==
                      useGlobalStore().escrow_selected?.account.requestToken.toString(),
                  )?.name
                }}
              </div>
            </div>
            <div class="row q-gutter-x-sm items-center">
              <div class="col text-subtitle1 text-weight-bold text-right">
                {{
                  (1 / useGlobalStore().escrow_selected?.account.price).toFixed(
                    5,
                  )
                }}
              </div>
              <q-avatar size="xs" color="white">
                <q-img
                  :src="
                    useGlobalStore().token_list.find(
                      (token) =>
                        token.address ==
                        useGlobalStore().escrow_selected?.account.depositToken.toString(),
                    )?.logoURI ?? 'unknown.png'
                  "
                />
              </q-avatar>
              <div class="text-subtitle2 col">
                {{
                  useGlobalStore().token_list.find(
                    (token) =>
                      token.address ==
                      useGlobalStore().escrow_selected?.account.depositToken.toString(),
                  )?.name
                }}
              </div>
            </div>
          </div>
        </q-card-section>
      </q-card>
    </q-card-section>
    <q-card-section class="q-gutter-y-sm">
      <q-card bordered class="q-pa-sm bg-secondary" flat>
        <div class="row items-center q-gutter-x-xs">
          <q-badge outline label="YOU GIVE" color="red" rounded />
          <p class="col text-subtitle2 text-right">
            {{
              (
                useWalletStore().accounts_mapped.find(
                  (a) =>
                    a.mint ==
                    useGlobalStore().escrow_selected?.account.requestToken.toString(),
                )?.amount *
                10 **
                  -useWalletStore().accounts_mapped.find(
                    (a) =>
                      a.mint ==
                      useGlobalStore().escrow_selected?.account.requestToken.toString(),
                  )?.decimals
              ).toFixed(2)
            }}
          </p>
          <p style="font-size: 12px">Wallet-Balance</p>
        </div>
        <div class="row items-center">
          <q-input
            :disable="
              !useGlobalStore().escrow_selected?.account.allowPartialFill
            "
            @update:model-value="(data) => calculate_side('buy', data)"
            dense
            class="col text-h6"
            borderless
            v-model="amount_to_sell"
            label="Amount"
            type="number"
            :rules="[
              (val) =>
                val <=
                  useWalletStore().accounts_mapped.find(
                    (a) =>
                      a.mint ==
                      useGlobalStore().escrow_selected?.account.requestToken.toString(),
                  )?.amount *
                    10 **
                      -useWalletStore().accounts_mapped.find(
                        (a) =>
                          a.mint ==
                          useGlobalStore().escrow_selected?.account.requestToken.toString(),
                      )?.decimals || 'You dont have enough tokens to exchange!',
            ]"
          />

          <q-avatar size="sm" class="overlapping" color="white">
            <img :src="token_request_info?.logoURI" />
          </q-avatar>
        </div>
      </q-card>
      <q-card bordered class="q-pa-sm bg-secondary" flat>
        <div class="row q-gutter-x-xs items-center">
          <q-badge outline label="YOU RECEIVE" color="green" rounded />
          <p class="col text-subtitle2 text-right">
            {{
              (
                useWalletStore().accounts_mapped.find(
                  (a) =>
                    a.mint ==
                    useGlobalStore().escrow_selected?.account.depositToken.toString(),
                )?.amount *
                10 **
                  -useWalletStore().accounts_mapped.find(
                    (a) =>
                      a.mint ==
                      useGlobalStore().escrow_selected?.account.depositToken.toString(),
                  )?.decimals
              ).toFixed(2)
            }}
          </p>
          <p style="font-size: 12px">Wallet-Balance</p>
        </div>
        <div class="row items-center">
          <q-input
            :disable="
              !useGlobalStore().escrow_selected?.account.allowPartialFill
            "
            @update:model-value="(data) => calculate_side('sell', data)"
            dense
            class="col text-h6"
            borderless
            v-model="amount_to_buy"
            label="Amount"
            type="number"
          />
          <q-avatar size="sm" color="white">
            <img :src="token_depostit_info?.logoURI" />
          </q-avatar>
          <q-slider
            class="q-px-sm"
            dense
            v-model="amount_to_buy"
            @update:model-value="(data) => calculate_side('sell', data)"
            :disable="
              !useGlobalStore().escrow_selected?.account.allowPartialFill
            "
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
        </div>
        <div class="q-px-sm row">
          <q-btn
            :disable="
              !useGlobalStore().escrow_selected?.account.allowPartialFill
            "
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
      </q-card>
    </q-card-section>
    <q-card-section class="q-gutter-y-sm">
      <q-card flat bordered class="bg-secondary">
        <q-card-section class="q-gutter-y-sm">
          <div class="row">
            <q-space class="col" />
            <q-badge
              outline
              label="Your wallet balance change"
              color="blue"
              rounded
            />
            <q-space class="col" />
          </div>
          <q-separator />
          <div class="row items-center text-subtitle2 q-gutter-x-sm">
            <div class="col">
              {{ token_request_info?.symbol }}
            </div>
            <div class="text-subtitle1 text-bold text-red">
              -{{
                (
                  Math.round(amount_to_buy) *
                  useGlobalStore().escrow_selected?.account.price
                ).toFixed(2)
              }}
            </div>
            <q-avatar size="sm" color="white">
              <img :src="token_request_info?.logoURI" />
            </q-avatar>
          </div>
          <div class="row items-center q-gutter-x-sm">
            <div class="col text-subtitle2">
              {{ token_depostit_info?.symbol }}
            </div>
            <div class="text-subtitle1 text-bold text-green">
              +{{ Math.trunc(amount_to_buy).toFixed(2) }}
            </div>
            <q-avatar size="sm" color="white">
              <img :src="token_depostit_info?.logoURI" />
            </q-avatar>
          </div>
        </q-card-section>
      </q-card>
    </q-card-section>
    <q-card-section class="">
      <ExchangeEscrowButton
        :escrow_address="useGlobalStore().escrow_selected?.publicKey"
        :exchange_amount="amount_to_buy"
      />
      <p class="text-right q-mt-sm text-weight-thin">
        Fee:
        {{ useWalletStore().is_whitelisted ? TAKER_FEE / 2 : TAKER_FEE }}sol
      </p>
    </q-card-section>
  </q-card>
</template>

<style scoped lang="sass"></style>
