<template>
  <v-main>
    <v-card-title class="text-center justify-center py-6">
      <h1 class="font-weight-bold text-h2 light-green--text">
        Create your fundraiser in just a few steps !
      </h1>
    </v-card-title>

    <!-- should responsive the page -->
    <div class="stepperLayout">
      <v-stepper v-model="e1">
        <v-stepper-header>
          <v-stepper-step :complete="e1 > 1" step="1"> Step 1 </v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step :complete="e1 > 2" step="2"> Step 2 </v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step step="3"> Step 3 </v-stepper-step>
        </v-stepper-header>

        <v-stepper-items>
          <div class="container">
            <v-stepper-content step="1">
              <v-form ref="form" lazy-validation>
                <div class="name">
                  <span>Enter your name</span>
                  <v-text-field label="First Name" required></v-text-field>
                  <v-text-field label="Last name" required></v-text-field>
                </div>

                <div class="location">
                  <span>Choose your location</span>
                  <v-select label="Item" required></v-select>
                </div>
                <div class="category">
                  <span>Select a category of Fundraising :)</span>
                  <v-select label="Item" required></v-select>
                </div>
              </v-form>

              <v-btn color="light-green" @click="e1 = 2"> Continue </v-btn>
            </v-stepper-content>
          </div>
          <v-stepper-content step="2">
            <v-card
              class="mb-12"
              color="grey lighten-1"
              height="200px"
            ></v-card>

            <v-btn color="light-green" @click="e1 = 3"> Continue </v-btn>

            <v-btn color="primary" @click="e1 = 1" text> Previous </v-btn>
          </v-stepper-content>

          <v-stepper-content step="3">
            <v-card
              class="mb-12"
              color="grey lighten-1"
              height="200px"
            ></v-card>

            <v-btn color="light-green" @click="e1 = 1"> Submit ? </v-btn>

            <v-btn color="primary" @click="e1 = 2" text> Previous </v-btn>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    </div>
  </v-main>
</template>

<script>
export default {
  data() {
    return {
      e1: 1,
    };
  },
};
</script>

<style scoped>
.location, .category {
  margin-top: 1rem;
}

.container {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 600px;
}

.stepperLayout {
  margin-left: auto;
  margin-right: auto;
  width: 800px;
}
</style>
