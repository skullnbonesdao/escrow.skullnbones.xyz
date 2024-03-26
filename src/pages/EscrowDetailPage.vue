<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { onMounted, watch } from 'vue';
import { useGlobalStore } from 'stores/GlobalStore';
import { PublicKey } from '@solana/web3.js';
import { watchDeep } from '@vueuse/core';
import EscrowTakeView from 'components/details/EscrowTakeView.vue';
import EscrowDetails from 'components/details/EscrowDetails.vue';
import { useQuasar } from 'quasar';

useGlobalStore().showRightDrawer = false;
useGlobalStore().showLeftDrawer = false;
const q = useQuasar();
const r = useRouter();

onMounted(async () => {
  const address = new PublicKey(useRoute().params.account);
  await useGlobalStore().load_escrow(address);
});

watchDeep(
  () => useRoute()?.params,
  async () => {
    const address = new PublicKey(useRoute().params.account);
    await useGlobalStore().load_escrow(address);
  },
);

async function copy_to_clipboard() {
  q.notify({
    message: 'Copied to clipboard',
  });
  await navigator.clipboard.writeText(
    'escrow.skullnbones.xyz' + r.currentRoute.value.fullPath,
  );
}
</script>

<template>
  <q-page class="q-gutter-y-sm">
    <q-card flat>
      <q-card-section class="row q-gutter-x-sm items-center">
        <q-btn color="primary" to="/escrow">
          <q-avatar>
            <q-icon name="arrow_left" />
          </q-avatar>
        </q-btn>
        <p class="text-h6 q-mr-sm">Offer:</p>
        <p class="text-subtitle1" @click="copy_to_clipboard">
          {{ useGlobalStore().escrow_selected?.publicKey }}
        </p>
        <q-icon name="content_copy" @click="copy_to_clipboard" />
      </q-card-section>
    </q-card>

    <div
      class="q-px-sm q-gutter-x-sm"
      :class="useQuasar().screen.lt.md ? 'col' : 'row'"
    >
      <q-space />
      <div class="col-4">
        <EscrowTakeView />
      </div>
      <div class="col-3">
        <q-card flat class="full-height">
          <q-card-section>
            <EscrowDetails />
          </q-card-section>
        </q-card>
      </div>
      <q-space />
    </div>
  </q-page>
</template>

<style scoped lang="sass"></style>
