import Vue from 'vue'
import Router from 'vue-router'
import add from '@/components/add'
import home from '@/components/home'
import About from '@/components/About'
import details from '@/components/details'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/About',
      name: 'About',
      component: About
    },
    {
      path: '/add',
      name: 'add',
      component: add
    },
    {
      path: '/details/:id',
      name: 'details',
      component: details
    }
  ]
})
