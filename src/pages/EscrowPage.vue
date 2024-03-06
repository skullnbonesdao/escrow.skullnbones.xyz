<script setup lang="ts">
import { useStaratlasAPIStore } from '../stores/StaratlasAPIStore';
</script>

<template>
  View All

  {{ useStaratlasAPIStore().raw }}
</template>

<style scoped lang="sass"></style>
