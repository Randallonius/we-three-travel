import PropTypes from 'prop-types'
import { graphql, StaticQuery, Link } from 'gatsby'
import styled from '@emotion/styled'
import { Layout } from '../../components'
import React, { Component } from 'react'
import kebabCase from 'lodash/kebabCase'



const StyledLink = styled(Link)`
padding: 0 15px;
height: 32px;
line-height: 32px;
letter-spacing: 1px;
margin: 0 7px 5px 0;
border: 1px solid black;
display: inline-block;
  text-transform: uppercase;
  color: ${props => props.theme.colors.black};
  font-style: normal;
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    font-size: 1.777rem;
  }
`

const AsideTags = () => (
  <StaticQuery
    query={tagQuery}
    render={({allPrismicTag}) => (
      allPrismicTag.edges.map(({node}) => (
        <StyledLink key={node.data.name} to={`/tags/${kebabCase(node.data.name)}`}>{node.data.name}</StyledLink>
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
