<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import { amount2ui, getDecimals } from 'src/helper/tokenDecimalConversion';

const props = defineProps(['mint', 'tokensDepositRemaining']);
const emits = defineEmits(['sliderChange']);

const slider_current = ref(0);
const slider_max = ref(0);

onMounted(async () => {
  slider_max.value =
    props.tokensDepositRemaining *
    Math.pow(10, -(await getDecimals(props.mint)));
});

watch(
  () => slider_current.value,
  () => emits('sliderChange', slider_current.value),
);
</script>

<template>
  <q-slider
    v-model="slider_current"
    :min="0"
    :max="slider_max"
    color="blue"
    track-size="10px"
    thumb-color="black"
    markers
  />
</template>

<style scoped lang="sass"></style>
