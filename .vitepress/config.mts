import { defineConfig } from 'vitepress'
import { nav,sidebar} from "./configs"
export default defineConfig({
  title: "My Awesome Project",
  description: "A VitePress Site",
  outDir: "dist",
  srcDir: "content",
  themeConfig: {
    nav: nav,
    sidebar: sidebar,
    //footer: footer,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
