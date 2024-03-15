<script setup lang="ts">
import EscrowTable from 'components/tables/EscrowTable.vue';
import EscrowViewCard from 'components/cards/EscrowViewCard.vue';
import EscrowTableCards from 'components/tables/EscrowTableCards.vue';

const props = defineProps(['type', 'as_cards', 'title']);
</script>

<template>
  <EscrowTableCards v-if="as_cards" :escrow_filter="type" :title="title" />
  <EscrowTable v-else :escrow_filter="type" :title="title" />
</template>

<style scoped lang="sass"></style>
