<template>
  <main>
    <div class="container">
      <section class="backBtn">
            <v-btn small elevation="" color="success">Back</v-btn>  
      </section>
      <section class="tab">
        <v-tabs v-model="tab" background-color="transparent" color="basil" grow>
          <v-tab ripple href="#tab-1"> Item 1 </v-tab>
          <v-tab ripple href="#tab-2"> Item 2 </v-tab>
        </v-tabs>
        <v-tab-item value="tab-1">
          <!--form here-->
        </v-tab-item>
        <v-tab-item value="tab-2">
          <!--form here-->
        </v-tab-item>
      </section>
      <section class="btn">
          <v-btn small elevation="" color="success">Next</v-btn>
      </section>
    </div>
  </main>
</template>

<script>
export default {};
</script>

<style scoped>

</style>
