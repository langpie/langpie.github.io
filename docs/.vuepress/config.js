module.exports = {

  base: "/",
  
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Project LangPie',
      description: 'A Raspberry Pi Distributed Self-driving Car Project'
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'Project LangPie',
      description: '树莓派分布式自动驾驶小车项目'
    }
  },
  
  head: [ 
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no,viewport-fit=cover' }],

    ['link', { rel: 'manifest', href: '/manifest.json', crossorigin: 'use-credentials' }],
    ['link', { rel: 'shortcut icon', type: 'image/png', href: '/favicon.png' }],
    ['link', { rel: 'icon', type: 'image/png', href: '/favicon.png' }],
    ['link', { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon.png' }],

    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'default' }],
    ['meta', { name: 'theme-color', content: '#5d85c8' }],
    ['meta', { name: 'msapplication-TileColor', content: '#fff' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon.png' }],

    ['meta', { property: 'twitter:card', content: 'summary' }],

    ['meta', { property: 'og:title', content: 'Project LangPie' }],
    ['meta', { property: 'og:description', content: 'A Raspberry Pi Distributed Self-driving Car Project' }],
    ['meta', { property: 'og:url', content: 'https://langpie.ga/' }],
    ['meta', { property: 'og:image', content: 'https://langpie.ga/open_graph_logo.png' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'Project LangPie' }]
  ],

  markdown: {
    lineNumbers: false
  },

  plugins: [
    ['vuepress-plugin-smooth-scroll'],
    ['vuepress-plugin-nprogress'],
    ['@vuepress/active-header-links'],
    ['@vuepress/last-updated'],
    ['@vuepress/pwa',
      {
        serviceWorker: true,
        popupComponent: 'SWUpdatePopup',
        updatePopup: true
      }
    ],
    ['@vuepress/google-analytics',
      {
        'ga': ''
      }
    ],
    ['vuepress-plugin-clean-urls',
      {
        normalSuffix: '/',
        indexSuffix: '/',
        notFoundPath: '/'
      }
    ],
    ['vuepress-plugin-mathjax',
      {
        target: 'chtml',
        macros: {
          '*': '\\times'
        }
      }
    ],
    ['vuepress-plugin-copyright',
      {
        noCopy: true,
        minLength: 1000,
        locales: {
          '/': {
            authorName: 'LangPie Team'
          },
          '/zh/': {
            authorName: 'LangPie 小组'
          }
        }
      }
    ],
  ],

  theme: 'default-prefers-color-scheme',
  
  themeConfig: {
    locales: {
      '/': {
        selectText: 'Languages',
        label: 'English',
        ariaLabel: 'Languages',
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: "GPLv3 / Last Updated",
        nav: require('./nav/en'),
        sidebar: require('../sidebar_contents/en'),
        serviceWorker: {
          updatePopup: {
            message: "New content is available.",
            buttonText: "Refresh"
          }
        }
      },
      '/zh/': {
        selectText: '选择语言',
        label: '简体中文',
        ariaLabel: '选择语言',
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: "GPLv3 / 最后更新",
        nav: require('./nav/zh'),
        sidebar: require('../sidebar_contents/zh'),
        serviceWorker: {
          updatePopup: {
            message: "发现新内容可用.",
            buttonText: "刷新"
          }
        }
      }
    },
    smoothScroll: true,
    sidebarDepth: 3,
    search: true,
    searchMaxSuggestoins: 10,
    nextLinks: true,
    prevLinks: true,
    activeHeaderLinks: true,
    repo: "",
    editLinks: true,
  },

  markdown: {
    extendMarkdown: md => {
      md.use(require('markdown-it-html5-embed'),
      {
        html5embed: {
          useImageSyntax: true,
          useLinkSyntax: false,
          attributes: {
            'audio': 'width="100%" controls class="audioplayer" preload="metadata" playsinline',
            'video': 'width="100%" height="auto" controls class="audioplayer" preload="metadata" playsinline'
          }
        } 
      })
    }
  },

  evergreen: false
};
