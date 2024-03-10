<script setup lang="ts">
import { RPC_NETWORKS, useGlobalStore } from 'stores/GlobalStore';
import { watch } from 'vue';
import { Connection } from '@solana/web3.js';

watch(
  () => useGlobalStore().rpc_selected,
  () =>
    (useGlobalStore().connection = new Connection(
      useGlobalStore().rpc_selected.url,
    )),
);
</script>

<template>
  <q-page class="row items-center justify-evenly q-pa-md">
    <q-card flat class="bg-dark full-width q-pa-md q-gutter-y-sm">
      <h5 class="text-center">Config</h5>
      <q-select
        v-model="useGlobalStore().rpc_selected"
        :options="RPC_NETWORKS"
        :option-label="(opt) => opt.name"
        label="RPC"
      />
    </q-card>
  </q-page>
</template>

<style scoped lang="sass"></style>
