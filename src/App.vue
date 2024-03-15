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
import { initWorkspace, useWorkspace } from 'src/adapter/adapterPrograms';

const $q = useQuasar();
$q.dark.set(true);
$q.loading.show({ message: 'Loading data...' });

useGlobalStore().update_connection();
useGlobalStore().load_token_list();
useStaratlasAPIStore().update();
useWalletStore();

$q.loading.hide();

watch(
  () => useWallet().publicKey.value,
  async () => {
    $q.loading.show({ message: 'Loading data...' });
    await useWalletStore().load_token_accounts();
    initWorkspace();
    useGlobalStore().is_initialized = true;
    console.log(useGlobalStore().token_list);

    $q.loading.hide();
  },
);
</script>
