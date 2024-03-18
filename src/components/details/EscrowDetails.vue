<script setup lang="ts">
import { format_address } from '../../functions/format_address';
import { useGlobalStore } from '../../stores/GlobalStore';
import { computed } from 'vue';

const remaining_percentage = computed(() => {
  return (
    ((useGlobalStore().escrow_selected?.account.tokensDepositRemaining.toNumber() ??
      0) /
      (useGlobalStore().escrow_selected?.account.tokensDepositInit.toNumber() ??
        0)) *
    100
  );
});
</script>

<template>
  <div class="col q-gutter-y-md">
    <div class="row items-center">
      <p class="text-h6 col">State</p>
      <p class="col text-right" style="font-size: 10px"></p>
      <q-badge
        v-if="remaining_percentage == 0"
        color="yellow"
        label="FILLED"
        outline
      ></q-badge>
      <p v-else class="q-mr-sm">{{ remaining_percentage }}%</p>
      <q-circular-progress
        v-if="remaining_percentage != 0"
        :value="remaining_percentage"
        size="30px"
        :thickness="1"
        track-color="black"
        color="green"
      />
    </div>
    <q-separator />
    <div class="col q-gutter-y-sm">
      <div class="row">
        <div class="col text-weight-light text-no-wrap">Escrow:</div>
        <strong class="style-right">{{
          format_address(useGlobalStore().escrow_selected?.publicKey.toString())
        }}</strong>
      </div>

      <div class="row">
        <div class="col text-weight-light text-no-wrap">Maker:</div>
        <strong class="style-right">{{
          format_address(
            useGlobalStore().escrow_selected?.account.maker.toString(),
          )
        }}</strong>
      </div>

      <div class="row">
        <div class="col text-weight-light text-no-wrap">Deposited mint:</div>
        <strong class="col-9 text-right">{{
          format_address(
            useGlobalStore().escrow_selected?.account?.depositToken?.toString(),
          )
        }}</strong>
      </div>

      <div class="row">
        <div class="col text-weight-light text-no-wrap">Request mint:</div>
        <strong class="col-9 text-right">{{
          format_address(
            useGlobalStore().escrow_selected?.account?.requestToken?.toString(),
          )
        }}</strong>
      </div>

      <div class="row">
        <div class="col text-weight-light text-no-wrap">Deposit amount:</div>
        <strong class="col-9 text-right">
          {{
            useGlobalStore().escrow_selected?.account?.tokensDepositInit *
            10 **
              (-useGlobalStore().token_list.find(
                (token) =>
                  token.address ==
                  useGlobalStore().escrow_selected?.account.depositToken.toString(),
              )?.decimals ?? 0)
          }}
        </strong>
      </div>

      <div class="row">
        <div class="col text-weight-light text-no-wrap">Remaining amount:</div>
        <strong class="col-9 text-right">
          {{
            useGlobalStore().escrow_selected?.account?.tokensDepositRemaining *
            10 **
              -useGlobalStore().token_list.find(
                (token) =>
                  token.address ==
                  useGlobalStore().escrow_selected?.account.depositToken.toString(),
              )?.decimals
          }}
        </strong>
      </div>

      <div class="row">
        <div class="col text-weight-light text-no-wrap">Price:</div>
        <strong class="col-9 text-right">{{
          useGlobalStore().getSelectedEscrowPrice
        }}</strong>
      </div>

      <div class="row">
        <div class="col text-weight-light text-no-wrap">Recipient:</div>
        <strong class="col-9 text-right">{{
          useGlobalStore().escrow_selected?.account?.onlyRecipient
            ? 'any'
            : format_address(
                useGlobalStore().escrow_selected?.account?.recipient.toString(),
              )
        }}</strong>
      </div>

      <div class="row">
        <div class="col text-weight-light text-no-wrap">Partial fill:</div>

        <q-badge
          outline
          :label="
            useGlobalStore().escrow_selected?.account?.allowPartialFill
              ? 'yes'
              : 'no'
          "
          :color="
            useGlobalStore().escrow_selected?.account?.allowPartialFill
              ? 'purple'
              : 'grey'
          "
        />
      </div>

      <div class="row">
        <div class="col text-weight-light text-no-wrap">Public</div>
        <q-badge
          outline
          class=""
          :label="
            useGlobalStore().escrow_selected?.account?.onlyWhitelist
              ? 'no'
              : 'yes'
          "
          :color="
            useGlobalStore().escrow_selected?.account?.onlyWhitelist
              ? 'yellow'
              : 'green'
          "
        />
      </div>

      <div class="row">
        <div class="col text-weight-light text-no-wrap">Expire timestamp</div>

        <q-badge
          outline
          class=""
          :label="
            useGlobalStore().escrow_selected?.account?.expireTimestamp != 0
              ? useGlobalStore().escrow_selected?.account?.expireTimestamp.toNumber()
              : 'never'
          "
          :color="
            useGlobalStore().escrow_selected?.account?.expireTimestamp != 0
              ? 'yellow'
              : 'grey'
          "
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
