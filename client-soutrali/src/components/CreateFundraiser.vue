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

                <div class="category">
                  <span>Select a category of Fundraising :)</span>
                  <v-select label="Item" required></v-select>
                </div>
              </v-form>

              <v-btn color="light-green" @click="e1 = 2"> Continue </v-btn>
            </v-stepper-content>
          </div>
          <v-stepper-content step="2">
            <div class="container">
              <h1>Set a goal for your fundraiser</h1>
              <v-form ref="form" lazy-validation>
                <div class="goal">
                  <span>How much do you need for your fundraiser</span>
                  <v-text-field
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
              <form>
                <h2 class="text-center text-primary">Sign Up</h2>
                <hr />

                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    formControlName="username"
                    placeholder="Username"
                  />
                  <div class="invalid-feedback">Please enter a username</div>
                </div>

                <div class="form-group">
                  <input
                    class="form-control"
                    placeholder="Known as"
                    formControlName="knownAs"
                  />
                  <div class="invalid-feedback">Known as is required</div>
                </div>

                <div class="form-group">
                  <input
                    class="form-control"
                    placeholder="City"
                    formControlName="city"
                  />
                  <div class="invalid-feedback">City is required</div>
                </div>

                <div class="form-group">
                  <input
                    class="form-control"
                    placeholder="Country"
                    formControlName="country"
                  />
                  <div class="invalid-feedback">Country is required</div>
                </div>

                <div class="form-group">
                  <input
                    type="password"
                    class="form-control"
                    formControlName="password"
                    placeholder="Password"
                  />
                  <div class="invalid-feedback">Password is required</div>
                  <div class="invalid-feedback">
                    Password should be at least 4 characters
                  </div>
                  <div class="invalid-feedback">
                    Password cannot exceed 8 characters
                  </div>
                </div>

                <div class="form-group">
                  <input
                    type="password"
                    class="form-control"
                    formControlName="confirmPassword"
                    placeholder="Confirm Password"
                  />
                </div>
              </form>
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
export default {
  data() {
    return {
      isRegistered: false,
      isCreated: false,
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
        category: "",
        moneyGoal: 0,
        actualBalance: 0,
      },
      e1: 1,
    };
  },

  methods: {
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
</style>
