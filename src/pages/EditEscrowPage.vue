<script setup lang="ts">
import { ref } from 'vue';
import EscrowTableCloseable from 'components/tables/EscrowTableCloseable.vue';
import CreateEscrowCard from 'components/cards/CreateEscrowCard.vue';
import EscrowTableOpen from 'components/tables/EscrowTableOpen.vue';
import { useWallet, WalletMultiButton } from 'solana-wallets-vue';
import { useQuasar } from 'quasar';
const tab = ref('tab_create');
</script>

<template>
  <q-page :class="useQuasar().screen.lt.md ? 'q-pt-md' : 'q-pa-md'">
    <div v-if="!useWallet().publicKey.value" class="row q-ma-md">
      <q-space />
      <WalletMultiButton dark />
      <q-space />
    </div>
    <div v-else>
      <q-tabs
        v-model="tab"
        align="justify"
        active-bg-color="primary"
        class="bg-dark"
      >
        <q-tab name="tab_create" label="Create" />
        <q-separator vertical />
        <q-tab name="tab_open" label="Open" />
        <q-separator vertical />
        <q-tab name="tab_close" label="Close" />
      </q-tabs>
      <q-separator />

      <q-tab-panels v-model="tab" animated class="bg-">
        <q-tab-panel name="tab_create">
          <div class="row">
            <q-space />
            <CreateEscrowCard style="max-width: 500px" />
            <q-space />
          </div>
        </q-tab-panel>

        <q-tab-panel name="tab_open">
          <EscrowTableOpen />
        </q-tab-panel>

        <q-tab-panel name="tab_close">
          <EscrowTableCloseable />
        </q-tab-panel>
      </q-tab-panels>
    </div>
  </q-page>
</template>

<style scoped lang="sass"></style>
