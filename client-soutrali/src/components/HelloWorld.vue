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
          <router-link style="text-decoration: none" to="/fundraiserType">
            <v-btn class="mt-2" small color="light-green">Start now</v-btn>
          </router-link>
        </ul>
      </nav>
    </header>

    <v-main>
      <section class="d-flex align-center justify-center WelcomePitch">
        <div class="mb-10">
          <h1>
            A secured Fundraising platform for the people, by the people, <br />
            for a better community
          </h1>
          <br />
          <p class="mt-2">Get help for what you need in just a few step.</p>

          <router-link style="text-decoration: none" to="/fundraiserType">
            <div class="btnArea">
              <v-btn large elevation="" color="light-green">Start now</v-btn>
            </div>
          </router-link>
        </div>
      </section>
      <hr />

      <section class="fundraiser-list">
        <v-container v-if="this.fundraisers.length == 0">
          <h1>Sorry, no fundraiser yet :(</h1>
        </v-container>

        <v-container v-else class="mt-2" fluid grid-list-md>
          <h2 class="mt-2">Launched Fundraisers</h2>
          <v-layout row wrap justify-center>
            <v-flex v-for="fund in fundraisers" :key="fund.id" xs12 md6 lg3>
              <v-card
                style="margin: 1rem; background-color: transparent"
                min-width="135px"
                class="mx-auto"
                max-width="300"
              >
                <v-img
                  class="white--text align-end"
                  height="200px"
                  :src="fund.photoUrl"
                >
                  <v-card-title>
                    <v-chip color="grey lighten-5" class="ma-2">
                      {{ fund.fundRaiserName }}
                    </v-chip></v-card-title
                  >
                </v-img>

                <v-card-text class="text--primary">
                  <div>
                    {{ fund.actualBalance }}$ raised over {{ fund.moneyGoal }}$
                  </div>
                  <hr />
                  <br />

                  <div>{{ fund.description }}</div>
                </v-card-text>

                <v-card-actions class="justify-center">
                  <v-btn color="light-green"> Donate </v-btn>

                  <v-btn color="primary" text>See Details</v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </section>
      <hr />

      <section class="mt-2 mb-4 informations">
        <h1 class="mb-2">Why using Soutrali ?</h1>
        <v-container>
          <v-layout row wrap justify-center>
            <v-flex xs12 lg3 v-for="message in messages" :key="message.content">
              <v-card flat>
                <v-card-text>
                  <p class="text-h6 text--primary">{{ message.name }}</p>
                  <p>{{ message.content }}</p>
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>

          <v-btn
            style="text-decoration: none"
            class="justify-center mt-4"
            large
            color="light-green"
            >START NOW</v-btn
          >
        </v-container>
      </section>
    </v-main>
    <v-footer>
      <v-card-text class="dark--text">
        {{ new Date().getFullYear() }} — <strong>Soutrali</strong>
      </v-card-text>
    </v-footer>
  </v-app>
</template>
<script>
import FundraiserServices from "../services/FundraiserServices";
// import FundraiserCard from "./FundraiserCard.vue";
export default {
  // components: { FundraiserCard },
  name: "HelloWorld",
  data() {
    return {
      fundraisers: [],
      books: [
        { title: "book1", rating: 3, year: "2016" },
        { title: "book2 with very very long text", rating: 5, year: "2016" },
        { title: "book3", rating: 2.5, year: "2016" },
      ],

      messages: [
        {
          name: "Simple",
          content:
            "You can personalize and share your Soutrali campaign in just a few minutes.",
        },
        {
          name: "Secured",
          content:
            "Our Trust & Safety team works around the clock to protect against fraud.",
        },
        {
          name: "Social Enpowered",
          content:
            "Harness the power of social media to spread your story and get more support !",
        },
      ],
    };
  },
  created() {
    this.getFundraisers();
    console.log(this.fundraisers.length);
    console.log(this.books.length);
  },
  methods: {
    getFundraisers() {
      FundraiserServices.getAllFundraiser()
        .then((res) => {
          this.fundraisers = res;
          console.log(res);
          console.log(this.fundraisers);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
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

.fundraiserContainer {
  margin-top: 2rem;
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

.WelcomePitch {
  height: calc(70vh - 150px);
  background-size: cover;
  background-image: url("https://images.pexels.com/photos/2882569/pexels-photo-2882569.jpeg?cs=srgb&dl=pexels-miguel-%C3%A1-padri%C3%B1%C3%A1n-2882569.jpg&fm=jpg");
}
.navLinks {
  list-style: none;
  display: flex;
}
.nav-item a {
  display: inline-block;
  padding: 10px 15px;
  text-decoration: none;
  color: black;
}
</style>
