<script setup lang="ts">
import { useGlobalStore } from 'src/stores/GlobalStore';
import EscrowDetails from 'components/details/EscrowDetails.vue';
</script>

<template>
  <EscrowDetails :escrow="useGlobalStore().escrow_selected" />
</template>

<style scoped lang="sass"></style>
