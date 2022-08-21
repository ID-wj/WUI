import { defineConfig } from "vite";
// import vue from '@vitejs/plugin-vue'
import vueJsx from "@vitejs/plugin-vue-jsx";
import Unocss from "../config/unocss";
// https://vitejs.dev/config/

export default defineConfig({
  plugins: [
    // 添加JSX插件
    // vue(),
    vueJsx(),
    Unocss(),
  ],
});
