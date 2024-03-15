<script setup lang="ts">
import EscrowTableCards from 'components/tables/EscrowTableCards.vue';
import { ref } from 'vue';
import EscrowTable from 'components/tables/EscrowTable.vue';
import EscrowViews from 'components/EscrowViews.vue';
const show_as_cards = ref(false);
const tab = ref('open');
</script>

<template>
  <q-page>
    <q-tabs v-model="tab" shrink stretch class="bg-secondary">
      <q-tab name="open" label="OPEN" />
      <q-tab name="p2p" label="P2P" />
      <q-tab name="p2g" label="P2G" />
      <q-space />
      <q-btn-toggle
        class="q-mr-sm"
        v-model="show_as_cards"
        toggle-color="primary"
        :options="[
          { label: 'Cards', value: true },
          { label: 'Table', value: false },
        ]"
      />
    </q-tabs>

    <q-tab-panels v-model="tab" animated>
      <q-tab-panel name="open" class="q-pa-none">
        <EscrowViews :type="tab" :as_cards="show_as_cards" title="Public" />
      </q-tab-panel>
      <q-tab-panel name="p2p" class="q-pa-none">
        <EscrowViews
          :type="tab"
          :as_cards="show_as_cards"
          title="Person 2 Person"
        />
      </q-tab-panel>
      <q-tab-panel name="p2g" class="q-pa-none">
        <EscrowViews
          :type="tab"
          :as_cards="show_as_cards"
          title="Person 2 Group"
        />
      </q-tab-panel>
    </q-tab-panels>
  </q-page>
</template>

<style lang="sass"></style>
