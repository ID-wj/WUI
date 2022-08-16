import { createApp } from 'vue/dist/vue.esm-bundler.js'
import WUI from './entry'

// import WButton from './button'
// import SFCButton from './button/SFCButton.vue'
// import JSXButton from './button/JSXButton'
// import SMButton from './button/SMButton'
createApp({
  template: `
    <div>
      <SMButton color="blue">普通</SMButton>
      <SMButton color="green">普通</SMButton>
      <SMButton color="gray" icon="search" >普通</SMButton>
      <SMButton color="pink" icon="search" ></SMButton>
    </div>
  `
}).use(WUI).mount('#app')