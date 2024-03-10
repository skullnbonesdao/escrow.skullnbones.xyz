<script setup lang="ts">
import { ref } from 'vue';
import EscrowTableCloseable from 'components/tables/EscrowTableCloseable.vue';
import CreateEscrowCard from 'components/cards/CreateEscrowCard.vue';
import EscrowTableOpen from 'components/tables/EscrowTableOpen.vue';
const tab = ref('tab_create');
</script>

<template>
  <q-page>
    <q-tabs v-model="tab" shrink stretch>
      <q-tab name="tab_create" label="Create" />
      <q-tab name="tab_open" label="Open" />
      <q-tab name="tab_close" label="Close" />
    </q-tabs>

    <q-tab-panels v-model="tab" animated class="bg-">
      <q-tab-panel name="tab_create">
        <CreateEscrowCard />
      </q-tab-panel>

      <q-tab-panel name="tab_open">
        <EscrowTableOpen />
      </q-tab-panel>

      <q-tab-panel name="tab_close">
        <EscrowTableCloseable />
      </q-tab-panel>
    </q-tab-panels>
  </q-page>
</template>

<style scoped lang="sass"></style>
