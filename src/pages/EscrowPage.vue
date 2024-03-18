<script setup lang="ts">
import { ref } from 'vue';
import EscrowViews from 'components/EscrowViews.vue';
import { useQuasar } from 'quasar';

const tab = ref('open');
</script>

<template>
  <q-page :class="useQuasar().screen.lt.md ? 'q-pt-md' : 'q-pa-md'">
    <q-tabs
      v-model="tab"
      align="justify"
      active-bg-color="primary"
      class="bg-dark"
    >
      <q-tab name="open" label="Public" />
      <q-separator vertical />
      <q-tab name="p2p" label="Direct" />
      <q-separator vertical />
      <q-tab name="b2b" label="S&B Members" />
    </q-tabs>
    <q-separator />

    <q-tab-panels v-model="tab" animated>
      <q-tab-panel name="open" class="q-pa-none">
        <q-badge
          color="secondary"
          class="full-width q-px-md text-subtitle2 q-py-md text-weight-light"
          >All offers listed here are open for everyone to take...</q-badge
        >

        <EscrowViews :type="tab" title="Public" />
      </q-tab-panel>
      <q-tab-panel name="p2p" class="q-pa-none">
        <q-badge
          color="secondary"
          class="full-width q-px-md q-py-md text-subtitle2 text-weight-light"
          >All offers listed here are only to be filled by a single
          address</q-badge
        >
        <EscrowViews :type="tab" title="Person 2 Person" />
      </q-tab-panel>
      <q-tab-panel name="b2b" class="q-pa-none">
        <q-badge
          color="secondary"
          class="full-width q-px-md q-py-md text-subtitle2 text-weight-light"
          >All offers listed here are only open for S&B Members</q-badge
        >
        <EscrowViews :type="tab" title="Person 2 Group" />
      </q-tab-panel>
    </q-tab-panels>
  </q-page>
</template>

<style lang="sass"></style>
