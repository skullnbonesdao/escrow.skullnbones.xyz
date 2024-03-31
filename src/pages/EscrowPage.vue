<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import EscrowViews from 'components/EscrowViews.vue';
import { useQuasar } from 'quasar';
import FilterEscrows from 'components/filters/FilterEscrows.vue';
import { useGlobalStore } from 'stores/GlobalStore';
import DisclaimerDialog from 'components/dialogs/DisclaimerDialog.vue';

const tab = ref('open');

const thumbStyle = ref({
  right: '2px',
  borderRadius: '5px',
  backgroundColor: 'primary',
  width: '5px',
  opacity: '0.75',
});

onMounted(() => {
  useGlobalStore().showLeftDrawer = true;
});

onUnmounted(() => {
  useGlobalStore().showLeftDrawer = false;
});
</script>

<template>
  <q-page :class="useQuasar().screen.lt.md ? '' : 'q-pa-sm'" class="row">
    <div class="col">
      <div class="column full-height">
        <q-scroll-area :thumb-style="thumbStyle" class="col q-px-sm">
          <q-card
            flat
            class="full-width q-mb-md"
            v-if="useQuasar().screen.lt.md"
          >
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

          <EscrowViews :type="tab" title="Public" />
        </q-scroll-area>
      </div>
    </div>
  </q-page>
</template>

<style lang="sass"></style>
