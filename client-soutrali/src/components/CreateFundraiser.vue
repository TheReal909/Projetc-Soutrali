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

          <v-divider></v-divider>

          <v-stepper-step step="3"> Confirm and create </v-stepper-step>
        </v-stepper-header>

        <v-stepper-items>
          <div class="container">
            <v-stepper-content step="1">
              <v-form ref="form" lazy-validation>
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

                <v-row align="center" v-if="fundraiser.fundraiserType=='Charity'">
                  <v-col cols="6">
                    <v-subheader> Select the NGO you raise money for </v-subheader>
                  </v-col>

                  <v-col cols="6">
                    <v-select
                      :rules="[(v) => !!v || 'Please select a category']"
                      label="Select an NGO"
                    ></v-select>
                  </v-col>
                </v-row>

                <v-row align="center" v-if="fundraiser.fundraiserType=='SelfFundraiser'">
                  <v-col cols="6">
                    <v-subheader> Select a fundraiser Category </v-subheader>
                  </v-col>

                  <v-col cols="6">
                    <v-select
                      :rules="[(v) => !!v || 'Please select a category']"
                      label="Select a category"
                    ></v-select>
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
                <v-btn color="light-green" @click="e1 = 2"> Continue </v-btn>
              </div>
            </v-stepper-content>
          </div>
          <v-stepper-content step="2">
            <div class="container">
              <h1>Set a goal for your fundraiser</h1>
              <v-form ref="form" lazy-validation>
                <div class="goal">
                  <span>How much do you need for your fundraiser</span>
                  <v-text-field
                  v-model="fundraiser.moneyGoal"
                    label="Enter a goal amount $"
                    required
                  ></v-text-field>
                </div>
              </v-form>
            </div>

            <v-btn color="light-green" @click="e1 = 3"> Continue </v-btn>
            <v-btn color="primary" @click="e1 = 1" text> Previous </v-btn>
          </v-stepper-content>
          <v-stepper-content step="3">
            <div class="registerForm">
              <h2>
                In order to proceed, you should register first for security
                check
              </h2>
              <br />
              <v-form ref="form" class="mx-2" lazy-validation>
                <v-row>
                  <v-col cols="6">
                    <v-text-field
                      v-model="user.firstname"
                      :rules="nameRules"
                      label="First Name"
                    >
                    </v-text-field>
                  </v-col>
                  <v-col cols="6">
                    <v-text-field
                      v-model="user.lastname"
                      :rules="nameRules"
                      label="Last Name"
                    >
                    </v-text-field>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col cols="12">
                    <v-text-field
                      v-model="user.email"
                      :rules="emailRules"
                      label="Email"
                      required
                    >
                    </v-text-field>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col cols="6">
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
                  <v-col cols="6">
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
            </div>

            <v-btn color="light-green" @click="e1 = 1"> Register user </v-btn>
            <v-btn color="primary" @click="e1 = 2" text> Previous </v-btn>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    </div>
  </v-main>
</template>

<script>
// import UserService from "../services/UserServices";
export default {
  data() {
    return {
      isRegistered: false,
      isCreated: false,
      nameRules: [
        (v) => !!v || "Name is required",
        (v) => (v && v.length <= 30) || "Name must be less than 10 characters",
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
          value === this.password ||
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
        fundraiserType: "",
        category: "",
        moneyGoal: 0,
        actualBalance: 0,
      },
      e1: 1,
    };
  },

  created(){
    this.fundraiser.fundraiserType = this.$route.params.fundRaiserType;
    console.log(this.fundraiser.fundraiserType);
  },

  methods: {
    //check validation
    submitForm() {
      this.$refs.form.validate();
    },

    createFundraiser() {
      // const fundraiserType = localStorage.getItem('fundRaiserType');
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

.stepBtn {
  margin-top: 2rem;
}
</style>
