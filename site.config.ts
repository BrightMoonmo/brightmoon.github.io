import { defineSiteConfig } from 'valaxy'

export default defineSiteConfig({
  lang: 'zh-CN',
  title: 'Moon',
  subtitle: 'The moon is bright like you.',
  description: '月似汝一般皎洁',
  author: {
    name: 'BrightMoonmo',
    avatar: '/images/avatar.jpg',
    status: {
      emoji: '🌙',
    },
  },
  url: 'https:/brightmoonmo.github.io',
  mediumZoom: { enable: true },
  social: [
    {
      name: 'GitHub',
      link: 'https://github.com/YunYouJun',
      icon: 'i-ri-github-line',
      color: '#6e5494',
    },
    {
      name: '微博',
      link: 'https://weibo.com/jizhideyunyoujun',
      icon: 'i-ri-weibo-line',
      color: '#E6162D',
    },
    {
      name: '网易云音乐',
      link: 'https://music.163.com/#/user/home?id=247102977',
      icon: 'i-ri-netease-cloud-music-line',
      color: '#C20C0C',
    },
    {
      name: '哔哩哔哩',
      link: 'https://space.bilibili.com/1579790',
      icon: 'i-ri-bilibili-line',
      color: '#FF8EB3',
    },
    {
      name: 'E-Mail',
      link: 'mailto:me@yunyoujun.cn',
      icon: 'i-ri-mail-line',
      color: '#8E71C1',
    },
  ],

  sponsor: {
    enable: true,
    title: '赞助我！',
    methods: [
      {
        name: '支付宝',
        url: '/images/alipay.png',
        color: '#00A3EE',
        icon: 'i-ri-alipay-line',
      },
      {
        name: 'QQ 支付',
        url: '/images/QQ.png',
        color: '#12B7F5',
        icon: 'i-ri-qq-line',
      },
      {
        name: '微信支付',
        url: '/images/Wechat.png',
        color: '#2DC100',
        icon: 'i-ri-wechat-pay-line',
      },
    ],
  },

  search: {
    enable: true,
    type: 'fuse',
  },

  comment: {
    enable: true,
  },
})
