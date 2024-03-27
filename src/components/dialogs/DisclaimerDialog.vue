<template>
  <q-dialog
    v-model="persistent"
    persistent
    square
    transition-show="scale"
    transition-hide="scale"
  >
    <q-card class="text-white" style="width: 500px">
      <q-card-section class="bg-secondary">
        <div class="text-h6">Disclaimer</div>
      </q-card-section>

      <q-card-section class="q-pt-md">
        THIS INTERFACE AND THE ESCROW PROTOCOL ARE PROVIDED "AS IS", AT YOUR OWN
        RISK, AND WITHOUT WARRANTIES OF ANY KIND. The Interface does not
        provide, own, or control transactions conducted on the protocol or via
        related smart contracts. By using or accessing this Interface or the
        Escrow Protocol and related smart contracts, you agree that no developer
        or entity involved in creating, deploying or maintaining this Interface
        or the Escrow Protocol will be liable for any claims or damages
        whatsoever associated with your use, inability to use, or your
        interaction with other users of, this Interface or the Escrow Protocol,
        including any direct, indirect, incidental, special, exemplary, punitive
        or consequential damages, or loss of profits, digital assets, tokens, or
        anything else of value.
      </q-card-section>

      <q-card-section class="row bg-secondary items-center">
        <div class="col">I have read, understand and accept these terms.</div>
        <q-checkbox v-model="checked" color="accent" />
      </q-card-section>

      <q-card-actions align="right">
        <q-btn
          :disable="checked ? false : true"
          class="full-width"
          color="primary"
          label="Agree and continue"
          v-close-popup
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { ref } from 'vue';
const checked = ref(false);
const persistent = ref(true);
</script>
