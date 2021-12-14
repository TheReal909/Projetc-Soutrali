<template>
  <v-main>
    <header>
      <router-link style="text-decoration: none" to="/">
        <nav class="navbar">
          <div class="navLogo">
            <h2 style="color: black">Soutrali</h2>
          </div>
        </nav>
      </router-link>
    </header>

    <v-card-title class="text-center justify-center py-6">
      <h1 class="font-weight-bold text-h2 light-green--text">
        Create your fundraiser in just a few steps !
      </h1>
    </v-card-title>

    <!-- should responsive the page -->
    <div class="stepperLayout">
      <v-snackbar
        bottom
        right
        color="green accent-4"
        v-model="notifSuccess"
        :timeout="notifTimeOut"
        >{{ notifText }}</v-snackbar
      >
      <v-snackbar
        bottom
        left
        color="red accent-4"
        v-model="notifError"
        :timeout="notifTimeOut"
        >{{ notifText }}</v-snackbar
      >
      <v-stepper v-model="e1">
        <v-stepper-header>
          <v-stepper-step :complete="e1 > 1" step="1"> Step 1 </v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step :complete="e1 > 2" step="2"> Step 2 </v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step step="3"> Step 3 </v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step step="4"> Confirm and create </v-stepper-step>
        </v-stepper-header>

        <v-stepper-items>
          <div class="container">
            <v-stepper-content step="1">
              <v-form ref="form1" v-model="valid" lazy-validation>
                <v-row align="center">
                  <v-col cols="6">
                    <v-subheader> Give a name to your fundraiser </v-subheader>
                  </v-col>
                  <v-col cols="6">
                    <v-text-field
                      :rules="fundRaisernameRules"
                      v-model="fundraiser.fundRaiserName"
                      label="Fundraiser name"
                      required
                    >
                    </v-text-field>
                  </v-col>
                </v-row>

                <v-row
                  align="center"
                  v-if="fundraiser.fundRaiserType == 'Charity'"
                >
                  <v-col cols="6">
                    <v-subheader> Select the Charity </v-subheader>
                  </v-col>

                  <v-col cols="6">
                    <v-select
                      :rules="[(v) => !!v || 'Please select a charity label']"
                      label="Select a Charity label"
                      v-model="fundraiser.nameOfInstitution"
                      :items="nameOfInstitution"
                    ></v-select>
                  </v-col>
                </v-row>

                <v-row
                  align="center"
                  v-if="fundraiser.fundRaiserType == 'SelfFundraiser'"
                >
                  <v-col cols="6">
                    <v-subheader> Select a fundraiser Category </v-subheader>
                  </v-col>

                  <v-col cols="6">
                    <v-select
                      v-model="fundraiser.category"
                      :rules="[(v) => !!v || 'Please select a category']"
                      label="Select a category"
                      :items="categories"
                    >
                    </v-select>
                  </v-col>
                </v-row>

                <v-row align="center">
                  <v-col cols="6">
                    <v-subheader>
                      Help donators understand your cause , explain it to them !
                    </v-subheader>
                  </v-col>
                  <v-col cols="6">
                    <v-textarea
                      v-model="fundraiser.description"
                      label="Describe your fundraiser"
                    >
                    </v-textarea>
                  </v-col>
                </v-row>
              </v-form>

              <div class="stepBtn">
                <v-btn
                  :disabled="!valid"
                  color="light-green"
                  @click="nextStep1()"
                >
                  Continue
                </v-btn>
              </div>
            </v-stepper-content>
          </div>
          <v-stepper-content step="2">
            <div class="container">
              <h1>Set a goal for your fundraiser</h1>
              <v-form v-model="valid" ref="form2" lazy-validation>
                <div class="goal">
                  <span>How much do you need for your fundraiser</span>
                  <v-text-field
                    :rules="[(v) => v >= 100 || 'Start with at least 100$']"
                    v-model="fundraiser.moneyGoal"
                    label="Enter a goal amount $"
                    required
                  ></v-text-field>
                </div>
              </v-form>
            </div>

            <v-btn :disabled="!valid" color="light-green" @click="nextStep2()">
              Continue
            </v-btn>
            <v-btn color="primary" @click="e1 = 1" text> Previous </v-btn>
          </v-stepper-content>
          <v-stepper-content step="3">
            <v-container>
              <h2>
                In order to proceed, you should register first for security
                check
              </h2>
              <br />
              <v-layout>
                <v-form
                  v-model="valid"
                  ref="registerForm"
                  class="mx-2"
                  lazy-validation
                >
                  <v-row>
                    <v-col xs="12" sm="12" md="6" lg="6">
                      <v-text-field
                        v-model="user.firstName"
                        :rules="nameRules"
                        label="First Name"
                      >
                      </v-text-field>
                    </v-col>
                    <v-col xs="12" sm="12" md="6" lg="6">
                      <v-text-field
                        v-model="user.lastName"
                        :rules="nameRules"
                        label="Last Name"
                      >
                      </v-text-field>
                    </v-col>
                  </v-row>

                  <v-row>
                    <v-col xs="12" sm="12" md="6" lg="6">
                      <v-text-field
                        v-model="user.email"
                        :rules="emailRules"
                        label="Email"
                        required
                      >
                      </v-text-field>
                    </v-col>

                    <v-col xs="12" sm="12" md="6" lg="6">
                      <v-select
                        :rules="[(v) => !!v || 'Please select a type of user']"
                        label="Select a type of user"
                        v-model="user.typeOfUser"
                        :items="typeOfUser"
                      >
                      </v-select>
                    </v-col>
                  </v-row>

                  <v-row>
                    <v-col xs="12" sm="12" md="6" lg="6">
                      <v-text-field
                        v-model="user.password"
                        type="password"
                        :rules="passwordRules"
                        label="Password"
                        required
                      ></v-text-field>
                    </v-col>
                  </v-row>

                  <v-row>
                    <v-col xs="12" sm="12" md="6" lg="6">
                      <v-text-field
                        v-model="user.password2"
                        type="password"
                        :rules="confirmPasswordRules"
                        label="Confirm your password"
                        required
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-form>
              </v-layout>
            </v-container>
            <v-btn
              :disabled="!valid"
              color="light-green"
              @click="registerUser()"
            >
              Register user
            </v-btn>
            <v-btn color="primary" @click="e1 = 2" text> Previous </v-btn>
          </v-stepper-content>
          <v-stepper-content step="4">
            <section v-if="!isCreated" class="create">
              <h2>Here we go ! You can now launch your fundraiser</h2>
              <br />

              <v-btn small @click="launchFundraiser()" color="light-green"
                >LAUNCH IT</v-btn
              >
            </section>

            <section v-else class="created">
              <h2>Fundraiser successfully launched !</h2>

              <router-link to="/" style="text-decoration: none">
                <v-btn class="mr-2" small color="light-green"
                  >Go back to main page</v-btn
                >
              </router-link>

              <v-btn small color="light-green">See details</v-btn>
            </section>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    </div>
  </v-main>
