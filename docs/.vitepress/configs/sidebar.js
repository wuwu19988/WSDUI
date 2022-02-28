const {
  getPath
} = require('./utils')

module.exports = {
  [getPath('/api/')]: 'auto',
  [getPath('/components/')]: getComponentsSidebar(),
  [getPath('/guide/')]: getGuideSidebar()
}

function getComponentsSidebar() {
  return [{
    text: '组件',
    children: [{
        text: 'Button 按钮',
        link: '/components/button'
      },
      {
        text: 'Tabs 标签页',
        link: '/components/tabs'
      },
      {
        text: 'Modal 对话框',
        link: '/components/modal'
      },
      {
        text: 'Tag 标签',
        link: '/components/tag'
      },
      {
        text: 'Vue 引用组件',
        link: '/components/vue'
      },
      {
        text: 'Vue Script',
        link: '/components/vue-script'
      },
      {
        text: '组件引入测试',
        link: '/components/test'
      },
      {
        text: 'nav测试',
        link: '/components/nav-ui'
      }

    ]
  }]
}

function getGuideSidebar() {
  return [{
      text: '介绍',
      children: [{
        text: 'WSD UI',
        link: '/guide/wsd-ui'
      }]
    },
    {
      text: '快速上手',
      children: [{
          text: '项目安装',
          link: '/guide/Install'
        },
        {
          text: 'Markdown语法教程',
          link: '/guide/markdown'
        },
        {
          text: 'Markdown语法教程(高级)',
          link: '/guide/markdown-high'
        },
        {
          text: 'MD语法测试',
          link: '/guide/test'
        }
      ]
    },
    {
      text: '代码规范',
      children: [{
          text: '调整主题',
          link: '/guide/theme'
        },
        {
          text: '服务端渲染',
          link: '/guide/ssr'
        }
      ]
    },
    {
      text: '版本',
      children: [{
        text: '变更日志',
        link: '/guide/logs'
      }]
    }
  ]
}