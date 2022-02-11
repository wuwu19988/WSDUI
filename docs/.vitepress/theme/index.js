import theme from 'vitepress/dist/client/theme-default'
import 'vitepress-theme-demoblock/theme/styles/index.css'
import {
  registerComponents
} from './register-components'
import Button from '../../../src/components/Button.vue'
import '../../../src/styles/index.css'
import './styles/index.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import naive from 'naive-ui'


export default {
  ...theme,
  enhanceApp({
    app,
    router,
    siteData
  }) {
    app.component(Button.name, Button)
    registerComponents(app)
    app.use(ElementPlus)
    app.use(naive)
  }
}