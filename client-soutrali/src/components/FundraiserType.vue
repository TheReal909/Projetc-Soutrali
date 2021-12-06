<template>
  <v-main>
    <header><h1>Hi ! Tell us who are you fundraising for :)</h1></header>
    <div class="buttons">
      <a class="forMeBtn">
        <h3>For me</h3>
        <p>The help you receive will directly be given to you.</p>
      </a>
      <a class="forElseBtn">
        <div class="content">
          <h3>For charity</h3>
          <p>
            Help charity in the battle! The help you provide will directly be
            given to chosen non-profit
          </p>
        </div>
      </a>
    </div>
  </v-main>
</template>

<script>
export default {};
</script>

<style scoped>
p {
  margin-top: 1rem;
  color: #767676;
  font-size: 0.875rem;
}

h3{
    color: black;
}

.buttons {
  display: block;
  width: 600px;
  margin-top: 1rem;
  margin-left: auto;
  margin-right: auto;
}

.buttons > a {
  height: 90px;
  display: block;
  box-shadow: 0 1px 2px rgb(0 0 0 / 20%);
  width: 100%;
  border: 1px solid #cccccc;
}

a:nth-child(2) {
  margin-top: 1rem;
}

a:hover {
  border: 1px solid greenyellow;
}

h3 {
  text-align: center;
}
</style>
