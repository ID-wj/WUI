import { createApp } from "vue/dist/vue.esm-bundler.js";
import WButton from "./button";

// import WButton from './button'
// import SFCButton from './button/SFCButton.vue'
// import JSXButton from './button/JSXButton'
// import WButton from './button/WButton'
createApp({
  template: `
    <div>
      <WButton color="blue" size="large"><div>普通</div></WButton>
      <WButton color="green" size="medium">普通</WButton>
      <WButton color="gray" icon="search"  size="small">普通</WButton>
      <WButton color="pink" icon="search" ></WButton>
    </div>
  `,
})
  .use(WButton)
  .mount("#app");
