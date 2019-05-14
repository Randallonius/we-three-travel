import React, { Component } from 'react'
import PropTypes from 'prop-types'
import kebabCase from 'lodash/kebabCase'
import StyledTagLink from '../../styles/styledTagLink'


export default class Tags extends Component {
  render() {
    const { tags } = this.props
    return (
      <>
        {tags.map((tag) => (
          <React.Fragment key={tag}>
            <StyledTagLink to={`/tags/${kebabCase(tag)}`}>{tag}</StyledTagLink>
          </React.Fragment>
        ))}
      </>
    )
  }
}

Tags.propTypes = {
  tags: PropTypes.array.isRequired,
}
