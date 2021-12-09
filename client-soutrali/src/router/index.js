import Vue from "vue";
import VueRouter from "vue-router";
import CreateFund from "@/components/CreateFundraiser.vue";
import Home from "@/components/HelloWorld.vue"
import FundraiserType from "@/components/FundraiserType.vue"


Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '/createFundRaiser/:fundRaiserType',
      component: CreateFund,
      name: 'CreateFundRaiser',
      params: true
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/fundraiserType',
      name: 'FundraiserType',
      component: FundraiserType
    },
  ],
});
