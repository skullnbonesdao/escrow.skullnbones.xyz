<script setup lang="ts">
import { useGlobalStore } from 'stores/GlobalStore';
import { computed } from 'vue';

const props = defineProps(['escrow']);

const remaining_percentage = computed(() => {
  return (
    ((props.escrow?.account.tokensDepositRemaining.toNumber() ?? 0) /
      (props.escrow?.account.tokensDepositInit.toNumber() ?? 0)) *
    100
  );
});
</script>

<template>
  <q-badge
    v-if="remaining_percentage == 0"
    color="yellow"
    label="FILLED"
    outline
  ></q-badge>

  <q-circular-progress
    v-if="remaining_percentage != 0"
    :value="remaining_percentage"
    size="30px"
    :thickness="1"
    track-color="black"
    color="green"
  />
</template>

<style scoped lang="sass"></style>
