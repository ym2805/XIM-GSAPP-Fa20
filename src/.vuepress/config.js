const { description } = require('../../package')
const { getFilePaths } = require("./helpers/path.js");

module.exports = {

  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'XIM GSAPP',
  base: "/XIM-GSAPP-Fa20/",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: './',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Overview',
        link: '/guide/'
      },
      {
        text: 'Tools',
        link: '/tools/'
      },
      {
        text: 'Buildings',
        link: '/buildings/'
      },
      {
        text: 'Projects',
        ariaLabel: 'test dropdown',
        items: [
          { text: 'Fall 2020', link: '/projects/Fall_2020/' },
          { text: 'Spring 2021', link: '/projects/Spring_2021/' }
        ]
      },
      {
        text: 'Procedures',
        link: '/procedures/'
      },
      {
        text: 'Class Syllabus',
        link: 'https://docs.google.com/document/d/1btyPJuDrsicFnWscK01lmREq2wmyLQlmC2yKiVvJus8/edit#'
      }
    ],
    sidebar: {
      '/projects/Fall_2020/':getFilePaths('projects/Fall_2020', false, true),
      '/projects/Spring_2021/':getFilePaths('projects/Spring_2021', false, true),
      '/procedures/': [
        '',
        'procedure_page_tab_1',
        'procedure_page_tab_2'
      ],

      '/tools/': [
        '', 
        'project_document_example',
        'procedure_page_tab_2'

      ],
      '/': [ // fallback must be last in list
        ''
      ]
    },
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
