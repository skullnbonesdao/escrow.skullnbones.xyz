<script setup lang="ts">
import { ref } from 'vue';

const accounts_list = ref(['SOL', 'USDC', 'ATLAS', 'POLIS', 'Puri']);
const token_provided = ref();
const token_requested = ref();

const token_provided_amount = ref(0);
const token_requested_amount = ref(0);

const only_wallet = ref(false);
const allow_partial_fill = ref(false);
const only_members = ref(false);

const recipient_address = ref('aaaidu83hdyjkdh387gkabdk');
</script>

<template>
  <q-page class="q-pa-md">
    <q-card flat class="q-pa-sm q-gutter-y-sm">
      <p class="text-center text-h6">Create an Escrow</p>
      <q-card class="row bg-secondary q-px-sm">
        <q-select
          class="col-6"
          square
          borderless
          v-model="token_provided"
          :options="accounts_list"
          label="Provided Token"
        />
        <q-space />
        <q-input
          borderless
          class="col-2"
          v-model="token_provided_amount"
          label="amount"
        />
      </q-card>
      <q-card class="row bg-secondary q-px-sm">
        <q-select
          class="col-6"
          square
          borderless
          v-model="token_requested"
          :options="accounts_list"
          label="Requested Token"
        />
        <q-space />
        <q-input
          borderless
          class="col-2"
          v-model="token_requested_amount"
          label="amount"
        />
      </q-card>

      <q-card class="bg-secondary">
        <q-item tag="label" v-ripple>
          <div class="col">
            <div class="row">
              <q-item-section>
                <q-item-label>P2P</q-item-label>
                <q-item-label caption
                  >Only a single address can fill</q-item-label
                >
              </q-item-section>
              <q-item-section avatar>
                <q-toggle color="primary" v-model="only_wallet" val="friend" />
              </q-item-section>
            </div>
            <q-input
              v-if="only_wallet"
              borderless
              class="col-2"
              v-model="recipient_address"
              label="Recipient address"
              type="text"
            />
          </div>
        </q-item>

        <q-list>
          <q-item tag="label" v-ripple>
            <q-item-section>
              <q-item-label>Partial-fill</q-item-label>
              <q-item-label caption
                >Allow exchange of partial amounts</q-item-label
              >
            </q-item-section>
            <q-item-section avatar>
              <q-toggle
                color="primary"
                v-model="allow_partial_fill"
                val="friend"
              />
            </q-item-section>
          </q-item>

          <q-item tag="label" v-ripple>
            <q-item-section>
              <q-item-label>Deal</q-item-label>
              <q-item-label caption>Only whitelisted can fill</q-item-label>
            </q-item-section>
            <q-item-section avatar>
              <q-toggle color="primary" v-model="only_members" val="friend" />
            </q-item-section>
          </q-item>
        </q-list>
      </q-card>

      <q-btn label="Create" class="full-width" color="primary" />
    </q-card>
  </q-page>
</template>

<style scoped lang="sass"></style>
