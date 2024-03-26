<script setup lang="ts">
import { ref } from 'vue';
import EscrowViews from 'components/EscrowViews.vue';
import { useQuasar } from 'quasar';
import FilterEscrows from 'components/filters/FilterEscrows.vue';

const tab = ref('open');
</script>

<template>
  <q-page :class="useQuasar().screen.lt.md ? 'q-pt-md' : 'q-pa-md'">
    <FilterEscrows />

    <q-separator />
    <EscrowViews :type="tab" title="Public" />
  </q-page>
</template>

<style lang="sass"></style>
