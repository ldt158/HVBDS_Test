import Vue            from 'vue'
import Router         from 'vue-router'
import Login          from '@/components/Login'
import Logout         from '@/components/Logout'
import ContactAdmin   from '@/components/ContactAdmin'
import DataPage       from '@/components/DataPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/logout',
      name: 'Logout',
      component: Logout
    },
    {
      path: '/data-page',
      name: 'DataPage',
      component: DataPage
    },
    {
      path: '/contact-admin',
      name: 'ContactAdmin',
      component: ContactAdmin
    }
  ],
  mode: 'history'
})
