
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import InstagramItem from './InstagramItem'

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: ${props => props.theme.breakpoints.xs}) {
    margin: 0 15px;
  }
`

export default class InstagramListing extends Component {
  render() {
    const { instagrams } = this.props
    return (
      <List>
        {instagrams.map(instagram => {
          return <InstagramItem key={instagram.node.id} node={instagram.node}/>
        })}
      </List>
    )
  }
}

InstagramListing.propTypes = {
  instagrams: PropTypes.array.isRequired,
}