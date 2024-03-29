<script setup lang="ts">
import SelectTokenDropdown from 'components/dropdowns/SelectTokenDropdown.vue';
import CreateEscrowButton from 'components/actions/CreateEscrowButton.vue';
import InputAndCheckPubkey from 'components/inputs/InputAndCheckPubkey.vue';

import { computed, ref, watch } from 'vue';
import { PublicKey } from '@solana/web3.js';

import InputTimestamp from 'components/inputs/InputTimestamp.vue';
import { useGlobalStore } from '../../stores/GlobalStore';
import { useWallet } from 'solana-wallets-vue';
import { useWalletStore } from '../../stores/WalletStore';
import CancelEscrowButton from 'components/actions/CancelEscrowButton.vue';
import { ACCOUNT_COST_ESCROW, MAKER_FEE } from 'stores/constants';

const token_provided = ref();
const token_requested = ref();

const token_provided_amount = ref(0);
const token_requested_amount = ref(0);

const timestamp = ref(0);

const only_wallet = ref(false);
const expire_toggle = ref(false);
const allow_partial_fill = ref(false);
const only_members = ref(false);
const slippage = ref(1);
const sa_list_enabled = ref(false);
const flipped_side = ref(false);

const recipient_address = ref<PublicKey>();
</script>

<template>
  <q-card flat class="bg-dark q-pa-md q-gutter-y-sm">
    <q-card square class="row items-center bg-secondary">
      <div class="col-2 row justify-center">
        <q-badge outline label="SELL" color="red" rounded />
      </div>
      <div class="col-1 row q-mx-md justify-center">
        <q-avatar size="md" outline label="BUY" class="bg-dark">
          <q-img
            :src="
              useGlobalStore().token_list?.find(
                (token) => token.address == token_provided?.mint.toString(),
              )?.logoURI
            "
          />
        </q-avatar>
      </div>
      <q-separator vertical />
      <SelectTokenDropdown
        label="Token provided"
        filter="filter_zero"
        class="col"
        @mint_selected="(data) => (token_provided = data)"
      />
      <q-separator vertical />
      <q-input
        square
        standout
        class="col-3"
        v-model="token_provided_amount"
        label="Amount"
        type="number"
      />
    </q-card>

    <q-card flat square class="row items-center bg-secondary">
      <div class="col-2 row justify-center">
        <q-badge outline label="BUY" color="green" rounded />
      </div>

      <div class="col-1 row q-mx-md justify-center">
        <q-avatar size="md" outline label="BUY" class="bg-dark">
          <q-img
            :src="
              useGlobalStore().token_list?.find(
                (token) => token.address == token_requested?.mint.toString(),
              )?.logoURI
            "
          />
        </q-avatar>
      </div>
      <q-separator vertical />
      <SelectTokenDropdown
        label="Token requested"
        class="col"
        @mint_selected="(data) => (token_requested = data)"
      />
      <q-separator vertical />

      <q-input
        standout
        square
        class="col-3"
        v-model="token_requested_amount"
        label="Amount"
        type="number"
      />
    </q-card>

    <q-card
      flat
      class="row items-center bg-secondary"
      @click="flipped_side = !flipped_side"
    >
      <div class="col-2 row justify-center">
        <q-badge outline label="Price" color="yellow" rounded />
      </div>
      <div class="row justify-center q-mx-sm">=</div>

      <div class="col row justify-center q-gutter-x-xs">
        <q-badge
          outline
          :label="flipped_side ? 'SELL' : 'BUY'"
          :color="flipped_side ? 'red' : 'green'"
          rounded
        />

        <div>/</div>

        <q-badge
          outline
          :label="flipped_side ? 'BUY' : 'SELL'"
          :color="flipped_side ? 'green' : 'red'"
          rounded
        />
      </div>

      <div class="col text-center"></div>
      <q-btn
        flat
        stretch
        class=""
        :icon="flipped_side ? 'switch_left' : 'switch_right'"
      />
      <q-separator vertical />

      <q-input
        disable
        standout
        square
        class="col-3"
        :label="
          flipped_side
            ? token_provided_amount / token_requested_amount
            : token_requested_amount / token_provided_amount
        "
        type="number"
      />
    </q-card>

    <div>
      <q-card bordered square flat class="bg-secondary">
        <q-expansion-item
          default-opened
          expand-separator
          icon="settings"
          label="Additional settings"
        >
          <q-separator />
          <q-item>
            <div class="col q-gutter-y-sm">
              <div class="row">
                <q-item-section>
                  <q-item-label>Direct</q-item-label>
                  <q-item-label caption
                    >Only a single address/account can fill</q-item-label
                  >
                </q-item-section>
                <q-item-section avatar>
                  <q-toggle
                    color="accent"
                    v-model="only_wallet"
                    :disable="only_members"
                  />
                </q-item-section>
              </div>
              <InputAndCheckPubkey
                v-if="only_wallet"
                @wallet="(data) => (recipient_address = data)"
              />
            </div>
          </q-item>
          <q-separator />
          <q-item>
            <div class="col q-gutter-y-sm">
              <div class="row">
                <q-item-section>
                  <q-item-label>Expire</q-item-label>
                  <q-item-label caption
                    >Set an expire timestamp in UTC</q-item-label
                  >
                </q-item-section>
                <q-item-section avatar>
                  <q-toggle color="accent" v-model="expire_toggle" />
                </q-item-section>
              </div>

              <InputTimestamp
                v-if="expire_toggle"
                @timestamp="(data) => (timestamp = data)"
              />
            </div>
          </q-item>
          <q-separator />
          <q-item>
            <q-item-section>
              <q-item-label>Partial-fill</q-item-label>
              <q-item-label caption
                >Allow exchange of partial amounts</q-item-label
              >
            </q-item-section>
            <q-item-section avatar>
              <q-toggle
                color="accent"
                v-model="allow_partial_fill"
                val="friend"
              />
            </q-item-section>
          </q-item>

          <q-separator />
          <q-item>
            <q-item-section>
              <q-item-label>S&B member deal</q-item-label>
              <q-item-label caption
                >Only whitelisted account can fill</q-item-label
              >
            </q-item-section>
            <q-item-section avatar>
              <q-toggle
                color="accent"
                v-model="only_members"
                :disable="only_wallet || !useWalletStore().is_whitelisted"
                val="friend"
              />
            </q-item-section>
          </q-item>
          <q-separator />

          <q-item>
            <div class="col q-gutter-y-sm">
              <q-tooltip
                >In rare cases 'slippage' in exchange amounts can occur. You
                usually even safe to set it to zero. (more info in
                FAQ)</q-tooltip
              >
              <div class="row">
                <q-item-section>
                  <q-item-label>Slippage</q-item-label>
                  <q-item-label caption
                    >Due to decimal precision loss</q-item-label
                  >
                </q-item-section>
                <q-item-section avatar class="col-4">
                  <q-input
                    suffix="milli%"
                    dense
                    filled
                    square
                    v-model="slippage"
                    type="number"
                  />
                </q-item-section>
              </div>
            </div>
          </q-item>
        </q-expansion-item>
      </q-card>
    </div>

    <CreateEscrowButton
      :deposit_mint="token_provided?.mint"
      :deposit_amount="
        token_provided_amount * Math.pow(10, token_provided?.decimals)
      "
      :request_mint="token_requested?.mint"
      :request_amount="
        token_requested_amount * Math.pow(10, token_requested?.decimals)
      "
      :allow_partial_fill="allow_partial_fill"
      :only_whitelist="only_members"
      :recipient_address="recipient_address"
      :closing_timestamp="expire_toggle ? timestamp : 0"
      :slippage="slippage"
    />

    <div>
      <p class="text-right text-weight-thin">
        Accounts + Fee = {{ ACCOUNT_COST_ESCROW }} +
        {{ useWalletStore().is_whitelisted ? MAKER_FEE / 2 : MAKER_FEE }}sol
      </p>
    </div>
  </q-card>
</template>

<style scoped lang="sass"></style>
