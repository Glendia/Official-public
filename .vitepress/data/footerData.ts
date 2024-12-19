// .vitepress/data/footerData.ts
import type { FooterData } from '@theojs/lumen'

export const Footer_Data: FooterData = {
  beian: { icp: '备案号:ICP备2023012559号', showIcon: false },
  author: { name: 'BillowEngine', link: '/' },
  group: [
    {
      title: '法律协议',
      style: 'rgba(255, 87, 51, 1)',
      links: [
        { name: '示例1', href: 'https://', icon: 'solar:book-bold' },
        { name: '示例2', href: 'https://' }
      ]
    },
    {
      title: '产品列表',
      target: '_self', // `target`默认打开方式为 _blank , 为 _self 时不会显示外部链接图标
      style: 'rgba(255, 87, 51, 1)',
      links: [
        { name: '示例1', icon: 'solar:book-bold', href: '/docs' },
        { name: '示例2', href: '/page' }
      ]
    },
    {
      title: '相关连接',
      style: 'rgba(255, 87, 51, 1)',
      links: [
        { name: '示例1', href: 'https://', icon: 'solar:book-bold' },
        { name: '示例2', href: 'https://' }
      ]
    },
    {
      title: '友情链接',
      style: 'rgba(255, 87, 51, 1)',
      links: [
        { name: '示例1', href: 'https://', icon: 'solar:book-bold' },
        { name: '示例2', href: 'https://' }
      ]
    },
  ]
}