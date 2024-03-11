<script setup lang="ts">
import { ref } from 'vue';
import { Escrow } from 'src/adapter/escrow_gen/accounts';
import { format_address } from '../../stores/format_address';
import AsyncDecimalsComponent from 'components/asyncComponents/AsyncDecimalsComponent.vue';
import EscrowDetails from 'components/details/EscrowDetails.vue';
import ExchangeEscrowButtonFill from 'components/actions/ExchangeEscrowButtonFill.vue';
import ExchangeEscrowButton from 'components/actions/ExchangeEscrowButton.vue';
import AsyncTokenAmountSlider from 'components/asyncComponents/AsyncTokenAmountSlider.vue';

const props = defineProps(['escrow']);

const escrow_child = ref(props.escrow);

const publickey = ref(props.escrow?.publicKey);
const escrow_account = ref<Escrow>(props.escrow?.account);
const amount_to_buy = ref(0);
</script>

<template>
  <q-card flat bordered>
    <q-card-section class="text-center">
      <div class="row">
        <div class="col">Maker</div>
        <div class="col"></div>
        <div class="col">Taker</div>
      </div>

      <div class="row items-center">
        <div class="col row items-center">
          <q-avatar>
            <img src="unknown.png" />
          </q-avatar>
          <p>{{ format_address(escrow_account?.depositToken?.toString()) }}</p>
        </div>
        <div class="col text-weight-light">- Token -</div>
        <div class="col row items-center">
          <q-avatar>
            <img src="unknown.png" />
          </q-avatar>
          <p>{{ format_address(escrow_account?.requestToken?.toString()) }}</p>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <AsyncDecimalsComponent
            :mint="escrow_account?.depositToken"
            :amount="escrow_account.tokensDepositRemaining"
          />
        </div>
        <div class="col text-weight-light">- Remaining -</div>
        <div class="col">
          <AsyncDecimalsComponent
            :mint="escrow_account?.requestToken"
            :amount="
              escrow_account.tokensDepositRemaining * escrow_account.price
            "
          />
        </div>
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

    <q-card-section class="q-gutter-y-sm">
      <div class="row" v-if="!escrow_account.allowPartialFill">
        <ExchangeEscrowButtonFill class="col" :escrow_address="publickey" />
      </div>

      <div class="col" v-else>
        <div class="row">
          <q-input
            class="col"
            standout
            square
            v-model="amount_to_buy"
            label="Buy"
            type="number"
          />
          <ExchangeEscrowButton
            :escrow_address="publickey"
            :exchange_amount="amount_to_buy"
          />
        </div>

        <AsyncTokenAmountSlider
          :tokensDepositRemaining="escrow_account.tokensDepositRemaining"
          :mint="escrow_account.depositToken"
          @slider-change="(data) => (amount_to_buy = data)"
        />
      </div>

      <!--      &lt;!&ndash;              <div&ndash;&gt;-->
      <!--      &lt;!&ndash;                v-if="&ndash;&gt;-->
      <!--      &lt;!&ndash;                  useWallet().publicKey?.value?.toString() ==&ndash;&gt;-->
      <!--      &lt;!&ndash;                  props.row.account.maker.toString()&ndash;&gt;-->
      <!--      &lt;!&ndash;                "&ndash;&gt;-->
      <!--      &lt;!&ndash;                class="row"&ndash;&gt;-->
      <!--      &lt;!&ndash;              >&ndash;&gt;-->
      <!--      &lt;!&ndash;                <CancelEscrowButton&ndash;&gt;-->
      <!--      &lt;!&ndash;                  :escrow_address="props.row.publicKey"&ndash;&gt;-->
      <!--      &lt;!&ndash;                  label="cancel"&ndash;&gt;-->
      <!--      &lt;!&ndash;                />&ndash;&gt;-->
      <!--      &lt;!&ndash;              </div>&ndash;&gt;-->
      <!--    </q-card-section>-->
      <!--    <q-separator />-->
      <q-expansion-item expand-separator icon="info" label="Details">
        <q-card-section>
          <EscrowDetails :escrow="escrow_child" />
        </q-card-section>
      </q-expansion-item>
    </q-card-section>
  </q-card>
</template>

<style scoped lang="sass"></style>
