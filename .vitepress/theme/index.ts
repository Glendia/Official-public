// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './css/index.css'
// theme/index.ts
import '@theojs/lumen/theme'
import { HomeFooter } from '@theojs/lumen'
import { Footer_Data } from '../data/footerData'
export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'layout-bottom': () => h(HomeFooter, { Footer_Data }) 
    }) 
  },
  enhanceApp({ app, router, siteData }) {
    // ...
  }
} satisfies Theme
