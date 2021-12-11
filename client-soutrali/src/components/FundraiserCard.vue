<template>
  <v-card class="mx-auto" max-width="400">
    <v-img
      class="white--text align-end"
      height="200px"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
    >
      <v-card-title>Top 10 Australian beaches</v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0"> Number 10 </v-card-subtitle>

    <v-card-text class="text--primary">
      <div>Whitehaven Beach</div>

      <div>Whitsunday Island, Whitsunday Islands</div>
    </v-card-text>

    <div class="d-flex align-items-center justify-content-center">
      <v-card-actions class="d-flex align-items-center justify-content-center">
        <v-btn color="success"> Donate </v-btn>

        <v-btn color="orange">See Details</v-btn>
      </v-card-actions>
    </div>
  </v-card>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style></style>
