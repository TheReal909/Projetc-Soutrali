import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// import CreateFundraiser from '@/components/CreateFundraiser'
// import ExploreFundraiser from '@/components/ExploreFundraiser'
// import Home from '@/components/Home'
// import TypeOfFundraiser from '@/components/TypeOfFundraiser'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
