import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'
import User from '@/components/user'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/user/:id',
      name: 'user',
      component: User,
      children: [
        {
          path: 'HelloWorld',
          component: HelloWorld
        }
      ]
    }
  ]
})
