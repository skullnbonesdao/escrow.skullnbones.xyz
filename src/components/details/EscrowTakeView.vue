<script setup lang="ts">
import { useGlobalStore } from 'stores/GlobalStore';
import { computed, ref, watch } from 'vue';
import ExchangeEscrowButton from 'components/actions/ExchangeEscrowButton.vue';
import { useWalletStore } from 'stores/WalletStore';
import { TAKER_FEE } from '../../stores/constants';
import { watchArray } from '@vueuse/core';

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
    calculate_side('sell');
  },
);

const amount_to_buy = ref(amount_to_buy_comp.value);
const amount_to_sell = ref(0);
calculate_side('sell');

watch(
  () => useGlobalStore().escrow_selected,
  () => {
    amount_to_buy.value = amount_to_buy_comp.value;
    calculate_side('sell');
  },
);

// function calc_percent_amount(percentage: number) {
//   amount_to_buy.value =
//     (useGlobalStore().escrow_selected?.account.tokensDepositRemaining.toNumber() ??
//       0) *
//     Math.pow(10, -(token_depostit_info.value?.decimals ?? 0)) *
//     percentage;
// }

function calculate_side(side: 'buy' | 'sell') {
  console.log(side);

  switch (side) {
    case 'buy':
      amount_to_buy.value =
        amount_to_sell.value /
        (useGlobalStore().escrow_selected?.account.price ?? 0);
      break;
    case 'sell':
      amount_to_sell.value =
        amount_to_buy.value *
        (useGlobalStore().escrow_selected?.account.price ?? 0);
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
    <q-card-section class="row q-py-none items-center">
      <q-badge outline label="Price per Unit" color="yellow" rounded />

      <div class="col q-gutter-y-xs">
        <div class="row q-gutter-x-sm">
          <div class="col text-subtitle1 text-weight-bold text-right">
            {{ useGlobalStore().escrow_selected?.account.price.toFixed(5) }}
          </div>

          <div>
            <q-avatar size="sm" color="white">
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
          </div>
        </div>
        <div class="row q-gutter-x-sm">
          <div class="col text-subtitle1 text-weight-bold text-right">
            {{
              (1 / useGlobalStore().escrow_selected?.account.price).toFixed(5)
            }}
          </div>
          <div>
            <q-avatar size="sm" color="white">
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
          </div>
        </div>
      </div>
    </q-card-section>
    <q-card-section class="q-gutter-y-md">
      <q-card bordered class="q-pa-sm bg-secondary" flat>
        <div class="row q-gutter-x-xs items-center">
          <q-badge outline label="TAKES" color="red" rounded />

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
          <p style="font-size: 12px">Available</p>
        </div>

        <div class="row items-center">
          <q-input
            :disable="
              !useGlobalStore().escrow_selected?.account.allowPartialFill
            "
            dense
            class="col text-h6"
            borderless
            v-model="amount_to_sell"
            label="Amount"
            type="number"
          />
          <q-avatar size="30px" class="overlapping" color="white">
            <img :src="token_request_info?.logoURI" />
          </q-avatar>
        </div>
      </q-card>

      <q-card flat>
        <q-card-section class="">
          <div class="row items-center">
            <q-btn
              color="primary"
              class="col"
              @click="calculate_side('buy')"
              icon="arrow_downward"
            ></q-btn>
            <q-btn class="col" icon="calculate">
              <q-tooltip>Calculate side</q-tooltip>
            </q-btn>
            <q-btn
              color="primary"
              class="col"
              @click="calculate_side('sell')"
              icon="arrow_upward"
            ></q-btn>
          </div>
        </q-card-section>
      </q-card>

      <q-card bordered class="q-pa-sm bg-secondary" flat>
        <div><q-badge outline label="GIVES" color="green" rounded /></div>
        <div class="col">
          <div class="row items-center">
            <q-input
              :disable="
                !useGlobalStore().escrow_selected?.account.allowPartialFill
              "
              dense
              class="col text-h6"
              borderless
              v-model="amount_to_buy"
              label="Amount"
              type="number"
            />
            <q-avatar size="30px" color="white">
              <img :src="token_depostit_info?.logoURI" />
            </q-avatar>
          </div>

          <q-slider
            class="q-px-sm"
            dense
            v-model="amount_to_buy"
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
        </div>
      </q-card>
    </q-card-section>
    <q-card-section class="q-gutter-y-sm">
      <q-card flat class="bg-secondary">
        <q-card-section>
          <div class="text-h6 text-center">Your Wallet-Changes</div>
          <q-separator />
          <div class="row items-center text-subtitle2">
            <div class="col">
              {{ token_request_info?.symbol }}
            </div>
            <div class="text-subtitle1 text-bold text-red">
              -{{ amount_to_sell }}
            </div>
          </div>
          <div class="row items-center">
            <div class="col text-subtitle2">
              {{ token_depostit_info?.symbol }}
            </div>
            <div class="text-subtitle1 text-bold text-green">
              +{{ amount_to_buy }}
            </div>
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
