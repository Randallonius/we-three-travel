import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

const StyledLink = styled(Link)`
  display: block;
  font-size: 14px;
  margin-bottom: .5rem;
  text-transform: uppercase;
  color: ${props => props.theme.colors.black};
  font-style: normal;
  transition: all 0.25s ease-in-out;
  &:hover,
  &:focus {
    color: ${props => props.theme.colors.grey};
    text-decoration: none;
  }
`

 export default class AsideListing extends Component {
  render() {
    const { posts } = this.props
    return (
      <div>
        {posts.map(post => {
          return <StyledLink key={post.node.uid} to={post.node.uid}>{post.node.data.title.text}</StyledLink>
        })}
      </div>
    )
  }
}

 AsideListing.propTypes = {
  posts: PropTypes.array.isRequired,
}
