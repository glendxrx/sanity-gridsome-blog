export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '611a8dca8dd5f806de96cff9',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-mervt7dm',
                  apiId: 'bc028a58-71c1-4af2-87a7-ca3d5a14767f'
                },
                {
                  buildHookId: '611a8dca8dd5f808da96ceb9',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-ypvb9yvs',
                  apiId: 'b146907f-d2bd-4bb1-aaa2-c62962fb837e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/glendxrx/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-ypvb9yvs.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
