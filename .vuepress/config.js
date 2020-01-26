module.exports = {
  title: 'Cube Restaurant',
  description: 'A Scalable web project created for fun!',
  dest: 'public',
  markdown: {
    lineNumbers: true,
  },
  head: [
    ['link', { rel: 'icon', href: '/assets/img/favicon.png' }]
  ],
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/get-started.html' },
      { text: 'Coding Guidelines', link: '/coding-guidelines/' },
      { text: 'Useful Commands', link: '/useful-commands/' },
      { text: 'GitHub', link: 'https://github.com/cube-restaurant' },
    ],
    // algolia: {
    //   apiKey: '<API_KEY>',
    //   indexName: '<INDEX_NAME>'
    // },
    sidebar: {
      '/coding-guidelines/': [
        '',
        'html',
        'css',
        'javascript',
        'github',
      ],
      '/useful-commands/': [
        '',
        'git',
        'cmd',
        'linux',
        'yarn',
        'npm',
      ],
      '/': [
        '',
        'get-started',
        'code-of-conduct',
        'about',
        'engineering-guidelines',
        'how-to-contribute',
        'how-to-deploy',
        'code-reviews',
      ],
    },
  }
};
