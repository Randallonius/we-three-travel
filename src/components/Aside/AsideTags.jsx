import { graphql, StaticQuery, Link } from 'gatsby'
import styled from '@emotion/styled'
import React from 'react'
import kebabCase from 'lodash/kebabCase'

const StyledTagLink = styled(Link)`
  font-size: 0.625em;
  padding: 0 15px;
  height: 32px;
  line-height: 32px;
  letter-spacing: 1px;
  margin: 0 7px 5px 0;
  border: 1px solid black;
  display: inline-block;
  text-transform: uppercase;
  font-weight: 700;
  color: ${props => props.theme.colors.black};
  font-style: normal;
  transition: all 0.25s ease-in-out;
    &:hover,
    &:focus {
      background-color: ${props => props.theme.colors.greyDark};
      color: ${props => props.theme.colors.greyLight};
      text-decoration: none;
    }
`

const AsideTags = () => (
  <StaticQuery
    query={tagQuery}
    render={({allPrismicTag}) => (
      allPrismicTag.edges.map(({node}) => (
        <StyledTagLink key={node.data.name} to={`/tags/${kebabCase(node.data.name)}`}>{node.data.name}</StyledTagLink>
      ))
    )}
  />
)

export default AsideTags

export const tagQuery = graphql`
  query TagListing {
    allPrismicTag {
      edges {
        node {
          data {
            name
          }
        }
      }
    }
  }
`
