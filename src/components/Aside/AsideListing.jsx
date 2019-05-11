import React, { Component } from 'react'
import PropTypes from 'prop-types'
import StyledLink from '../../styles/styledLink'

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
