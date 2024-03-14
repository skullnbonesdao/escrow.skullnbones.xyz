<script setup lang="ts">
import EscrowTableCards from 'components/tables/EscrowTableCards.vue';
import { ref } from 'vue';
import EscrowTable from 'components/tables/EscrowTable.vue';
const show_as_table = ref(true);
</script>

<template>
  <q-page>
    <div class="row">
      <div class="col"></div>
      <q-toggle v-model="show_as_table" label="Table/Card" />
    </div>
    <EscrowTable v-if="show_as_table" title="Public Escrows" />

    <EscrowTableCards v-else title="Public Escrows" />
  </q-page>
</template>

<style lang="sass"></style>
