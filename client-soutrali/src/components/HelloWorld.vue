<template>
  <!-- only one el in template -->
  <v-app>
    <header>
      <nav class="navbar">
        <div class="navLogo">
          <h2>Soutrali</h2>
        </div>
        <ul class="navLinks">
          <li class="nav-item"><a href="#">How it works?</a></li>
          <li class="nav-item"><a href="#">Sign in</a></li>
          <router-link to="/createFundRaiser">
            <v-btn v-r class="mt-2" small color="success"
              >Start now</v-btn
            >
          </router-link>
        </ul>
      </nav>
    </header>

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

    <v-footer>
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
header nav {
  top: 0;
  left: 0;
  position: fixed;
  overflow: hidden;
}

hr {
  clear: left;
  margin: 60px auto 0;
  width: 80%;
}

.navLogo {
  display: inline-block;
}
.navbar {
  align-items: center;
  justify-content: space-between;
  display: flex;
  overflow: hidden;
  width: 100%;
  padding-left: 30px;
  padding-right: 10px;
  background-color: whitesmoke !important;
  z-index: 9999;
}
.navLinks {
  list-style: none;
  display: flex;
}
.nav-item a {
  display: inline-block;
  padding: 10px 15px;
  text-decoration: none;
  color: #ddd;
}
</style>
