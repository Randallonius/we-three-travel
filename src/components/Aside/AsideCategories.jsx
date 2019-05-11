import { graphql, StaticQuery, Link } from 'gatsby'
import React, { Component } from 'react'
import kebabCase from 'lodash/kebabCase'
import StyledLink from '../../styles/styledLink'

const AsideCategories = () => (
  <StaticQuery
    query={categoryQuery}
    render={({allPrismicCategory}) => (
      allPrismicCategory.edges.map(({node}) => (
        <StyledLink key={node.data.name} to={`/categories/${kebabCase(node.data.name)}`}>{node.data.name}</StyledLink>
      ))
    )}
  />
)

export default AsideCategories

export const categoryQuery = graphql`
  query CategoryListing {
    allPrismicCategory {
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
