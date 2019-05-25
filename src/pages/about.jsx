import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { graphql } from 'gatsby'
import { Layout, Wrapper, HeroImageSliceZone, Header, AuthorCard } from '../components'
import Headroom from 'react-headroom'
import { FiFacebook, FiInstagram, FiMail } from 'react-icons/fi';
import website from '../../config/website'

const IndexWrapper = Wrapper.withComponent('main')

const AboutPageWrapper = styled.div`
  width: 80%;
  margin: 70px auto;
`

const Hero = styled.header`
  display: flex;
  align-items: center;
  padding-bottom: 75px;
`

const HeroInnerImage = styled.div`
  width: 100%;
  @media (min-width: ${props => props.theme.breakpoints.l}) {
    .gatsby-image-wrapper {
      max-height: 500px;
    }
  }
  div {
    padding: 0;
  }
`

const AboutPageContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-direction: column;

  @media (min-width: ${props => props.theme.breakpoints.s}) {
    flex-direction: row;
  }
`

const ContentContainer = styled.div`
  

  @media (min-width: ${props => props.theme.breakpoints.s}) {
    width: 49%;
  }
`

const AboutPageTitle = styled.h2`

`

const AboutPageContent = styled.div``

const SocialLinkContainer = styled.div`
`

const SocialLink = styled.a`
  font-size: 18px;
  padding: 2px 7px 4px;
  transition: all 0.25s ease-in-out;
  color: ${props => props.theme.colors.greyHover};
  border: 1px solid ${props => props.theme.colors.greyHover};
  margin: 2px;

  &:hover {
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.greyLight};
    border-color: transparent;
  }
`

class About extends Component {
  render() {
    const {
      data: { aboutpage, posts },
    } = this.props
    return (
      <Layout>
        <Headroom>
          <Header />
        </Headroom>
        <AboutPageWrapper>
          <Hero>
            <HeroInnerImage>
              <HeroImageSliceZone allHeroImageSlices={aboutpage.data.body} />
            </HeroInnerImage>
          </Hero>
          <AboutPageContainer>
            <ContentContainer>
              <AboutPageTitle>{aboutpage.data.about_title.text}</AboutPageTitle>
              <AboutPageContent dangerouslySetInnerHTML={{ __html: aboutpage.data.about_content.html }}/>
              {/* <AuthorCard /> */}
            </ContentContainer>
            <ContentContainer>
              <AboutPageTitle>{aboutpage.data.contact_title.text}</AboutPageTitle>
              <AboutPageContent dangerouslySetInnerHTML={{ __html: aboutpage.data.contact_content.html }} />
              <SocialLinkContainer>
                <SocialLink href={`http://www.facebook.com/${website.facebook}`}><FiFacebook /></SocialLink>
                <SocialLink href={`http://www.instagram.com/${website.instagram}`}><FiInstagram /></SocialLink>
                <SocialLink href={`mailto:${website.email}`}><FiMail /></SocialLink>
              </SocialLinkContainer>
            </ContentContainer>
          </AboutPageContainer>
        </AboutPageWrapper>
      </Layout>
    )
  }
}

export default About

About.propTypes = {
  data: PropTypes.shape({
    posts: PropTypes.object.isRequired,
  }).isRequired,
}

export const pageQuery = graphql`
  query AboutQuery {
    aboutpage: prismicAboutpage {
      data {
        about_title {
          text
        }
        about_content {
          html
        }
        contact_title {
          text
        }
        contact_content {
          html
        }
        body {
          ... on PrismicAboutpageBodyHeroImage {
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
