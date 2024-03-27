<script setup lang="ts"></script>

<template>
  <q-page class="q-pa-md q-gutter-y-md">
    <q-card flat>
      <q-card-section class="text-center">
        <h4>FAQ</h4>
      </q-card-section>
    </q-card>

    <q-card flat>
      <q-card-section class="">
        <h5>How to create an offer?</h5>
        <div>
          Under <i>manage/create</i> you can create a new offer. To create an
          offer for the asset you need to provide 2 tokens. <br />
          1. The token you want to offer <br />
          2. the token you want in exchange
          <br />
          <br />

          Set the amounts for both tokens and continue if needed in the
          <i>advanced section</i>.
        </div>
      </q-card-section>

      <q-card-section class="">
        <h5>How to take an offer?</h5>
        <div class="">
          Go to the public tab and take an offer by filling in the amounts you
          want to provide in exchange.
        </div>
      </q-card-section>

      <q-card-section class="">
        <h5>How to close or cancel an offer?</h5>
        <div></div>
      </q-card-section>

      <q-card-section class="">
        <h5>Advanced offer options explained</h5>
        <div>
          <b>Expire:</b> Offer can no longer be filled after x timestamp in
          UTC<br />
        </div>
      </q-card-section>

      <q-card-section class="">
        <h5>Offer fulfillment process</h5>
        <div>
          Every asset exchange happens immediately for both exchanging parties.
          Which means that once a order gets filled partially or fully both
          parties get the tokens they requested there is no need to claim you
          asset. (To recover the account fee the creator can close the account
          in Manage/Close section
        </div>
      </q-card-section>

      <!--      Describe Opening/Closing Offers - empty accounts Time limit means the-->
      <!--      offer can no longer be filled Explain partial fill vs full fill Fee-->
      <!--      structure Explain that all assets tradable are whitelisted from the-->
      <!--      staratlas asset list Assets do not need to be claimed upon completion of a-->
      <!--      contract. They will be sent directly to the buyer/selle-->
    </q-card>
  </q-page>
</template>

<style scoped lang="sass"></style>
