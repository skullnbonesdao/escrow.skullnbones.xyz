<template>
  <q-layout view="hHh lpR fFf">
    <q-header class="bg-black">
      <q-toolbar class="q-ma-none q-pa-none">
        <q-btn
          class="q-mx-sm"
          round
          to="/"
          :class="useWalletStore().is_whitelisted ? 'bg-primary' : ''"
        >
          <q-avatar size="50px">
            <q-img src="logo.png" />
          </q-avatar>
        </q-btn>

        <q-space />
        <q-tabs v-model="tab" shrink stretch>
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
    <q-drawer show-if-above v-model="rightDrawerOpen" side="right" bordered>
      <EscrowTakeDrawer />
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { WalletMultiButton } from 'solana-wallets-vue';
import { ref } from 'vue';
import { useWalletStore } from 'stores/WalletStore';
import EscrowTakeDrawer from 'components/drawer/EscrowTakeDrawer.vue';

const tab = ref();
const rightDrawerOpen = ref(true);
</script>

<style lang="sass"></style>
