import PropTypes from 'prop-types'
import { graphql, StaticQuery, Link } from 'gatsby'
import React, { Component } from 'react'
import kebabCase from 'lodash/kebabCase'
import StyledTagLink from '../../styles/styledTagLink'

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
