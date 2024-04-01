<script setup lang="ts">
import { command } from 'execa';
import { computed, onMounted, ref, watch } from 'vue';
import { useWalletStore } from 'stores/WalletStore';
import { laBabyCarriageSolid } from '@quasar/extras/line-awesome';
import { useGlobalStore } from 'stores/GlobalStore';
import { I_Token } from 'stores/interfaces/I_TokenList';
import { Account } from '@solana/spl-token';

const props = defineProps(['label', 'is_dense', 'filter']);
const emit = defineEmits(['mint_selected']);
const selected = ref();
const options_pre_filtered = ref(useWalletStore().accounts_mapped);
const options = ref();

watch(
  () => useWalletStore().accounts_mapped,
  () => {
    switch (props.filter) {
      case 'filter_zero':
        options_pre_filtered.value = useWalletStore().accounts_mapped.filter(
          (option) => option.amount > 0,
        );
        break;
      default:
        options_pre_filtered.value = useWalletStore().accounts_mapped;
        break;
    }
  },
);

switch (props.filter) {
  case 'filter_zero':
    options_pre_filtered.value = useWalletStore().accounts_mapped.filter(
      (option) => option.amount > 0,
    );
    break;
  default:
    options_pre_filtered.value = useWalletStore().accounts_mapped;
    break;
}

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
          options.value = options_pre_filtered.value;
        } else {
          const needle = val.toLowerCase();
          options.value = options_pre_filtered.value.filter(
            (v) =>
              v.symbol.toLowerCase().indexOf(needle) > -1 ||
              v.name.toLowerCase().indexOf(needle) > -1 ||
              v.mint.toLowerCase().indexOf(needle) > -1,
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
</script>

<template>
  <q-select
    square
    standout
    clearable
    use-input
    hide-selected
    options-cover
    fill-input
    input-debounce="0"
    v-model="selected"
    :dense="is_dense"
    :options="options"
    @filter="filterFn"
    :option-label="
      (opt) => (opt.symbol == 'unknown' ? opt.address : opt.symbol)
    "
    :label="label"
  >
    <template v-slot:option="scope">
      <q-item v-bind="scope.itemProps">
        <q-item-section avatar>
          <q-avatar color="white">
            <q-img v-if="scope.opt.image" :src="scope.opt.image" />
            <q-img v-else src="unknown.png" />
          </q-avatar>
        </q-item-section>
        <q-item-section>
          <q-item-label class="row q-gutter-x-sm">
            <div>{{ scope.opt.name }}</div>
            <div style="font-size: 10px">
              Available:
              {{
                (scope.opt.amount * Math.pow(10, -scope.opt.decimals)).toFixed(
                  2,
                )
              }}
            </div>
          </q-item-label>
          <q-item-label caption>{{ scope.opt.mint }}</q-item-label>
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
