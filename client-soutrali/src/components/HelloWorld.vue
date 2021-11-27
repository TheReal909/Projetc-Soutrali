<template>
  <!-- only one el in template -->
  <v-app>
    <v-app-bar fixed app class="nav">
      <v-toolbar-title class="title flex text-center">Soutrali</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <section class="WelcomePitch">
        <div class="textPitch">
          <h1>
            A secured Fundraising platform for the people, by the people, <br />
            for a better community
          </h1>
          <br />
          <div>Get help for what you need in just a few step.</div>
        </div>
        <div class="btnArea">
          <v-btn large elevation="" color="success">Start now</v-btn>
        </div>
      </section>
      <hr />
    </v-main>

    <v-footer app>
      <v-card-text class="dark--text">
        {{ new Date().getFullYear() }} — <strong>Soutrali</strong>
      </v-card-text>
    </v-footer>
  </v-app>
</template>
<script>
export default {
  name: "HelloWorld",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* .row1{
    display: grid;
  } */
hr {
  clear: left;
  margin: 60px auto 0;
  width: 80%;
}
.nav{
  background-color:  #4caf50 !important;
}

/* .WelcomePitch{
  display: grid;
  grid-template-columns: 50% 50%;
  grid-column-gap: 1em;
} */

.WelcomePitch > div{
  background-color: #eee;
  padding: 1em;
}
.WelcomePitch > div:nth-child(odd){
  background-color: #ddd;
  padding: 1em;
}


</style>
