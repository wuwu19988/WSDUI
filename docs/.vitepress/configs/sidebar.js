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
      text: '测试1',
      children: [{
          text: '测试1.1',
          link: '/guide/button'
        },
        {
          text: '测试1.2',
          link: '/guide/modal'
        }
      ]
    },
    {
      text: '测试2',
      children: [{
          text: '测试2.1',
          link: '/guide/test'
        },
        {
          text: 'element按钮测试',
          link: '/guide/vue'
        }
      ]
    }
  ]
}