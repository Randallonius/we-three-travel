import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'
import { Layout, Listing, Wrapper, SliceZone, Title, SEO, Header, HeroImageSliceZone } from '../components'
import Categories from '../components/Listing/Categories'
import website from '../../config/website'
import AsideListing from '../components/Listing/AsideListing';
import AsideCategories from '../components/Listing/AsideCategories';

const Headline = styled.p`
  font-family: 'Source Sans Pro', -apple-system, 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial',
    sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  color: ${props => props.theme.colors.grey};
  font-size: 1.25rem;
  padding-top: 1.45rem;
  a {
    font-style: normal;
    font-weight: normal;
  }
`

const PostWrapperMain = styled.div`
  width: 70%;
`

const PostWrapperMainContent = styled.div`
  padding: 0 2rem 2rem 2rem;
  background-color: ${props => props.theme.colors.white};
`

const PostWrapperTitle = styled.h3`
`

const PostWrapperAside = styled.div`
  width: 25%;
`

const PostWrapperRecent = styled.div`

`

const PostWrapperCategories = styled.div`
`

const AsideTitle = styled.div`
  background-color: ${props => props.theme.colors.black};
`

const AsideTitleText = styled.h4`
  color: ${props => props.theme.colors.white};
  padding: 1rem;
`

const PostWrapperInner = styled.div`
  display: flex;
  justify-content: space-between;
`

const PostWrapper = Wrapper.withComponent('main')

const Post = ({ data: { prismicPost, posts }, location }) => {
  const { data } = prismicPost
  let categories = false
  let author = false
  if (data.categories[0].category) {
    categories = data.categories.map(c => c.category.document[0].data.name)
  }
  if (data.author_group[0].author) {
    author = data.author_group.map(a => a.author.document[0].data.name)
  }
  console.log('>>>POST', data)
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
      {/* <Hero>
        <Wrapper>
          <h1>{data.title.text}</h1>
        </Wrapper>
      </Hero> */}
      <PostWrapper id={website.skipNavId} style={{ paddingTop: '4rem', paddingBottom: '2rem' }}>
        <PostWrapperInner>
          <PostWrapperMain>
            <HeroImageSliceZone allHeroImageSlices={data.body} />
            <PostWrapperMainContent>
              <Headline>
                {data.date} {categories && <span>/</span>} {categories && <Categories categories={categories} />}  / By {author}
              </Headline>
              <PostWrapperTitle>{data.title.text}</PostWrapperTitle>
              <SliceZone allSlices={data.body} />
            </PostWrapperMainContent>
          </PostWrapperMain>
          <PostWrapperAside>
            <PostWrapperRecent>
              <AsideTitle>
                <AsideTitleText>Recent Posts</AsideTitleText>
              </AsideTitle>
              <AsideListing posts={posts.edges}/>
            </PostWrapperRecent>
            <PostWrapperCategories>
              <AsideTitle>
                <AsideTitleText>Categories</AsideTitleText>
              </AsideTitle>
              <AsideCategories />
            </PostWrapperCategories>
          </PostWrapperAside>
        </PostWrapperInner>
        {/* <Title style={{ marginTop: '4rem' }}>Recent posts</Title>
        <Listing posts={posts.edges} /> */}
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
