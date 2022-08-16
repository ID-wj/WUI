import Theme from 'vitepress/theme'
import 'vitepress-theme-demoblock/theme/styles/index.css'
import WUI from '../../../src/entry'
import Demo from 'vitepress-theme-demoblock/components/Demo.vue'
import DemoBlock from 'vitepress-theme-demoblock/components/DemoBlock.vue'

// 主题样式
// import 'vitepress-theme-demoblock/theme/styles/index.css'
export default {
  ...Theme,
  enhanceApp({ app }) {
    app.use(WUI)
    app.component('Demo', Demo)
    app.component('DemoBlock', DemoBlock)
  },
}