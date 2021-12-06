<template>
  <v-main>
    <div class="registerContainer">
      <h1>In order to proceed, you should register first for security check</h1>
      <br />
      <h1>Don't worry, it takes 1min :)</h1>
      <v-form ref="form" lazy-validation>
        <v-text-field label="Email" required></v-text-field>
        <v-text-field label="Password" required></v-text-field>
        <v-text-field label="Repeat the password" required></v-text-field>

        <div class="typeOfUser">
          <span>Who are you?</span>
          <v-select label="Type of user" required></v-select>
        </div>

        <div class="category">
          <span>Select a category of Fundraising :)</span>
          <v-select label="Item" required></v-select>
        </div>
      </v-form>

      <v-btn id="submitBtn" color="light-green"> Register </v-btn>
    </div>
  </v-main>
</template>
<script>

import UserService from '../services/UserServices';
export default {
    data() {
    return {
      user: {
        email: "",
        typeOfUser: "",
        password: "",
        password2: ""
      },
    };
  },

  methods: {
    getDataFromLocalStorage(){
      // retrive missing user data from localStorage
      // var firstName = localStorage.get;
      // var lastName =;

      // var completeUserData = {
      //   firstName,
      //   lastName,
      //   email: this.user.email,
      //   typeOfUser: this.user.typeOfUser,
      //   password: this.user.password,
      //   password2: this.user.password2
      // }

      // UserService.
    },

    registerUser(){

    }
  }

  mounted: {
  }
};
</script>
<style>
.registerContainer {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 600px;
}

#submitBtn{
  width: 100%;
}
</style>