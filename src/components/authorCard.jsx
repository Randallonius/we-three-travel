import PropTypes from 'prop-types'
import { graphql, StaticQuery, Link } from 'gatsby'
import styled from '@emotion/styled'
import React, { Component } from 'react'
import Img from 'gatsby-image'

const AuthorContainer = styled.div`
  display: flex;
  margin-top: 20px;
`

const AuthorImageContainer = styled.div`
  width: 100px;
`

const AuthorImage = styled.div`
  max-width: 100px;
  border-radius: 50%;
  overflow: hidden;
`

const AuthorBio = styled.div`

`

const AuthorBioTitle = styled.div`

`

const AuthorCard = () => (
  <StaticQuery
    query={authorQuery}
    render={({allPrismicAuthor}) => (
      allPrismicAuthor.edges.map(({node}) => (
        <AuthorContainer key={node.data.name}>
          <AuthorImageContainer>
            <AuthorImage>
              <Img fluid={node.data.image.localFile.childImageSharp.fluid}/>
            </AuthorImage>
          </AuthorImageContainer>
          <AuthorBio>
            <AuthorBioTitle>
              <h2>{node.data.name}</h2>
              <p>-</p>
              <h4>{node.data.title}</h4>
            </AuthorBioTitle>
          </AuthorBio>
        </AuthorContainer>
      ))
    )}
  />
)

export default AuthorCard

export const authorQuery = graphql`
  query AuthorList {
    allPrismicAuthor {
      edges {
        node {
          data {
            name
            stamps
            favorite_country
            title
            interests
            image {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 100, quality: 90) {
                    ...GatsbyImageSharpFluid_tracedSVG
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
