import { defineValaxyConfig } from 'valaxy'
import type { UserThemeConfig } from 'valaxy-theme-yun'
import { addonWaline } from 'valaxy-addon-waline'
import { addonAlgolia } from 'valaxy-addon-algolia'

/**
 * User Config
 * do not use export const
 */
export default defineValaxyConfig<UserThemeConfig> ({
  theme: 'yun',

  themeConfig: {
    banner: {
      enable: true,
      title: ['Bright','⭐','🌙','⭐','Moonmo'],
      cloud: {
        enable: true,
      },
    },

    pages: [
      {
        name: '我的小伙伴们',
        url: '/links/',
        icon: 'i-ri-genderless-line',
        color: 'dodgerblue',
      },
      {
        name: '赞助我',
        url: '/posts/reward',
        icon: 'i-ri-money-cny-box-line',
        color: 'red',
      },
      {
        name: '喜欢的女孩子',
        url: '/girls/',
        icon: 'i-ri-women-line',
        color: 'hotpink',
      },
    ],

    footer: {
      since: 2023,
      // beian: {
      //   enable: true,
      //   icp: '苏ICP备17038157号',
      // },
    },
  },

  unocss: {
    safelist: [
      'i-ri-home-line',
    ],
  },

  addons: [
      // Aligolia 搜索
    addonAlgolia({
      appId: 'UX9HUX3YK4',
      apiKey: '0ecb73a1b3e1abff0830fad1252c048b',
      indexName: 'brightmoonmo',
    }),
      // 评论
    addonWaline({
      serverURL: 'https://brightmoonmo-github-io.vercel.app/',
      // pageview: true,
      comment: true,
    }),
  ],
})
