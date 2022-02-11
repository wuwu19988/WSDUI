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
      }
    ]
  }]
}

function getGuideSidebar() {
  return [{
      text: '介绍',
      children: [{
        text: 'WSD UI',
        link: '/guide/button'
      }]
    },
    {
      text: '快速上手',
      children: [{
          text: '安装',
          link: '/guide/test'
        },
        {
          text: 'element按钮测试',
          link: '/guide/vue'
        }
      ]
    },
    {
      text: '指南',
      children: [{
          text: '调整主题',
          link: '/guide/test'
        },
        {
          text: '服务端渲染',
          link: '/guide/vue'
        }
      ]
    },
    {
      text: '版本',
      children: [{
        text: '变更日志',
        link: '/guide/test'
      }]
    }
  ]
}