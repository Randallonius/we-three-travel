import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import ListItem from './ListItem'
import Masonry from 'react-masonry-component'

const List = styled.div`
  margin-bottom: 4rem;
  list-style-type: none;
  margin-left: 0;
  @media (max-width: ${props => props.theme.breakpoints.xs}) {
    margin: 0 15px;
  }
  @media screen and (min-width: ${props => props.theme.breakpoints.m})  {
      padding: 40px 0 10px;
  }

`

export default class Listing extends Component {
  render() {
    const { posts } = this.props
    return (
      <List>
        <Masonry>
        {posts.map(post => {
          let categories = false
          let author = false
          if (post.node.data.categories[0].category) {
            categories = post.node.data.categories.map(c => c.category.document[0].data.name)
          }
          if (post.node.data.author_group[0].author) {
            author = post.node.data.author_group.map(a => a.author.document[0].data.name)
          }
          return <ListItem key={post.node.uid} node={post.node} categories={categories} author={author} location={location}/>
        })}
        </Masonry>
      </List>
    )
  }
}

Listing.propTypes = {
  posts: PropTypes.array.isRequired,
  location: PropTypes.object.isRequired,
}
