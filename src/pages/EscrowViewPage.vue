<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { onMounted, watch } from 'vue';
import { useGlobalStore } from 'stores/GlobalStore';
import { PublicKey } from '@solana/web3.js';
import { watchDeep } from '@vueuse/core';
import EscrowTakeView from 'components/details/EscrowTakeView.vue';
import EscrowDetails from 'components/details/EscrowDetails.vue';
import { useQuasar } from 'quasar';
import { copy_to_clipboard } from 'src/functions/copy_to_clipboard';
import { make_discord_message } from 'src/functions/make_discord_message';
import CopyEscrowLinkButton from 'components/actions/CopyEscrowLinkButton.vue';
import DiscordLinkButton from 'components/actions/DiscordLinkButton.vue';

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
</script>

<template>
  <q-page class="q-gutter-y-sm">
    <q-card flat>
      <q-card-section class="row q-gutter-x-sm items-center">
        <p class="text-h4 q-pa-sm">Offer</p>
        <q-space />
        <p
          class="text-h6"
          @click="
            copy_to_clipboard(
              useGlobalStore().escrow_selected?.publicKey.toString() ?? '',
            )
          "
        ></p>
        <q-space />

        <CopyEscrowLinkButton />
        <DiscordLinkButton />
      </q-card-section>
    </q-card>

    <div
      v-if="useGlobalStore().escrow_selected"
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
    <q-card flat v-else>
      <q-card-section>
        <div class="col text-center text-h2">Offer does not exist anymore!</div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<style scoped lang="sass"></style>
