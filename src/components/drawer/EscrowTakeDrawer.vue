<script setup lang="ts">
import { useGlobalStore } from 'src/stores/GlobalStore';
import EscrowDetails from 'components/details/EscrowDetails.vue';
import EscrowTakeView from 'components/details/EscrowTakeView.vue';
import { ACCOUNT_COST_ESCROW } from 'stores/constants';
import { useWalletStore } from 'stores/WalletStore';
</script>

<template>
  <div class="col">
    <q-tabs class="bg-dark" align="justify">
      <q-route-tab
        class="bg-secondary"
        name="tab_expand"
        icon="open_in_full"
        :to="'view/' + useGlobalStore().escrow_selected?.publicKey"
      />
      <q-separator vertical />
      <q-tab
        name="tab_create"
        class="bg-secondary"
        icon="cancel"
        @click="useGlobalStore().showRightDrawer = false"
      />
    </q-tabs>

    <EscrowTakeView />

    <q-card flat>
      <q-card-section>
        <q-list bordered class="rounded-borders">
          <q-expansion-item icon="info" label="Details">
            <q-card-section>
              <EscrowDetails :escrow="useGlobalStore().escrow_selected" />
            </q-card-section>
          </q-expansion-item>
        </q-list>
      </q-card-section>
    </q-card>
  </div>
</template>

<style scoped lang="sass"></style>
