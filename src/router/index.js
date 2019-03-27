import Vue from 'vue'
import Router from 'vue-router'
import Home from '../page/Home'
import Chat from '../components/ChatBox'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '/session/:id',
          name: 'session',
          component: Chat
        }
      ]
    }
  ]
})
