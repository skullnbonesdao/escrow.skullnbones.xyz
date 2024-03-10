<script setup lang="ts">
import { Escrow } from 'src/adapter/escrow_gen/accounts';
import { ref } from 'vue';
import AsyncDecimalsComponent from 'components/asyncComponents/AsyncDecimalsComponent.vue';

const props = defineProps(['escrow']);

const publickey = ref(props.escrow?.publicKey);
const escrow = ref<Escrow>(props.escrow?.account);
</script>

<template>
  <div class="row">
    <div class="col">Escrow:</div>
    <strong class="col-9 text-right">{{ publickey }}</strong>
  </div>

  <div class="row">
    <div class="col">Maker:</div>
    <strong class="col-9 text-right">{{ escrow.maker }}</strong>
  </div>

  <div class="row">
    <div class="col">Deposit Token:</div>
    <strong class="col-9 text-right">{{ escrow.depositToken }}</strong>
  </div>

  <div class="row">
    <div class="col">Request Token:</div>
    <strong class="col-9 text-right">{{ escrow.requestToken }}</strong>
  </div>

  <div class="row">
    <div class="col">Deposit amount:</div>
    <strong class="col-9 text-right"
      ><AsyncDecimalsComponent
        :mint="escrow.depositToken"
        :amount="escrow.tokensDepositInit"
    /></strong>
  </div>

  <div class="row">
    <div class="col">Remaining amount:</div>
    <strong class="col-9 text-right"
      ><AsyncDecimalsComponent
        :mint="escrow.depositToken"
        :amount="escrow.tokensDepositRemaining"
    /></strong>
  </div>

  <div class="row">
    <div class="col">Price:</div>
    <strong class="col-9 text-right">{{ escrow.price }}</strong>
  </div>

  <div class="row">
    <div class="col">Recipient:</div>
    <strong class="col-9 text-right">{{
      !escrow.onlyRecipient ? escrow.onlyRecipient : escrow.recipient.toString()
    }}</strong>
  </div>

  <div class="row">
    <div class="col">Allow Partial fill:</div>
    <strong class="col-9 text-right">{{ escrow.allowPartialFill }}</strong>
  </div>

  <div class="row">
    <div class="col">Deal:</div>
    <strong class="col-9 text-right">{{ escrow.onlyWhitelist }}</strong>
  </div>
  <div class="row">
    <div class="col">Expire Timestamp:</div>
    <strong class="col-9 text-right">{{
      escrow.expireTimestamp != 0 ? escrow.expireTimestamp : 'never'
    }}</strong>
  </div>
</template>

<style scoped lang="sass"></style>
