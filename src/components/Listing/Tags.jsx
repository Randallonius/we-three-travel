import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import kebabCase from 'lodash/kebabCase'
import styled from '@emotion/styled'

const Tag = styled(Link)`
  padding: 0 15px;
  height: 32px;
  line-height: 32px;
  letter-spacing: 1px;
  margin: 0 7px 5px 0;
  border: 1px solid black;
  display: inline-block;
`

export default class Tags extends Component {
  render() {
    const { tags } = this.props
    return (
      <>
        {tags.map((tag) => (
          <React.Fragment key={tag}>
            <Tag to={`/tags/${kebabCase(tag)}`}>{tag}</Tag>
          </React.Fragment>
        ))}
      </>
    )
  }
}

Tags.propTypes = {
  tags: PropTypes.array.isRequired,
}
