export default {
  widgets: [
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
                  buildHookId: '5fc80a5ec5319800b7e64e48',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-ykv8nnyh',
                  apiId: '79331a31-f0d3-45e6-ac9f-c4d8499de24e'
                },
                {
                  buildHookId: '5fc80a5e56db450139e339df',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-35mrycka',
                  apiId: 'a66e7b72-2fca-48b7-9ffc-04507d44ebaf'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/wibbs88/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-35mrycka.netlify.app', category: 'apps'}
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
