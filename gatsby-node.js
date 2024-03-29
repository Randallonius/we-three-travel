const path = require('path')
const _ = require('lodash')

exports.onCreateWebpackConfig = ({
  actions,
}) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.node$/,
          use: 'node-loader'
        }
      ],
    },
  })
};
// graphql function returns a promise so we can use this little promise helper to have a nice result/error state
const wrapper = promise =>
  promise
    .then(result => {
      if (result.errors) {
        throw result.errors
      }
      return { result, error: null }
    })
    .catch(error => ({ error, result: null }))

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const postTemplate = path.resolve('src/templates/post.jsx')
  const categoryTemplate = path.resolve('src/templates/category.jsx')
  const tagTemplate = path.resolve('src/templates/tag.jsx')

  const { error, result } = await wrapper(
    graphql(`
      {
        allPrismicPost {
          edges {
            node {
              id
              uid
              data {
                categories {
                  category {
                    document {
                      data {
                        name
                      }
                    }
                  }
                }
                tags {
                  tag {
                    document {
                      data {
                        name
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    `)
  )

  if (!error) {
    const categorySet = new Set()
    const tagSet = new Set()
    const postsList = result.data.allPrismicPost.edges

    // Double check that the post has a category assigned
    postsList.forEach(edge => {
      if (edge.node.data.categories[0].category) {
        edge.node.data.categories.forEach(cat => {
          categorySet.add(cat.category.document[0].data.name)
        })
      }

      if (edge.node.data.tags[0].tag) {
        edge.node.data.tags.forEach(t => {
          tagSet.add(t.tag.document[0].data.name)
        })
      }

      // The uid you assigned in Prismic is the slug!
      createPage({
        path: `/${edge.node.uid}`,
        component: postTemplate,
        context: {
          // Pass the unique ID (uid) through context so the template can filter by it
          uid: edge.node.uid,
        },
      })
    })

    const categoryList = Array.from(categorySet)

    categoryList.forEach(category => {
      createPage({
        path: `/categories/${_.kebabCase(category)}`,
        component: categoryTemplate,
        context: {
          category,
        },
      })
    })

    const tagList = Array.from(tagSet)

    tagList.forEach(tag => {
      createPage({
        path: `/tags/${_.kebabCase(tag)}`,
        component: tagTemplate,
        context: {
          tag,
        },
      })
    })

    return
  }

  console.log(error)
}
