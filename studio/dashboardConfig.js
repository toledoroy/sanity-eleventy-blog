export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '61ee4be0ed357e56f48802e5',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-cjcvuf9h',
                  apiId: '8d16f410-3b17-47b7-8cc7-43a69c2a320b'
                },
                {
                  buildHookId: '61ee4be0d5ff7959b6a926b6',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-ijszgu7n',
                  apiId: '022e0e59-af51-4116-845f-cb8e7d6818de'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/toledoroy/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-ijszgu7n.netlify.app', category: 'apps'}
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
