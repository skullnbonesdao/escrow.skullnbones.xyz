<template>
  <router-view />
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar';
import { useGlobalStore } from 'stores/GlobalStore';
import { useStaratlasAPIStore } from 'stores/StaratlasAPIStore';
import { watch } from 'vue';
import { useWallet } from 'solana-wallets-vue';
import { useWalletStore } from 'stores/WalletStore';
import { initWorkspace, useWorkspace } from 'src/adapter/adapterEscrow';

useQuasar().dark.set(true);

useGlobalStore().update_connection();
useGlobalStore().load_token_list();
useStaratlasAPIStore().update();
useWalletStore();

watch(
  () => useWallet().publicKey.value,
  async () => {
    await useWalletStore().load_token_accounts();
    initWorkspace();
    useGlobalStore().is_initialized = true;
  },
);
</script>
