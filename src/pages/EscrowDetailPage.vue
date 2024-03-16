<script setup lang="ts">
import { useRoute } from 'vue-router';
import { onMounted, watch } from 'vue';
import { useGlobalStore } from 'stores/GlobalStore';
import { PublicKey } from '@solana/web3.js';
import { watchDeep } from '@vueuse/core';
import EscrowTakeView from 'components/details/EscrowTakeView.vue';
import EscrowDetails from 'components/details/EscrowDetails.vue';
import { useQuasar } from 'quasar';

useGlobalStore().showRightDrawer = false;

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
</script>

<template>
  <q-page class="q-gutter-y-sm">
    <q-card flat>
      <q-card-section class="row q-gutter-x-sm items-center">
        <p class="text-h6">Offer</p>
        <p class="text-subtitle1">
          {{ useGlobalStore().escrow_selected?.publicKey }}
        </p>
        <q-icon name="content_copy" />
      </q-card-section>
    </q-card>
    <div
      class="q-px-sm q-gutter-x-sm"
      :class="useQuasar().screen.lt.md ? 'col' : 'row'"
    >
      <div class="col">
        <EscrowTakeView />
      </div>
      <div class="col-3">
        <q-card flat class="full-height">
          <q-card-section>
            <EscrowDetails :escrow="useGlobalStore().escrow_selected" />
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<style scoped lang="sass"></style>
