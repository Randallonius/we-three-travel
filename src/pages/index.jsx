import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { graphql } from 'gatsby'
import { Layout, Listing, Wrapper, HeroImageSliceZone, Header } from '../components'
import website from '../../config/website'

const Hero = styled.header`
  display: flex;
  align-items: center;
`

const HeroInnerImage = styled.div`
  @media (min-width: ${props => props.theme.breakpoints.m}) {
    width: 100%;
  }
  @media (min-width: ${props => props.theme.breakpoints.l}) {
    .gatsby-image-wrapper {
      max-height: 500px;
    }
  }
  div {
    padding: 0;
  }

`

const IndexWrapper = Wrapper.withComponent('main')

class Index extends Component {
  render() {
    const {
      data: { homepage, posts },
    } = this.props
    return (
      <Layout>
        <Header />
        <Hero>
          <HeroInnerImage>
            <HeroImageSliceZone allHeroImageSlices={homepage.data.body} />
          </HeroInnerImage>
        </Hero>
        <IndexWrapper id={website.skipNavId} style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
            <Listing posts={posts.edges} />
        </IndexWrapper>
      </Layout>
    )
  }
}

export default Index

Index.propTypes = {
  data: PropTypes.shape({
    posts: PropTypes.object.isRequired,
  }).isRequired,
}

export const pageQuery = graphql`
  query IndexQuery {
    homepage: prismicHomepage {
      data {
        title {
          text
        }
        content {
          html
        }
        body {
          ... on PrismicHomepageBodyHeroImage {
            slice_type
            id
            primary {
              image {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 1200, quality: 90) {
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
    posts: allPrismicPost(sort: { fields: [data___date], order: DESC }) {
      edges {
        node {
          uid
          data {
            title {
              text
            }
            date(formatString: "MMMM DD YYYY")
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
