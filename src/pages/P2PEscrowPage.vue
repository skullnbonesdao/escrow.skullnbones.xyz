<script setup lang="ts">
import EscrowTableCards from 'components/tables/EscrowTableCards.vue';
</script>

<template>
  <q-page>
    <EscrowTableCards title="Direct P2P Escrows" escrow_filter="p2p" />
  </q-page>
</template>

<style scoped lang="sass"></style>
