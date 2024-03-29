<template>
  <q-layout view="hHh lpr fFf">
    <q-header class="bg-dark">
      <q-toolbar class="q-ma-none q-pa-none">
        <q-tabs v-model="tab" shrink stretch active-bg-color="primary">
          <q-route-tab
            to="/"
            :class="useWalletStore().is_whitelisted ? 'bg-blue' : ''"
          >
            <q-avatar>
              <q-img src="logo.svg" />
            </q-avatar>
          </q-route-tab>
          <q-route-tab name="tab_escrow" icon="countertops" to="/escrow" />
          <q-route-tab name="tab_manage" icon="design_services" to="/manage" />
          <q-route-tab name="tab_faq" icon="quiz" to="/faq" />
        </q-tabs>

        <q-space />

        <WalletMultiButton dark />
      </q-toolbar>

      <q-separator />
    </q-header>

    <q-drawer
      show-if-above
      v-if="useGlobalStore().showLeftDrawer"
      side="left"
      bordered
    >
      <FilterEscrows />
    </q-drawer>

    <q-drawer
      show-if-above
      v-if="useGlobalStore().showRightDrawer"
      side="right"
      bordered
    >
      <EscrowTakeDrawer />
    </q-drawer>
    <q-page-container>
      <DisclaimerDialog class="col-1" />
      <router-view
        style="
          background: rgb(124, 2, 57);
          background: linear-gradient(
            339deg,
            rgba(124, 2, 57, 1) 0%,
            rgba(17, 45, 79, 1) 60%,
            rgba(20, 71, 130, 1) 100%
          );
        "
      />
    </q-page-container>
    <q-footer class="bg-dark">
      <q-separator />
      <q-toolbar>
        <q-toolbar-title class="row items-center">
          <q-img src="sa-powered_by_the_people.png" width="100px" />
          <div class="text-right col text-subtitle2">v{{ version }}</div>
          <q-btn flat class="q-mx-sm" round to="/settings">
            <q-avatar size="30px">
              <q-icon name="settings" />
            </q-avatar>
          </q-btn>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script setup lang="ts">
import { WalletMultiButton } from 'solana-wallets-vue';
import { ref } from 'vue';
import { useWalletStore } from 'stores/WalletStore';
import EscrowTakeDrawer from 'components/drawer/EscrowTakeDrawer.vue';
import { useGlobalStore } from 'stores/GlobalStore';
import FilterEscrows from 'components/filters/FilterEscrows.vue';
import DisclaimerDialog from 'components/dialogs/DisclaimerDialog.vue';

import { version } from 'src/../package.json';

const tab = ref();
</script>

<style>
/* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: none;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
