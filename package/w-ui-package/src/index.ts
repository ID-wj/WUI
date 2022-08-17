import { createApp } from "vue/dist/vue.esm-bundler.js";
import WButton from "./button";

// import WButton from './button'
// import SFCButton from './button/SFCButton.vue'
// import JSXButton from './button/JSXButton'
// import WButton from './button/WButton'
createApp({
  template: `
    <div>
      <WButton color="blue">普通</WButton>
      <WButton color="green">普通</WButton>
      <WButton color="gray" icon="search" >普通</WButton>
      <WButton color="pink" icon="search" ></WButton>
    </div>
  `,
})
  .use(WButton)
  .mount("#app");
