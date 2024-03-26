<script setup lang="ts">
import { onMounted, ref } from 'vue';
import EscrowViews from 'components/EscrowViews.vue';
import { useQuasar } from 'quasar';
import FilterEscrows from 'components/filters/FilterEscrows.vue';
import { useGlobalStore } from 'stores/GlobalStore';

const tab = ref('open');

onMounted(() => {
  useGlobalStore().showLeftDrawer = true;
});
</script>

<template>
  <q-page
    :class="useQuasar().screen.lt.md ? 'q-ma-md' : 'q-pa-md'"
    class="q-gutter-y-md"
  >
    <q-card
      flat
      class="full-width"
      @click="
        useGlobalStore().showLeftDrawer = !useGlobalStore().showLeftDrawer
      "
    >
      <q-list>
        <q-expansion-item
          group="somegroup"
          icon="search"
          label="Filters"
          header-class="text-teal"
        >
          <FilterEscrows v-if="useQuasar().screen.lt.md" />
        </q-expansion-item>
      </q-list>
    </q-card>

    <EscrowViews :type="tab" title="Public" />
  </q-page>
</template>

<style lang="sass"></style>
