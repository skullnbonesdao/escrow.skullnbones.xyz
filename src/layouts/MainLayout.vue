<template>
  <q-layout view="hHh Lpr lff">
    <q-header class="bg-black">
      <q-toolbar class="q-ma-none q-pa-none">
        <q-tabs v-model="tab" shrink stretch>
          <q-route-tab
            to="/"
            :class="useWalletStore().is_whitelisted ? 'bg-primary' : ''"
          >
            <q-img src="logo.png" width="50px" />
          </q-route-tab>
          <q-route-tab
            name="tab_escrow"
            label="Offers"
            icon="countertops"
            to="/escrow"
          />
          <q-route-tab
            name="tab_create"
            icon="handyman"
            label="Make"
            to="/create"
          />
          <q-route-tab
            name="tab_settings"
            icon="settings"
            label="Settings"
            to="/settings"
          />
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
import { useWalletStore } from 'stores/WalletStore';

const tab = ref();
</script>

<style lang="sass"></style>
