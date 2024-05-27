<script setup lang="ts">
import { copy_to_clipboard } from 'src/functions/copy_to_clipboard';
import { useGlobalStore } from 'stores/GlobalStore';
</script>

<template>
  <q-icon
    size="md"
    name="share"
    @click="
      copy_to_clipboard(
        'https://escrow1.skullnbones.xyz/#/view/' +
          useGlobalStore().escrow_selected?.publicKey.toString(),
      )
    "
  >
    <q-tooltip>Copy link</q-tooltip>
  </q-icon>
</template>

<style scoped lang="sass"></style>
