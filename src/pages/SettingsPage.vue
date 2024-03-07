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
  <q-page class="row items-center justify-evenly">
    <div class="bg-dark q-pa-md q-gutter-y-sm">
      <q-select
        v-model="useGlobalStore().rpc_selected"
        :options="RPC_NETWORKS"
        :option-label="(opt) => opt.name"
        label="RPC"
      />
    </div>
  </q-page>
</template>

<style scoped lang="sass"></style>
