/// <reference types="vitest" />
import { defineConfig } from "vite";
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Unocss from './config/unocss'

const rollupOptions = {
  external: ['vue', 'vue-router'],
  output: {
    globals: {
      vue: 'Vue'
    }
  }
}
// 
export default defineConfig({
  plugins: [vue(), vueJsx(), Unocss()],
  build: {
    rollupOptions,
    minify: true,
    lib: {
      entry: './src/entry.ts',
      name: 'WUI',
      fileName: 'w-ui',
      formats: ['es', 'umd', 'iife']
    }
  },
  test: {
    globals: true,
    environment: 'happy-dom',
    transformMode: {
      web: [/.[tj]sx$/]
    }
  }
})