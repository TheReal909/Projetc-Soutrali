<template>
  <v-main>
    <v-card>
      <v-card-title class="text-center justify-center py-6">
        <h1 class="font-weight-bold text-h2 light-green--text">Create your fundraiser in just a few steps !</h1>
      </v-card-title>

      <v-tabs v-model="tab" background-color="transparent" color="light-green" grow>
        <v-tab> Step 1 </v-tab>
        <v-tab> Step 1 </v-tab>
        <v-tab> Step 1 </v-tab>
      </v-tabs>
      <v-tabs-items v-model="tab">
      <v-tab-item
      >
        <v-card
          color="light-green"
          flat
        >
          <v-card-text>Bonjour world</v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
      
    </v-card>
  </v-main>
</template>

<script>
export default {
  data() {
    return {
      tab: ""
    }
  },
};
</script>

<style scoped></style>
