require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

const prismicHtmlSerializer = require('./src/gatsby/htmlSerializer')

const website = require('./config/website')

const pathPrefix = website.pathPrefix === '/' ? '' : website.pathPrefix

module.exports = {
  /* General Information */
  pathPrefix: website.pathPrefix,
  siteMetadata: {
    siteUrl: website.url + pathPrefix, // For gatsby-plugin-sitemap
    pathPrefix,
    title: website.title,
    titleAlt: website.titleAlt,
    description: website.description,
    banner: website.logo,
    headline: website.headline,
    siteLanguage: website.siteLanguage,
    ogLanguage: website.ogLanguage,
    author: website.author,
    twitter: website.twitter,
    facebook: website.facebook,
  },
  /* Plugins */
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-emotion',
    'gatsby-plugin-flow',
    'gatsby-plugin-react-leaflet',
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: 'we-three-travel',
        accessToken: `${process.env.API_KEY}`,
        // Get the correct URLs in blog posts
        linkResolver: () => post => `/${post.uid}`,
        // PrismJS highlighting for labels and slices
        htmlSerializer: () => prismicHtmlSerializer,
      },
    },
    'gatsby-plugin-lodash',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'config/typography.js',
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: website.googleAnalyticsID,
      },
    },
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: website.title,
        short_name: website.titleAlt,
        description: website.description,
        start_url: pathPrefix,
        background_color: website.backgroundColor,
        theme_color: website.themeColor,
        display: 'standalone',
        icon: website.favicon,
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allPrismicPost } }) => {
              return allPrismicPost.edges.map(edge => {
                let postAuthor = false
                if (edge.node.data.author_group[0].author) {
                  postAuthor = edge.node.data.author_group.map(a => a.author.document[0].data.name)
                }
                const excerptSlices = edge.node.data.body
                const slice = excerptSlices.find(s => 
                  s.slice_type && s.slice_type === 'text'
                  )
                return Object.assign({}, edge.node, {
                  date: edge.node.data.date,
                  title: edge.node.data.title.text,
                  author: postAuthor,
                  category: "travel",
                  url: site.siteMetadata.siteUrl + '/' + edge.node.uid,
                  guid: site.siteMetadata.siteUrl + '/' + edge.node.uid,
                  custom_elements: [{ "content:encoded": slice.primary.text.html }],
                })
              })
            },
            query: `
              {
                allPrismicPost(
                  sort: { fields: [data___date], order: DESC },
                ) {
                  edges {
                    node {
                      uid
                      data {
                        title {
                          text
                        }
                        date(formatString: "MMMM DD YYYY")
                        author_group {
                          author {
                            document {
                              data {
                                name
                              }
                            }
                          }
                        }
                        body {
                          ... on PrismicPostBodyText {
                            slice_type
                            id
                            primary {
                              text {
                                html
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
            title: "We Three Travel's RSS Feed",
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `we_three_travel`,
      },
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `wethreetravel`,
      },
    },
    // Must be placed at the end
    'gatsby-plugin-offline',
    'gatsby-plugin-netlify',
  ],
}
