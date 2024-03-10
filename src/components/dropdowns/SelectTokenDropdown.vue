<script setup lang="ts">
import { command } from 'execa';
import { computed, ref, watch } from 'vue';
import { useWalletStore } from 'stores/WalletStore';
import { laBabyCarriageSolid } from '@quasar/extras/line-awesome';

const props = defineProps(['label']);
const emit = defineEmits(['mint_selected']);
const selected = ref();

const options = ref(useWalletStore().accounts_mapped);

watch(
  () => selected.value,
  () => emit('mint_selected', selected.value),
);

function filterFn(val: any, update: any, abort: any) {
  // call abort() at any time if you can't retrieve data somehow

  setTimeout(() => {
    update(
      () => {
        if (val === '') {
          options.value = useWalletStore().accounts_mapped;
        } else {
          const needle = val.toLowerCase();
          options.value = useWalletStore().accounts_mapped.filter(
            (v) => v.symbol.toLowerCase().indexOf(needle) > -1,
          );
        }
      },
      (ref: any) => {
        if (val !== '' && ref.options.length > 0) {
          ref.setOptionIndex(-1); // reset optionIndex in case there is something selected
          ref.moveOptionSelection(1, true); // focus the first selectable option and do not update the input-value
        }
      },
    );
  }, 300);
}

function filterFnAutoselect(val: any, update: any, abort: any) {
  // call abort() at any time if you can't retrieve data somehow

  setTimeout(() => {
    update(
      () => {
        if (val === '') {
          options.value = useWalletStore().accounts_mapped;
        } else {
          const needle = val.toLowerCase();
          options.value = useWalletStore().accounts_mapped.filter(
            (v) => v.symbol.toLowerCase().indexOf(needle) > -1,
          );
        }
      },

      // "ref" is the Vue reference to the QSelect
      (ref: any) => {
        if (
          val !== '' &&
          ref.options.length > 0 &&
          ref.getOptionIndex() === -1
        ) {
          ref.moveOptionSelection(1, true); // focus the first selectable option and do not update the input-value
          ref.toggleOption(ref.options[ref.optionIndex], true); // toggle the focused option
        }
      },
    );
  }, 300);
}

function abortFilterFn() {
  // console.log('delayed filter aborted')
}
</script>

<template>
  <q-select
    square
    standout
    clearable
    use-input
    hide-selected
    fill-input
    input-debounce="0"
    v-model="selected"
    :options="useWalletStore().accounts_mapped"
    :option-label="
      (opt) => (opt.symbol == 'unknown' ? opt.mint.toString() : opt.symbol)
    "
    :label="label"
  >
    <template v-slot:option="scope">
      <q-item v-bind="scope.itemProps">
        <q-item-section avatar>
          <q-img v-if="scope.opt.image" :src="scope.opt.image" />
          <q-img v-else src="unknown.png" />
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ scope.opt.symbol }}</q-item-label>
          <q-item-label caption>{{ scope.opt.mint.toString() }}</q-item-label>
        </q-item-section>
      </q-item>
    </template>
    <template v-slot:no-option>
      <q-item>
        <q-item-section class="text-grey"> No results </q-item-section>
      </q-item>
    </template>
  </q-select>
</template>

<style scoped lang="sass"></style>
