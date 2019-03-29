import Vue from 'vue'
import Router from 'vue-router'
import Header from '@/components/header/Header'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: Header
    }
  ]
})
