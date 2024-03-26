<script setup lang="ts">
import { ref, watch } from 'vue';
import SelectTokenDropdown from 'components/dropdowns/SelectTokenDropdown.vue';
import { useGlobalStore } from 'stores/GlobalStore';
import { NULL_ADDRESS } from 'stores/constants';
import { useWallet } from 'solana-wallets-vue';

const filter_type = ref('type_public');

const extra_filter = ref(['self', 'fill_partial', 'fill_full']);

watch(
  () => useGlobalStore().escrows,
  () => {
    apply_filter();
  },
);

apply_filter();

watch(
  () => filter_type.value,
  () => {
    apply_filter();
  },
);

watch(
  () => extra_filter.value,
  () => {
    apply_filter();
  },
);

function apply_filter() {
  console.log('apply');
  let data: any[] = [];

  useGlobalStore().escrows_filtered = useGlobalStore().escrows?.filter(
    (escrow) => {
      switch (filter_type.value) {
        case 'type_public': {
          console.log('apply');
          if (escrow.account.recipient.toString() == NULL_ADDRESS.toString()) {
            return true;
          }
          break;
        }
        case 'type_private': {
          console.log('apply');
          if (
            escrow.account.recipient.toString() ==
            useWallet().publicKey.value?.toString()
          ) {
            return true;
          }
          break;
        }
        case 'type_members': {
          console.log('apply');
          if (escrow.account.onlyWhitelist) {
            return true;
          }
          break;
        }
      }
    },
  );

  if (!extra_filter.value.some((filter) => filter == 'fill_full')) {
    useGlobalStore().escrows_filtered =
      useGlobalStore().escrows_filtered?.filter(
        (escrow) => escrow.account.allowPartialFill == false,
      );
  }
  //Filter partial
  if (!extra_filter.value.some((filter) => filter == 'fill_partial')) {
    useGlobalStore().escrows_filtered =
      useGlobalStore().escrows_filtered?.filter(
        (escrow) => escrow.account.allowPartialFill == true,
      );
  }

  //Filter self
  if (!extra_filter.value.some((filter) => filter == 'self')) {
    useGlobalStore().escrows_filtered =
      useGlobalStore().escrows_filtered?.filter(
        (escrow) =>
          escrow.account.maker.toString() !=
          useWallet().publicKey.value?.toString(),
      );
  }
  //Remove empty
  useGlobalStore().escrows_filtered = useGlobalStore().escrows_filtered?.filter(
    (escrow) => escrow.account.tokensDepositRemaining.toNumber() != 0,
  );
}
</script>

<template>
  <div class="row">
    <q-card flat class="full-width">
      <q-list>
        <q-expansion-item
          group="somegroup"
          icon="search"
          label="Filters"
          default-opened
          header-class="text-teal"
        >
          <q-card>
            <q-card-section class="row">
              <div class="col-2 text-overline">Assets</div>

              <div class="col">
                <q-list>
                  <q-item tag="label" v-ripple>
                    <q-item-section>
                      <q-item-label>Buy</q-item-label>
                      <q-item-label caption
                        >Offers you want to buy</q-item-label
                      >
                    </q-item-section>
                    <q-item-section class="col">
                      <SelectTokenDropdown class="col" />
                    </q-item-section>
                  </q-item>
                  <q-item tag="label" v-ripple>
                    <q-item-section>
                      <q-item-label>Sell</q-item-label>
                      <q-item-label caption
                        >Offers you want to sell</q-item-label
                      >
                    </q-item-section>
                    <q-item-section class="col">
                      <SelectTokenDropdown class="col" />
                    </q-item-section>
                  </q-item>
                </q-list>
              </div>
            </q-card-section>
            <q-separator />
            <q-card-section class="row">
              <div class="col-2 text-overline">Offer Type</div>

              <div class="col">
                <q-list>
                  <q-item tag="label" v-ripple>
                    <q-item-section>
                      <q-item-label>Public Offers</q-item-label>
                      <q-item-label caption
                        >Offer can only be filled by 100%</q-item-label
                      >
                    </q-item-section>
                    <q-item-section avatar>
                      <q-radio
                        v-model="filter_type"
                        val="type_public"
                        color="accent"
                      />
                    </q-item-section>
                  </q-item>
                  <q-item tag="label" v-ripple>
                    <q-item-section>
                      <q-item-label>Private Offers</q-item-label>
                      <q-item-label caption
                        >Offer can be filled by the recipient</q-item-label
                      >
                    </q-item-section>
                    <q-item-section avatar>
                      <q-radio
                        v-model="filter_type"
                        val="type_private"
                        color="accent"
                      />
                    </q-item-section>
                  </q-item>

                  <q-item tag="label" v-ripple>
                    <q-item-section>
                      <q-item-label>S&B Member Offers</q-item-label>
                      <q-item-label caption
                        >Offers can only be filled by members</q-item-label
                      >
                    </q-item-section>
                    <q-item-section avatar>
                      <q-radio
                        v-model="filter_type"
                        val="type_members"
                        color="accent"
                      />
                    </q-item-section>
                  </q-item>
                </q-list>
              </div>
            </q-card-section>
            <q-separator />
            <q-card-section class="row">
              <div class="col-2 text-overline">Fill Type</div>
              <div class="col">
                <q-list>
                  <q-item tag="label" v-ripple>
                    <q-item-section>
                      <q-item-label>100% Fill</q-item-label>
                      <q-item-label caption
                        >Offer can only be filled by 100%</q-item-label
                      >
                    </q-item-section>
                    <q-item-section avatar>
                      <q-checkbox
                        v-model="extra_filter"
                        val="fill_full"
                        color="accent"
                      />
                    </q-item-section>
                  </q-item>
                  <q-item tag="label" v-ripple>
                    <q-item-section>
                      <q-item-label>Partial Fill</q-item-label>
                      <q-item-label caption
                        >Offer can be filled partially</q-item-label
                      >
                    </q-item-section>
                    <q-item-section avatar>
                      <q-checkbox
                        v-model="extra_filter"
                        val="fill_partial"
                        color="accent"
                      />
                    </q-item-section>
                  </q-item>
                </q-list>
              </div>
            </q-card-section>
            <q-separator />
            <q-card-section class="row">
              <div class="col-2 text-overline">Options</div>
              <div class="col">
                <q-list>
                  <q-item tag="label" v-ripple>
                    <q-item-section>
                      <q-item-label>Show mine</q-item-label>
                      <q-item-label caption
                        >Show self created Offers</q-item-label
                      >
                    </q-item-section>
                    <q-item-section avatar>
                      <q-checkbox
                        v-model="extra_filter"
                        val="self"
                        color="accent"
                      />
                    </q-item-section>
                  </q-item>
                </q-list>
              </div>
            </q-card-section>
          </q-card>
        </q-expansion-item>
      </q-list>
    </q-card>
  </div>
</template>

<style scoped lang="sass"></style>
