<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { Escrow } from 'src/adapter/escrow_gen/accounts';
import { format_address } from '../../stores/format_address';
import AsyncDecimalsComponent from 'components/asyncComponents/AsyncDecimalsComponent.vue';
import EscrowDetails from 'components/details/EscrowDetails.vue';
import ExchangeEscrowButtonFill from 'components/actions/ExchangeEscrowButtonFill.vue';
import ExchangeEscrowButton from 'components/actions/ExchangeEscrowButton.vue';
import AsyncTokenAmountSlider from 'components/asyncComponents/AsyncTokenAmountSlider.vue';

import { amount2ui } from 'src/helper/tokenDecimalConversion';

const props = defineProps(['escrow']);

const escrow_child = ref(props.escrow);

const publickey = ref(props.escrow?.publicKey);
const escrow_account = ref<Escrow>(props.escrow?.account);
const amount_to_buy = ref(0);
const depositTokenAmountUI = ref(0);
const requestTokenAmountUI = ref(0);

onMounted(async () => {
  depositTokenAmountUI.value = await amount2ui(
    escrow_account.value.depositToken,
    escrow_account.value.tokensDepositRemaining.toNumber(),
  );
  requestTokenAmountUI.value = await amount2ui(
    escrow_account.value.requestToken,
    escrow_account.value.tokensDepositRemaining.toNumber() *
      escrow_account.value.price,
  );

  if (!escrow_account.value.allowPartialFill) {
    amount_to_buy.value = depositTokenAmountUI.value;
  }
});
</script>

<template>
  <q-card flat bordered>
    <q-card-section class="q-gutter-y-md">
      <div>
        <p class="text-weight-light text-green-9">You are buying</p>
        <q-card bordered flat class="bg-secondary">
          <q-card-section class="row items-center">
            <q-avatar>
              <img src="unknown.png" />
            </q-avatar>
            <p class="col q-mx-sm">
              {{ format_address(escrow_account?.depositToken?.toString(), 2) }}
            </p>
            <q-separator vertical class="q-mr-sm" />
            <div>
              <div class="col">
                <div class="row items-center justify-end q-gutter-x-xs">
                  <b class="text-right" style="width: 100px">{{
                    depositTokenAmountUI.toFixed(2)
                  }}</b>
                  <p class="text-right" style="font-size: smaller; width: 37px">
                    Available
                  </p>
                </div>
                <div class="row items-center justify-end q-gutter-x-xs">
                  <b class="text-right" style="width: 100px">{{
                    amount_to_buy.toFixed(2)
                  }}</b>
                  <p class="text-right" style="font-size: smaller; width: 37px">
                    Amount
                  </p>
                </div>
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>

      <div>
        <p class="text-weight-light text-red-9">You are selling</p>
        <q-card bordered flat class="bg-secondary">
          <q-card-section class="row items-center">
            <q-avatar>
              <img src="unknown.png" />
            </q-avatar>

            <p class="col q-mx-sm">
              {{ format_address(escrow_account?.depositToken?.toString(), 2) }}
            </p>

            <q-separator vertical class="q-mr-sm" />
            <div>
              <div class="col">
                <div class="row items-center justify-end q-gutter-x-xs">
                  <b class="text-right" style="width: 100px">{{
                    (amount_to_buy * escrow_account.price).toFixed(2)
                  }}</b>

                  <p class="text-right" style="font-size: smaller; width: 37px">
                    Amount
                  </p>
                </div>
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </q-card-section>

    <!--    <q-card-section class="q-mx-sm">-->
    <!--      <p class="text-weight-light">Remaining:</p>-->
    <!--      <q-linear-progress-->
    <!--        size="25px"-->
    <!--        :value="-->
    <!--          1 - -->
    <!--          (escrow_account.tokensDepositInit.toNumber() - -->
    <!--            escrow_account.tokensDepositRemaining.toNumber()) /-->
    <!--            escrow_account.tokensDepositInit.toNumber()-->
    <!--        "-->
    <!--        color="blue"-->
    <!--      >-->
    <!--        <div class="absolute-full flex flex-center">-->
    <!--          <q-badge-->
    <!--            color="white"-->
    <!--            text-color="secondary"-->
    <!--            :label="-->
    <!--              (1 - -->
    <!--                (escrow_account.tokensDepositInit.toNumber() - -->
    <!--                  escrow_account.tokensDepositRemaining.toNumber()) /-->
    <!--                  escrow_account.tokensDepositInit.toNumber()) *-->
    <!--                100 +-->
    <!--              '%'-->
    <!--            "-->
    <!--          />-->
    <!--        </div>-->
    <!--      </q-linear-progress>-->
    <!--    </q-card-section>-->
    <!--    <q-separator />-->

    <q-card-section class="q-gutter-y-sm items-center" style="height: 120px">
      <ExchangeEscrowButtonFill
        v-if="!escrow_account.allowPartialFill"
        class="full-width"
        :escrow_address="publickey"
      />
      <q-card bordered class="col bg-secondary q-pa-sm" flat v-else>
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
              :max="depositTokenAmountUI"
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
    <q-card-section class="q-gutter-y-sm">
      <q-list bordered class="rounded-borders">
        <q-expansion-item icon="info" label="Details">
          <q-card-section>
            <EscrowDetails :escrow="escrow_child" />
          </q-card-section>
        </q-expansion-item>
      </q-list>
    </q-card-section>
    <p class="text-right q-mx-sm q-mb-sm text-weight-thin">Fee: 0.006</p>
  </q-card>
</template>

<style scoped lang="sass"></style>
