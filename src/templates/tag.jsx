import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'
import { Layout, Listing, Wrapper, Title, SEO, Header, AsideLayout } from '../components'
import website from '../../config/website'

const TagWrapperContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const TagWrapperContent = styled.section`
  width: 100%;
  @media (min-width: ${props => props.theme.breakpoints.m}) {
    width: 70%;
  }
`

const TagWrapper = Wrapper.withComponent('main')

const Tag = ({
  pageContext: { tag },
  data: {
    tagPosts: { edges, totalCount },
    asidePosts
  },
  location,
}) => (
  <Layout>
    <SEO title={`Tag: ${tag} | ${website.titleAlt}`} pathname={location.pathname} />
    <Header />
    <TagWrapper id={website.skipNavId} style={{ paddingTop: '4rem', paddingBottom: '2rem' }}>
      <TagWrapperContainer>
        <TagWrapperContent>
          <Title>
            {totalCount} {totalCount === 1 ? 'Post' : 'Posts'} {totalCount === 1 ? 'was' : 'were'} tagged with "{tag}"
          </Title>
          <Listing posts={edges} location={location}/>
        </TagWrapperContent>
        <AsideLayout posts={asidePosts.edges}/>
      </TagWrapperContainer>
    </TagWrapper>
  </Layout>
)

export default Tag

Tag.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }).isRequired,
  data: PropTypes.shape({
    tagPosts: PropTypes.shape({
      edges: PropTypes.array.isRequired,
      totalCount: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
  location: PropTypes.object.isRequired,
}

export const pageQuery = graphql`
  query TagPage($tag: String!) {
    tagPosts: allPrismicPost(
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
                        fluid(maxWidth: 800, quality: 90) {
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
    asidePosts: allPrismicPost(limit: 5, sort: { fields: [data___date], order: DESC }) {
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
