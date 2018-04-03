import Vue from 'vue'
import Router from 'vue-router'

// Containers
import Full from '@/containers/Full'

// Views
import Dashboard from '@/views/Dashboard'
import Monitor from '@/views/task/Monitor'
import NewTask from '@/views/task/NewTask'
import Task from '@/views/task/Task'
import PreviousTask from '@/views/task/PreviousTask'

// Views - Components
import Current from '@/views/proxy/Current'
import AddProxy from '@/views/proxy/AddProxy'

// Views - Buttons
import Settings from '@/views/Settings'

// import Restart from '@/views/Restart'
// Views - Notifications
import Modals from '@/views/notifications/Modals'

// Views - Pages
import Page404 from '@/views/pages/Page404'
import Page500 from '@/views/pages/Page500'
import Login from '@/views/pages/Login'
import Register from '@/views/pages/Register'

Vue.use(Router)
export default new Router({
  mode: 'hash', // Demo is living in GitHub.io, so required!
  linkActiveClass: 'open active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      redirect: '/dashboard',
      name: 'Home',
      component: Full,
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: Dashboard
        },
        {
          path: 'task',
          redirect: '/task/monitor',
          name: 'Task',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'monitor',
              name: 'Monitor',
              component: Monitor
            },
            {
              path: 'newtask',
              name: 'NewTask',
              component: NewTask
            },
            {
              path: 'current',
              name: 'Task',
              component: Task
            },
            {
              path: 'previous',
              name: 'Previous',
              component: PreviousTask
            }
          ]
        },
        {
          path: 'proxy',
          redirect: '/proxy/add',
          name: 'Proxy Management',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'current',
              name: 'Current',
              component: Current
            },
            {
              path: 'add',
              name: 'Add',
              component: AddProxy
            }
          ]
        },
        {
          path: 'settings',
          name: 'Settings',
          component: Settings
        },
        {
          path: 'my-account',
          name: 'My Account',
          component: Modals
        }
      ]
    },
    // {
    //   path: 'restart',
    //   name: 'Restart',
    //   component: Restart
    // },
    {
      path: '/pages',
      redirect: '/pages/404',
      name: 'Pages',
      component: {
        render (c) { return c('router-view') }
      },
      children: [
        {
          path: '404',
          name: 'Page404',
          component: Page404
        },
        {
          path: '500',
          name: 'Page500',
          component: Page500
        },
        {
          path: 'login',
          name: 'Login',
          component: Login
        },
        {
          path: 'register',
          name: 'Register',
          component: Register
        }
      ]
    }
  ]
})
