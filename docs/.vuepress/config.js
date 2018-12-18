module.exports = {
    title: ' Syk的个人主页',
    description: 'Syk的个人主页',
    themeConfig: {
      nav: [
        { text: '主页', link: '/' },
        { text: '百度', link: 'https://www.baidu.com' },
        { text: '白熊', link: 'https://wwwj.bearead.com' },
      ],
      sidebar: [
        {
          title: 'Group 1',
          collapsable: false,
          children: [
            '/'
          ]
        },
        {
          title: 'Group 2',
          children: [ '/' ]
        }
      ]
    }
  }
  