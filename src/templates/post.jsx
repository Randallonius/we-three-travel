import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'
import { Layout, Wrapper, SliceZone, SEO, Header, HeroImageSliceZone, AsideLayout } from '../components'
import Categories from '../components/Listing/Categories'
import Tags from '../components/Listing/Tags'
import website from '../../config/website'

const Headline = styled.p`
  color: ${props => props.theme.colors.grey};
  padding-top: 1.45rem;

  @media (min-width: ${props => props.theme.breakpoints.l}) {
    font-size: 1.25rem;
  }

  a {
    font-style: normal;
    font-weight: normal;
  }

  span, a {
    margin-right: 5px;
  }
`

const PostWrapperMain = styled.div`
  width: 100%;
  @media (min-width: ${props => props.theme.breakpoints.m}) {
    width: 70%;
  }
`

const PostWrapperMainContent = styled.div`
  padding: 0 2rem 2rem 2rem;
  background-color: ${props => props.theme.colors.white};
`

const PostWrapperInner = styled.div`
  display: flex;
  justify-content: space-between;
`

const PostTags = styled.section`
  display: flex;
  align-items: center;
  margin-top: 1.944em;
  a {
    margin-bottom: 0;
  }
  h5 {
    margin: 0;
    padding-right: 0.375em;
  }
`


const PostWrapper = Wrapper.withComponent('main')

const Post = ({ data: { prismicPost, posts }, location }) => {
  const { data } = prismicPost
  let categories = false
  let author = false
  let tags = false
  if (data.categories[0].category) {
    categories = data.categories.map(c => c.category.document[0].data.name)
  }
  if (data.author_group[0].author) {
    author = data.author_group.map(a => a.author.document[0].data.name)
  }
  if (data.tags[0].tag) {
    tags = data.tags.map(t => t.tag.document[0].data.name)
  }
  return (
    <Layout customSEO>
      <SEO
        title={`${data.title.text} | ${website.titleAlt}`}
        pathname={location.pathname}
        desc={data.description}
        node={prismicPost}
        article
      />
      <Header />
      <PostWrapper id={website.skipNavId} style={{ paddingTop: '4rem', paddingBottom: '2rem' }}>
        <PostWrapperInner>
          <PostWrapperMain>
            <HeroImageSliceZone allHeroImageSlices={data.body} />
            <PostWrapperMainContent>
              <Headline>
              <span>{data.date}</span> {categories && <span>/</span>} {categories && <Categories categories={categories} />} <span>/</span> <span>By {author}</span>
              </Headline>
              <h3>{data.title.text}</h3>
              <SliceZone allSlices={data.body} />
            </PostWrapperMainContent>
            <PostTags>
              <h5>Tags:</h5>
              {tags && <Tags tags={tags} />}
            </PostTags>
          </PostWrapperMain>
          <AsideLayout posts={posts.edges}/>
        </PostWrapperInner>
      </PostWrapper>
    </Layout>
  )
}

export default Post

Post.propTypes = {
  data: PropTypes.shape({
    prismicPost: PropTypes.object.isRequired,
  }).isRequired,
  location: PropTypes.object.isRequired,
}

export const pageQuery = graphql`
  query PostBySlug($uid: String!) {
    prismicPost(uid: { eq: $uid }) {
      uid
      first_publication_date
      last_publication_date
      data {
        title {
          text
        }
        description
        date(formatString: "MMMM DD, YYYY")
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
          ... on PrismicPostBodyText {
            slice_type
            id
            primary {
              text {
                html
              }
            }
          }
          ... on PrismicPostBodyCodeBlock {
            slice_type
            id
            primary {
              code_block {
                html
              }
            }
          }
          ... on PrismicPostBodyQuote {
            slice_type
            id
            primary {
              quote {
                html
                text
              }
            }
          }
          ... on PrismicPostBodyImage {
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
          ... on PrismicPostBodyHeroImage {
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
    posts: allPrismicPost(limit: 5, sort: { fields: [data___date], order: DESC }) {
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
