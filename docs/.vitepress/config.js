const base = process.env.BASE || '/'
const nav = require('./configs/nav')
const sidebar = require('./configs/sidebar')
const catlogs = require('./configs/catlogs')

module.exports = {
  title: 'WSD-UI', //网站标题
  description: 'WSD-UI', //网站描述

  head: [
    ['link', {
      rel: 'icon',
      type: 'image/svg+xml',
      href: '/logowsd.svg'
    }]
  ],
  base: base,
  themeConfig: {
    repo: 'wuwu19988/WSDUI', //github 地址
    logo: '/logowsd.svg', // 左上角logo
    docsDir: 'docs',
    docsBranch: 'master',

    //暂不可用
    algolia: {
      appId: ' ',
      apiKey: ' ',
      indexName: ' '
    },

    // nav
    nav,

    // sidebar
    sidebar,


    // page meta
    editLinks: true,
    editLinkText: '在 GitHub 上编辑此页',
    lastUpdated: '上次更新',
  },
  markdown: {
    // options for markdown-it-anchor
    anchor: {
      permalink: false
    },

    // options for markdown-it-toc
    toc: {
      includeLevel: [1, 2]
    },

    config: (md) => {
      const {
        demoBlockPlugin
      } = require('vitepress-theme-demoblock')
      md.use(demoBlockPlugin, {
        cssPreprocessor: 'less'
      })
    }
  },

}