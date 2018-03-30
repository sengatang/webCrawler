export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
      badge: {
        variant: 'primary',
        text: 'NEW'
      }
    },
    {
      title: true,
      name: 'Task',
      class: '',
      wrapper: {
        element: '',
        attributes: {}
      }
    },
    {
      name: 'Monitor',
      url: '/task/monitor',
      icon: 'icon-screen-tablet'
    },
    {
      name: 'New Task',
      url: '/task/newtask',
      icon: 'icon-pencil'
    },
    {
      title: true,
      name: 'Settings',
      class: '',
      wrapper: {
        element: '',
        attributes: {}
      }
    },
    {
      name: 'Proxy Management',
      url: '/proxy',
      icon: 'icon-puzzle',
      children: [
        {
          name: 'Current',
          url: '/proxy/current',
          icon: 'icon-clock'
        },
        {
          name: 'Add',
          url: '/proxy/add',
          icon: 'icon-plus'
        }
      ]
    },
    {
      name: 'Settings',
      url: '/settings',
      icon: 'icon-settings'
    },
    {
      name: 'My Account',
      url: '/my-account',
      icon: 'icon-user'
    }
  ]
}
