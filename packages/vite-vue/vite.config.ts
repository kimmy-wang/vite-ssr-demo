import {defineConfig} from 'vite'
import legacy from '@vitejs/plugin-legacy'
import vue from '@vitejs/plugin-vue'
import vueJSX from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJSX(), legacy({
    targets: ['ie >= 11'],
    additionalLegacyPolyfills: ['regenerator-runtime/runtime']
  })]
})
