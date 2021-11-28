import Vue from "vue";
import VueRouter from "vue-router";
import CreateFund from "@/components/CreateFundraiser.vue";
import Home from "@/components/HelloWorld.vue"

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '/createFundRaiser',
      component: CreateFund,
      name: 'CreateFundRaiser'
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
  ],
});
