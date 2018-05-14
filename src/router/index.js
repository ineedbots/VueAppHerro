import Vue from 'vue'
import Router from 'vue-router'
import DashBoard from '@/components/DashBoard'
import NewEntry from '@/components/NewEntry'
import ViewEntry from '@/components/ViewEntry'
import EditEntry from '@/components/EditEntry'
import Login from '@/components/Login'
import Register from '@/components/Register'
import auth from '../util/AuthBase'
import Console from '@/components/Console'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'DashBoard',
      component: DashBoard,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login,
      meta: {
        requiresGuest: true
      }
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register,
      meta: {
        requiresGuest: true
      }
    },
    {
      path: '/New',
      name: 'NewEntry',
      component: NewEntry,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/View/:id',
      name: 'ViewEntry',
      component: ViewEntry,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/Edit/:id',
      name: 'EditEntry',
      component: EditEntry,
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth) && !auth.auth().currentUser) {
    Console.methods.println("guest has joined")
    next({
      path:'/Login',
      query: {
        redirect: to.fullPath
      }
    })
  } else if(to.matched.some(record => record.meta.requiresGuest) && auth.auth().currentUser) {
    next({
      path:'/',
      query: {
        redirect: to.fullPath
      }
    })
  } else {
    next()
  }
})

export default router
