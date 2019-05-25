import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Img from "gatsby-image"
import website from '../../../config/website'
import styled from '@emotion/styled'

const ItemContainer = styled.div`
`
const Item = styled.a`
`

export default class InstagramItem extends Component {
  render() {
    const { node } = this.props
    return ( 
      <ItemContainer>
        <Item href={`http://www.instagram.com/${website.instagram}/p/${node.id}`}>
          <Img fixed={node.localFile.childImageSharp.fixed} />
        </Item>
      </ItemContainer>
    )
  }
}

InstagramItem.propTypes = {
  node: PropTypes.object.isRequired,
}