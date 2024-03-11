<script setup lang="ts">
import { Escrow } from 'src/adapter/escrow_gen/accounts';
import { ref } from 'vue';
import AsyncDecimalsComponent from 'components/asyncComponents/AsyncDecimalsComponent.vue';
import { format_address } from '../../functions/format_address';

const props = defineProps(['escrow']);

const publickey = ref(props.escrow?.publicKey);
const escrow = ref<Escrow>(props.escrow?.account);
</script>

<template>
  <div class="row">
    <div class="col">Escrow:</div>
    <strong class="col-9 text-right">{{
      format_address(publickey.toString())
    }}</strong>
  </div>

  <div class="row">
    <div class="col">Maker:</div>
    <strong class="col-9 text-right">{{
      format_address(escrow.maker.toString())
    }}</strong>
  </div>

  <div class="row">
    <div class="col">DepositedMint:</div>
    <strong class="col-9 text-right">{{
      format_address(escrow.depositToken.toString())
    }}</strong>
  </div>

  <div class="row">
    <div class="col">RequestMint:</div>
    <strong class="col-9 text-right">{{
      format_address(escrow.requestToken.toString())
    }}</strong>
  </div>

  <div class="row">
    <div class="col">DepositAmount:</div>
    <strong class="col-9 text-right"
      ><AsyncDecimalsComponent
        :mint="escrow.depositToken"
        :amount="escrow.tokensDepositInit"
    /></strong>
  </div>

  <div class="row">
    <div class="col nowrap">RemainingAmount:</div>
    <strong class="col-9 text-right"
      ><AsyncDecimalsComponent
        :mint="escrow.depositToken"
        :amount="escrow.tokensDepositRemaining"
    /></strong>
  </div>

  <div class="row">
    <div class="col">Price:</div>
    <strong class="col-9 text-right">{{ escrow.price.toString() }}</strong>
  </div>

  <div class="row">
    <div class="col">Recipient:</div>
    <strong class="col-9 text-right">{{
      !escrow.onlyRecipient
        ? 'any'
        : format_address(escrow.recipient.toString())
    }}</strong>
  </div>

  <div class="row">
    <div class="col">Allow Partial fill:</div>
    <strong class="col-9 text-right">{{
      escrow.allowPartialFill.toString()
    }}</strong>
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
