import Vue from 'vue'
import Router from 'vue-router'
import DashBoard from '@/components/DashBoard'
import NewEntry from '@/components/NewEntry'
import ViewEntry from '@/components/ViewEntry'
import EditEntry from '@/components/EditEntry'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'DashBoard',
      component: DashBoard
    },
    {
      path: '/new',
      name: 'NewEntry',
      component: NewEntry
    },
    {
      path: '/view/:id',
      name: 'ViewEntry',
      component: ViewEntry
    },
    {
      path: '/edit/:id',
      name: 'EditEntry',
      component: EditEntry
    }
  ]
})
