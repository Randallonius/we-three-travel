import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'
import { Layout, Listing, Wrapper, Title, SEO, Header } from '../components'
import website from '../../config/website'


const TagWrapper = Wrapper.withComponent('main')

const Tag = ({
  pageContext: { tag },
  data: {
    posts: { edges, totalCount },
  },
  location,
}) => (
  <Layout>
    <SEO title={`Tag: ${tag} | ${website.titleAlt}`} pathname={location.pathname} />
    <Header />
    <TagWrapper id={website.skipNavId}>
      <Title style={{ marginTop: '4rem' }}>
        {totalCount} {totalCount === 1 ? 'Post' : 'Posts'} {totalCount === 1 ? 'was' : 'were'} tagged with "{tag}"
      </Title>
      <Listing posts={edges} />
    </TagWrapper>
  </Layout>
)

export default Tag

Tag.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }).isRequired,
  data: PropTypes.shape({
    posts: PropTypes.shape({
      edges: PropTypes.array.isRequired,
      totalCount: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
  location: PropTypes.object.isRequired,
}

export const pageQuery = graphql`
  query TagPage($tag: String!) {
    posts: allPrismicPost(
      sort: { fields: [data___date], order: DESC }
      filter: {
        data: {
          tags: { elemMatch: { tag: { document: { elemMatch: { data: { name: { eq: $tag } } } } } } }
        }
      }
    ) {
      totalCount
      edges {
        node {
          uid
          data {
            title {
              text
            }
            date(formatString: "DD.MM.YYYY")
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
            author_group {
              author {
                document {
                  data {
                    name
                    interests
                    stamps
                    favorite_country
                    title
                  }
                }
              }
            }
            body {
              ... on PrismicPostBodyText{
                slice_type
                id
                primary {
                  text {
                    text
                  }
                }
              }
              ... on PrismicPostBodyHeroImage {
                slice_type
                id
                primary {
                  image {
                    localFile {
                      childImageSharp {
                        fluid(maxWidth: 400, quality: 90) {
                          ...GatsbyImageSharpFluid_withWebp
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
