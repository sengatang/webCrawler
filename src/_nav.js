export default {
  items: [
    {
      name: '控制面板',
      url: '/dashboard',
      icon: 'icon-speedometer',
      badge: {
        variant: 'primary',
        text: 'NEW'
      }
    },
    {
      title: true,
      name: '任务',
      class: '',
      wrapper: {
        element: '',
        attributes: {}
      }
    },
    {
      name: '任务监测',
      url: '/task/monitor',
      icon: 'icon-screen-tablet'
    },
    {
      name: '当前任务',
      url: '/task/current',
      icon: 'icon-direction'
    },
    {
      name: '新的任务',
      url: '/task/newtask',
      icon: 'icon-pencil'
    },
    {
      name: '历史任务',
      url: '/task/newtask',
      icon: 'icon-pencil'
    },
    {
      title: true,
      name: '系统设置',
      class: '',
      wrapper: {
        element: '',
        attributes: {}
      }
    },
    {
      name: '代理管理',
      url: '/proxy',
      icon: 'icon-puzzle',
      children: [
        {
          name: '当前代理',
          url: '/proxy/current',
          icon: 'icon-clock'
        },
        {
          name: '增加代理',
          url: '/proxy/add',
          icon: 'icon-plus'
        }
      ]
    },
    {
      name: '设置',
      url: '/settings',
      icon: 'icon-settings'
    },
    {
      name: '我的账号',
      url: '/my-account',
      icon: 'icon-user'
    },
    {
      title: true,
      name: '系统操作',
      class: '',
      wrapper: {
        element: '',
        attributes: {}
      }
    },
    {
      name: '重启爬虫',
      url: '/my-account',
      icon: 'icon-user'
    }
  ]
}
