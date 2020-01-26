module.exports = {
  title: 'Cube Restaurant',
  description: 'A Scalable web project created for fun!',
  dest: 'public',
  markdown: {
    lineNumbers: true,
  },
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about.html' },
      { text: 'Guide', link: '/get-started.html' },
      { text: 'GitHub', link: 'https://github.com/cube-restaurant' },
    ],
    // algolia: {
    //   apiKey: '<API_KEY>',
    //   indexName: '<INDEX_NAME>'
    // }
  }
};
