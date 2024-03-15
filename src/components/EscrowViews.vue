<script setup lang="ts">
import EscrowTable from 'components/tables/EscrowTable.vue';
import EscrowViewCard from 'components/cards/EscrowViewCard.vue';
import EscrowTableCards from 'components/tables/EscrowTableCards.vue';
import { useWallet, WalletMultiButton } from 'solana-wallets-vue';

const props = defineProps(['type', 'as_cards', 'title']);
</script>

<template>
  <div v-if="!useWallet().publicKey.value" class="row q-ma-md">
    <q-space />
    <WalletMultiButton dark />
    <q-space />
  </div>
  <div v-else>
    <EscrowTableCards v-if="as_cards" :escrow_filter="type" :title="title" />
    <EscrowTable v-else :escrow_filter="type" :title="title" />
  </div>
</template>

<style scoped lang="sass"></style>
