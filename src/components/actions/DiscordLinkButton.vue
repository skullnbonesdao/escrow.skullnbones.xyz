<script setup lang="ts">
import { copy_to_clipboard } from 'src/functions/copy_to_clipboard';
import { make_discord_message } from 'src/functions/make_discord_message';
</script>

<template>
  <q-icon
    size="md"
    name="discord"
    @click="copy_to_clipboard(make_discord_message())"
  >
    <q-tooltip>Copy discord message</q-tooltip>
  </q-icon>
</template>

<style scoped lang="sass"></style>
