<script setup lang="ts">
import { useGlobalStore } from 'src/stores/GlobalStore';
import EscrowDetails from 'components/details/EscrowDetails.vue';
import EscrowTakeView from 'components/details/EscrowTakeView.vue';
</script>

<template>
  <div class="col">
    <div
      class="row q-pa-none bg-secondary"
      @click="useGlobalStore().escrow_selected = undefined"
    >
      <q-btn
        flat
        :to="'details/' + useGlobalStore().escrow_selected?.publicKey"
      >
        <q-avatar size="md">
          <q-icon color="primary" name="open_in_full" size="md" rounded />
        </q-avatar>
      </q-btn>
      <q-space />
      <q-btn class=" " flat>
        <q-avatar size="md">
          <q-icon color="primary" name="cancel" size="md" rounded />
        </q-avatar>
      </q-btn>
    </div>
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
