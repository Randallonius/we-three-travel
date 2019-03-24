import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import ListItem from './ListItem'

const List = styled.div`
  margin-top: 4rem;
  margin-bottom: 4rem;
  list-style-type: none;
  margin-left: 0;
  display: flex;
  justify-content: space-between;
`

export default class Listing extends Component {
  render() {
    const { posts } = this.props
    return (
      <List>
        {posts.map(post => {
          let categories = false
          let author = false
          if (post.node.data.categories[0].category) {
            categories = post.node.data.categories.map(c => c.category.document[0].data.name)
          }
          if (post.node.data.author_group[0].author) {
            author = post.node.data.author_group.map(a => a.author.document[0].data.name)
          }
          return <ListItem key={post.node.uid} node={post.node} categories={categories} author={author} />
        })}
      </List>
    )
  }
}

Listing.propTypes = {
  posts: PropTypes.array.isRequired,
}
