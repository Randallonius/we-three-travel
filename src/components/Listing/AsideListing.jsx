import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import ListItem from './ListItem'
import { Link } from 'gatsby'

const List = styled.div`
`

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

export default class AsideListing extends Component {
  render() {
    const { posts } = this.props
    return (
      <List>
        {posts.map(post => {
          return <StyledLink key={post.node.uid} to={post.node.uid}>{post.node.data.title.text}</StyledLink>
        })}
      </List>
    )
  }
}

AsideListing.propTypes = {
  posts: PropTypes.array.isRequired,
}
