import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { graphql } from 'gatsby'
import { Layout, Listing, Wrapper, HeroImageSliceZone, Header, InstagramListing, Title } from '../components'
import website from '../../config/website'
import Headroom from 'react-headroom'

const Hero = styled.header`
  display: flex;
  align-items: center;
  position: relative;
`

const HeroInnerImage = styled.div`
width: 100%;
  @media (min-width: ${props => props.theme.breakpoints.m}) {
    
  }
  @media (min-width: ${props => props.theme.breakpoints.l}) {
    .gatsby-image-wrapper {
      max-height: 600px;
    }
  }
  div {
    padding: 0;
  }

`

const HeroInnerTextContainer = styled.div`
  display: none;

  @media (min-width: ${props => props.theme.breakpoints.s}) {
    display: block;
    position: absolute;
    top: 35%;
    border: 1px solid black;
    background: rgba(255,255,255,0.4);
  }

  h1 {
    margin-bottom: 0;
  }
`

const HeroInnerText = styled.div`
  padding: 50px 50px 50px 100px;
`

const IndexWrapper = Wrapper.withComponent('main')

class Index extends Component {
  render() {
    const {
      data: { homepage, posts, instagrams },
      location
    } = this.props
    return (
      <Layout>
        <Headroom>
          <Header />
        </Headroom>
        <Hero>
          <HeroInnerImage>
            <HeroImageSliceZone allHeroImageSlices={homepage.data.body} />
          </HeroInnerImage>
          <HeroInnerTextContainer>
            <HeroInnerText>
              <h1>Welcome to</h1>
              <h1>{homepage.data.title.text}</h1>
              <span dangerouslySetInnerHTML={{ __html: homepage.data.content.html }}></span>
            </HeroInnerText>
          </HeroInnerTextContainer>
        </Hero>
        <IndexWrapper id={website.skipNavId} style={{ paddingTop: '3rem', paddingBottom: '2rem' }}>
          <Title>Recent Posts</Title>
          <Listing posts={posts.edges} location={location} />
          <Title>Instagram</Title>
          <InstagramListing instagrams={instagrams.edges}></InstagramListing>
        </IndexWrapper>
      </Layout>
    )
  }
}

export default Index

Index.propTypes = {
  data: PropTypes.shape({
    posts: PropTypes.object.isRequired,
    instagrams: PropTypes.object.isRequired,
  }).isRequired,
  location: PropTypes.object.isRequired,
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
                    fluid(maxWidth: 1300, quality: 90) {
                      ...GatsbyImageSharpFluid
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
                          ...GatsbyImageSharpFluid
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
    instagrams: allInstaNode(limit: 8, sort: { fields: [timestamp], order: DESC }) {
      edges {
        node {
          id
          likes
          comments
          mediaType
          preview
          original
          timestamp
          caption
          localFile {
            childImageSharp {
              fluid(maxWidth: 300, quality: 90) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          # Only available with the public api scraper
          thumbnails {
            src
            config_width
            config_height
          }
          dimensions {
            height
            width
          }
        }
      }
    }
  }
`
