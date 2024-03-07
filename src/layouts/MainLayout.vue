<template>
  <q-layout view="hHh Lpr lff">
    <q-header class="bg-black">
      <q-toolbar class="q-ma-none q-pa-none q-pl-md">
        <q-avatar>
          <img src="logo.png" />
        </q-avatar>

        <q-space />

        <q-tabs v-model="tab" shrink stretch>
          <q-route-tab name="tab_escrow" label="Escrow" to="/escrow" />
          <q-route-tab name="tab_p2p" label="P2P" to="/p2p" />
          <q-route-tab name="tab_deals" label="Deals" to="/deals" />
          <q-route-tab name="tab_create" icon="add" to="/create" />
          <q-route-tab name="tab_settings" icon="settings" to="/settings" />
        </q-tabs>
        <q-space />

        <WalletMultiButton class="" dark />
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { WalletMultiButton } from 'solana-wallets-vue';
import { ref } from 'vue';

const tab = ref();
</script>

<style lang="sass"></style>
