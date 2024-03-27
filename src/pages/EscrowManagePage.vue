<script setup lang="ts">
import { onMounted, onUnmounted, ref, watch } from 'vue';
import EscrowTableCloseable from 'components/tables/EscrowTableCloseable.vue';
import CreateEscrowCard from 'components/cards/CreateEscrowCard.vue';
import EscrowTableOpen from 'components/tables/EscrowTableOpen.vue';
import { useWallet, WalletMultiButton } from 'solana-wallets-vue';
import { useQuasar } from 'quasar';
import EscrowTable from 'components/tables/EscrowTable.vue';
import FilterEscrows from 'components/filters/FilterEscrows.vue';
import { useGlobalStore } from 'stores/GlobalStore';
const tab = ref('tab_create');

onMounted(() => {
  useGlobalStore().showLeftDrawer = false;
  useGlobalStore().showRightDrawer = false;
});

watch(
  () => useGlobalStore().escrows_filtered,
  () => {
    apply_filter2();
  },
);

watch(
  () => tab.value,
  () => {
    apply_filter2();
  },
);

function apply_filter2() {
  switch (tab.value) {
    case 'tab_view':
      {
        useGlobalStore().escrows_filtered = useGlobalStore().escrows?.filter(
          (escrow) => {
            return (
              escrow.account.maker.toString() ==
                useWallet().publicKey.value?.toString() &&
              escrow.account.tokensDepositRemaining.toNumber() > 0
            );
          },
        );
      }
      break;

    case 'tab_empty':
      {
        useGlobalStore().escrows_filtered = useGlobalStore().escrows?.filter(
          (escrow) => {
            return (
              escrow.account.maker.toString() ==
                useWallet().publicKey.value?.toString() &&
              escrow.account.tokensDepositRemaining.toNumber() == 0
            );
          },
        );
      }
      break;
  }
}
</script>

<template>
  <q-page :class="useQuasar().screen.lt.md ? 'q-pt-md' : 'q-pa-md'">
    <div v-if="!useWallet().publicKey.value" class="row q-ma-md">
      <q-space />
      <WalletMultiButton dark />
      <q-space />
    </div>
    <div v-else>
      <q-tabs
        v-model="tab"
        align="justify"
        active-bg-color="primary"
        class="bg-dark"
      >
        <q-tab name="tab_create" label="Create New" />
        <q-separator vertical />
        <q-tab name="tab_view" label="View created" />
        <q-separator vertical />
        <q-tab name="tab_empty" label="Close filled" />
      </q-tabs>
      <q-separator />

      <q-tab-panels v-model="tab" animated class="bg-">
        <q-tab-panel name="tab_create">
          <div class="row">
            <q-space />
            <CreateEscrowCard style="max-width: 500px" />
            <q-space />
          </div>
        </q-tab-panel>

        <q-tab-panel name="tab_view">
          <q-card flat class="full-width" v-if="useQuasar().screen.lt.md">
            <q-list>
              <q-expansion-item
                group="somegroup"
                icon="search"
                label="Filters"
                header-class="text-teal"
              >
                <FilterEscrows />
              </q-expansion-item>
            </q-list>
          </q-card>
          <EscrowTable show_close_button="true" />
        </q-tab-panel>

        <q-tab-panel name="tab_empty">
          <q-card flat class="full-width" v-if="useQuasar().screen.lt.md">
            <q-list>
              <q-expansion-item
                group="somegroup"
                icon="search"
                label="Filters"
                header-class="text-teal"
              >
                <FilterEscrows />
              </q-expansion-item>
            </q-list>
          </q-card>
          <EscrowTable show_close_button="true" />
        </q-tab-panel>
      </q-tab-panels>
    </div>
  </q-page>
</template>

<style scoped lang="sass"></style>
