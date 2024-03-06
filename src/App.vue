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

useQuasar().dark.set(true);

useGlobalStore().update_connection();
useGlobalStore().load_token_list();
useStaratlasAPIStore().update();
useWalletStore();
watch(
  () => useWallet().publicKey.value,
  async () => {
    console.log('triggerd');
    await useWalletStore().load_token_accounts();
  },
);
</script>
