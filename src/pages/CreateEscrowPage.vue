<script setup lang="ts">
import { ref } from 'vue';
import { useWalletStore } from '../stores/WalletStore';
import SelectTokenDropdown from 'components/dropdowns/SelectTokenDropdown.vue';
import InputAndCheckPubkey from 'components/inputs/InputAndCheckPubkey.vue';
import CreateEscrowButton from 'components/actions/CreateEscrowButton.vue';

const accounts_list = ref(['SOL', 'USDC', 'ATLAS', 'POLIS', 'Puri']);
const token_provided = ref();
const token_requested = ref();

const token_provided_amount = ref(0);
const token_requested_amount = ref(0);

const only_wallet = ref(false);
const allow_partial_fill = ref(true);
const only_members = ref(false);

const recipient_address = ref('aaaidu83hdyjkdh387gkabdk');
</script>

<template>
  <q-page class="row items-center justify-evenly">
    <div class="bg-dark q-pa-md q-gutter-y-sm">
      <div class="row bg-secondary q-px-sm">
        <SelectTokenDropdown
          class="col-8"
          @mint_selected="(data) => (token_provided = data)"
        />
        <q-space />
        <q-input
          borderless
          class="col-2"
          v-model="token_provided_amount"
          label="amount"
        />
      </div>
      <div class="row bg-secondary q-px-sm">
        <SelectTokenDropdown
          class="col-8"
          @mint_selected="(data) => (token_requested = data)"
        />

        <q-space />
        <q-input
          borderless
          class="col-2"
          v-model="token_requested_amount"
          label="amount"
        />
      </div>
      <div class="bg-secondary">
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
            <InputAndCheckPubkey v-if="only_wallet" />
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
      </div>
      <CreateEscrowButton />
    </div>
  </q-page>
</template>

<style scoped lang="sass"></style>
