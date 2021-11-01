module.exports = {
  title: 'TARASCO LABS',
  description: 'ARTESANOS DEL SOFTWARE DESARROLLANDO SOLUCIONES DESDE TERRITORIOS DEL ANTIGUO IMPERIO TARASCO',

  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  themeConfig: {
    search: false,
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Servicios',
        link: '/services/',
      },
      {
        text: 'Contacto',
        link: '/contact/'
      },
      {
        text: 'Acerca de',
        link: '/about/'
      },
      /*
      {
        text: 'Languages',
        ariaLabel: 'Language Menu',
        items: [
          { text: 'Spanish', link: '/language/spanish/' },
          { text: 'English', link: '/language/english/' }
        ]
      }
      */
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Guide',
          collapsable: false,
          children: [
            '',
            'using-vue',
          ]
        }
      ],
    }
  },
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
