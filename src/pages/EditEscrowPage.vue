<script setup lang="ts">
import { ref } from 'vue';
import EscrowTableCloseable from 'components/tables/EscrowTableCloseable.vue';
import CreateEscrowCard from 'components/cards/CreateEscrowCard.vue';
import EscrowTableOpen from 'components/tables/EscrowTableOpen.vue';
import { useWallet, WalletMultiButton } from 'solana-wallets-vue';
const tab = ref('tab_create');
</script>

<template>
  <q-page>
    <q-tabs v-model="tab" shrink stretch>
      <q-tab name="tab_create" label="Create" />
      <q-tab name="tab_open" label="Open" />
      <q-tab name="tab_close" label="Close" />
      <q-space />
    </q-tabs>

    <q-tab-panels v-model="tab" animated class="bg-">
      <q-tab-panel name="tab_create">
        <div v-if="!useWallet().publicKey.value" class="row q-ma-md">
          <q-space />
          <WalletMultiButton dark />
          <q-space />
        </div>
        <CreateEscrowCard v-else />
      </q-tab-panel>

      <q-tab-panel name="tab_open">
        <div v-if="!useWallet().publicKey.value" class="row q-ma-md">
          <q-space />
          <WalletMultiButton dark />
          <q-space />
        </div>
        <EscrowTableOpen v-else />
      </q-tab-panel>

      <q-tab-panel name="tab_close">
        <div v-if="!useWallet().publicKey.value" class="row q-ma-md">
          <q-space />
          <WalletMultiButton dark />
          <q-space />
        </div>
        <EscrowTableCloseable v-else />
      </q-tab-panel>
    </q-tab-panels>
  </q-page>
</template>

<style scoped lang="sass"></style>