</template>

<script>
import UserService from "../services/UserServices";
import FundraiserService from "../services/FundraiserServices";
export default {
  data() {
    return {
      notifSuccess: false,
      notifError: false,
      notifTimeOut: 5000,
      valid: true,
      notifText: "",
      categories: [
        "Accident & Emergency",
        "Education",
        "Health",
        "Business",
        "Animals",
        "Religion",
        "Funerals",
        "Other",
      ],
      typeOfUser: ["Individual", "Organization"],
      nameOfInstitution: ["UNICEF", "RED CROSS", "WHATEVER"],
      isRegistered: false,
      isCreated: false,
      nameRules: [
        (v) => !!v || "Name is required",
        (v) => (v && v.length <= 20) || "Name must be less than 10 characters",
      ],
      fundRaisernameRules: [(v) => !!v || "Name is required"],
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) =>
          /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()\\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            v
          ) || "E-mail must be valid",
      ],
      passwordRules: [
        (v) => !!v || "Please type your password.",
        (v) => (v && v.length >= 6) || "minimum 6 characters",
      ],
      confirmPasswordRules: [
        (value) => !!value || "please enter the confirm password",
        (value) =>
          value === this.user.password ||
          "The password confirmation does not match.",
      ],

      user: {
        firstName: "",
        lastName: "",
        email: "",
        typeOfUser: "",
        password: "",
        password2: "",
      },
      fundraiser: {
        fundRaiserName: "",
        description: "",
        photoUrl: "",
        fundRaiserType: "",
        category: "",
        nameOfInstitution: "NO DATA",
        moneyGoal: 0,
        actualBalance: 0,
      },
      e1: 1,
    };
  },

  created() {
    this.fundraiser.fundRaiserType = this.$route.params.fundRaiserType;
  },

  methods: {
    //check validation
    nextStep1() {
      if (this.$refs.form1.validate()) {
        this.e1 = 2;
      }
    },

    nextStep2() {
      if (this.$refs.form2.validate()) {
        this.e1 = 3;
      }
    },

    registerUser() {
      console.log("register start..");
      var userData = {
        firstName: this.user.firstName,
        lastName: this.user.lastName,
        email: this.user.email,
        typeOfUser: this.user.typeOfUser,
        password: this.user.password,
        password2: this.user.password2,
      };
      if (this.$refs.registerForm.validate()) {
        UserService.createUser(userData)
          .then((res) => {
            localStorage.setItem("userUuid", res.uuid);
            this.notifText = "Registered with success";
            this.notifSuccess = true;
            this.e1 = 4;
          })
          .catch(error => {
            console.log(error);
            this.notifText = "Registration failed " + error.message;
            this.notifError = true;
          });
      }
    },

    generateRandomImage() {
      var imageArray = new Array();
      imageArray[0] =
        "https://media.istockphoto.com/photos/put-more-in-get-more-out-picture-id1291318636?s=612x612";
      imageArray[1] =
        "https://cdn.pixabay.com/photo/2016/12/19/10/16/hands-1917895_960_720.png";
      imageArray[2] =
        "https://media.istockphoto.com/photos/stack-of-hands-showing-unity-picture-id625736338?s=612x612";

      var indexImage = Math.floor(Math.random() * imageArray.length);

      return imageArray[indexImage];
    },

    launchFundraiser() {
      const userUuid = localStorage.getItem("userUuid");
      console.log(this.fundraiser.fundraiserType);
      var fundraiser = {
        fundRaiserName: this.fundraiser.fundRaiserName,
        description: this.fundraiser.description,
        fundRaiserType: this.$route.params.fundRaiserType,
        category: this.fundraiser.category,
        userUuid: userUuid,
        photoUrl: this.generateRandomImage(),
        nameOfInstitution: this.fundraiser.nameOfInstitution,
        moneyGoal: this.fundraiser.moneyGoal,
        actualBalance: this.fundraiser.actualBalance,
      };

      console.log(fundraiser);

      FundraiserService.createFundraiser(fundraiser)
        .then((res) => {
          console.log(res);
          this.notifText = "You have launched your fundraiser campaign !";
          this.notifSuccess = true;
          console.log(this.photoUrl);
          this.isCreated = true;
        })
        .catch((err) => {
          this.notifError = true;
          this.notifText = "Oups , something went wrong " + err.message;
          console.log(err);
        });
    },
    // add the data to the localStorage prior to the effective create
    // registerFirstDataToLocalStorage() {
    //   var userObject = {
    //     firstName: this.user.firstName,
    //     lastName: this.user.lastName,
    //   };
    //   // should use array instead.
    //   localStorage.setItem("userObject", JSON.stringify(userObject));
    //   localStorage.setItem("fundraiserObject");
    // },
  },
};
</script>
<style scoped>
.location,
.category,
.goal {
  margin-top: 1rem;
}

.registerForm {
  width: 100%;
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

header nav {
  top: 0;
  left: 0;
  position: fixed;
  /* overflow: hidden; */
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

.stepBtn {
  margin-top: 2rem;
}
</style>
