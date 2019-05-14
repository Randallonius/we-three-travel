import PropTypes from 'prop-types'
import { graphql, StaticQuery, Link } from 'gatsby'
import styled from '@emotion/styled'
import { Layout } from '../../components'
import React, { Component } from 'react'
import kebabCase from 'lodash/kebabCase'



const StyledLink = styled(Link)`
  display: block;
  font-size: 14px;
  margin-bottom: .5rem;
  text-transform: uppercase;
  color: ${props => props.theme.colors.black};
  font-style: normal;
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    font-size: 1.777rem;
  }
`

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
