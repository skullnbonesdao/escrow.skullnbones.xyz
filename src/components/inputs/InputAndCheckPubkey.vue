<script setup lang="ts">
import { ref } from 'vue';
import { PublicKey } from '@solana/web3.js';

const recipient_address = ref();

function check_pubkey(pubkey: string) {
  let is_valid;
  try {
    let key = new PublicKey(pubkey);
    is_valid = true;
  } catch (err) {
    is_valid = false;
  }
  return is_valid;
}
</script>

<template>
  <q-input
    borderless
    class="col-2"
    v-model="recipient_address"
    label="Recipient address"
    type="text"
    :rules="[(val) => check_pubkey(val) || 'Invalid PublicKey']"
  />
</template>

<style scoped lang="sass"></style>
