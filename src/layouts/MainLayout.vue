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
        <q-tabs v-model="tab" shrink stretch active-bg-color="secondary">
          <q-route-tab
            name="tab_escrow"
            label="Offers"
            icon="countertops"
            to="/escrow"
          />
          <q-route-tab
            name="tab_create"
            icon="handyman"
            label="Edit"
            to="/create"
          />
        </q-tabs>
        <q-space />

        <WalletMultiButton dark />
        <q-btn class="q-mx-sm" round to="/settings">
          <q-avatar size="30px">
            <q-icon name="settings" />
          </q-avatar>
        </q-btn>
      </q-toolbar>
    </q-header>
    <q-drawer
      show-if-above
      v-if="useGlobalStore().showRightDrawer"
      side="right"
      bordered
    >
      <EscrowTakeDrawer />
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { WalletMultiButton } from 'solana-wallets-vue';
import { computed, onMounted, ref, watch } from 'vue';
import { useWalletStore } from 'stores/WalletStore';
import EscrowTakeDrawer from 'components/drawer/EscrowTakeDrawer.vue';
import { useGlobalStore } from 'stores/GlobalStore';

const tab = ref();
</script>

<style lang="sass"></style>
