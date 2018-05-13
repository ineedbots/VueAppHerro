import Vue from 'vue'
import Router from 'vue-router'
import DashBoard from '@/components/DashBoard'
import NewEntry from '@/components/NewEntry'
import ViewEntry from '@/components/ViewEntry'
import EditEntry from '@/components/EditEntry'
import Login from '@/components/Login'
import Register from '@/components/Register'
import firebase from 'firebase'

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
      path: '/new',
      name: 'NewEntry',
      component: NewEntry,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/view/:id',
      name: 'ViewEntry',
      component: ViewEntry,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/edit/:id',
      name: 'EditEntry',
      component: EditEntry,
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    //not logged
    if(!firebase.auth().currentUser) {
      //go to login
      next({
        path:'/Login',
        query: {
          redirect: to.fullPath
        }
      })
    } else {
      //go to route
      next()
    }
  } else if(to.matched.some(record => record.meta.requiresGuest)) {
    // logged
    if(firebase.auth().currentUser) {
      //go to dash
      next({
        path:'/',
        query: {
          redirect: to.fullPath
        }
      })
    } else {
      //go to route
      next()
    }
  } else {
    next()
  }
})

export default router
