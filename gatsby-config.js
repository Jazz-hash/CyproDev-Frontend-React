'use strict'

module.exports = {
  siteMetadata: {
    title: 'Cyprodev | Where Quality Matters',
    description: 'The Best Software Company',
    siteUrl: 'https://cyprodev.com/',
    author: {
      name: 'Muhammad Jazzel Mehmood',
      url: 'https://github.com/Jazz-hash',
      email: 'jazzelmehmood6@gmail.com'
    }
  },
  plugins: [
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1rem'
            }
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1140,
              quality: 90,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    },
    'gatsby-transformer-json',
    'gatsby-plugin-emotion',
    'gatsby-plugin-typescript',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet'
  ]
}
