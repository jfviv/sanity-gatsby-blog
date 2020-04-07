export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e8cd5bbd55cb936ddb4c9f6',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-o7vc8r1d',
                  apiId: 'ec9543ae-8f07-4f82-8159-70bbf72cadcb'
                },
                {
                  buildHookId: '5e8cd5bb45ade73bfed78bd2',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-wyjq5z2p',
                  apiId: 'f92467c8-13bd-481e-94da-e13c19811747'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jfviv/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-wyjq5z2p.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
