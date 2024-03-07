<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { amount2ui } from 'src/helper/tokenDecimalConversion';

const props = defineProps(['mint', 'amount']);

const display_value = ref();
onMounted(async () => {
  display_value.value = await amount2ui(props.mint, props.amount);
});
</script>

<template>
  {{ display_value }}
</template>

<style scoped lang="sass"></style>
