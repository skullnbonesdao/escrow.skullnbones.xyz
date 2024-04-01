<script setup lang="ts">
import EscrowTable from 'components/tables/EscrowTable.vue';
import EscrowViewCard from 'components/cards/EscrowViewCard.vue';
import EscrowTableCards from 'components/tables/EscrowTableCards.vue';
import { useWallet, WalletMultiButton } from 'solana-wallets-vue';
import { useGlobalStore } from '../stores/GlobalStore';

const props = defineProps(['type', 'title']);
</script>

<template>
  <EscrowTable :escrow_filter="type" :title="title" />
</template>

<style scoped lang="sass"></style>
