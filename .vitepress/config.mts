import { defineConfig } from 'vitepress'
import { nav,sidebar,head } from "./configs"

export default defineConfig({
  title: "巨浪引擎",
  titleTemplate: ":title - 巨浪引擎",
  description: "巨浪引擎，为工作加速",
  head: head,
  lang: "zh-Hans",
  base: "/",
  cleanUrls: "true",
  //rewrites: rewrites,
  srcDir: "content",
  srcExclude: ['**/README.md', '**/TODO.md'],
  outDir: "dist",
  assetsDir: "assets",
  cacheDir: ".vitepress/cache",
  ignoreDeadLinks: true,
  metaChunk: true,
  mpa: false,
  appearance: true,
  lastUpdated: false,
  //markdown: markdown,
  //vite: vite,
  
  themeConfig: {
    i18nRouting: false,
    logo: "/public-logo.svg",
    siteTitle: "巨浪引擎",
    nav: nav,
    sidebar: sidebar,
    aside: true,
    outline: {
      label: "本页目录",
      level: 'deep',
    },
    //socialLinks: socialLinks,
    //footer: footer,
    //editLink: editLink,,
    //lastUpdated: lastUpdated,
    //algolia: algolia,
    //carbonAds: carbonAds,
    //docFooter: {prev: '上一页',next: '下一页'},
    docFooter: {prev: false,next: false},
    darkModeSwitchLabel: "主题切换",
    lightModeSwitchTitle: "切换到浅色模式",
    darkModeSwitchTitle: "切换到深色模式",
    sidebarMenuLabel: "文章",
    returnToTopLabel: "返回顶部",
    langMenuLabel: "多语言",
    externalLinkIcon: true,
    search: {
      provider: 'local'
    },
    notFound: {
      title: '找不到页面',
      quote: '页面不见了，也许它去找寻新的冒险了！',
      linkLabel: '返回首页重新探索',
      linkText: '返回首页',
      code: '404'
    },
  }
})
