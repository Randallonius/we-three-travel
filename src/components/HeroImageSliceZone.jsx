import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { HeroImage } from '../slices'

const Content = styled.div`
  
`

export default class HeroImageSliceZone extends Component {
  render() {
    const { allHeroImageSlices } = this.props
      const slice = allHeroImageSlices.map(s => 
        s.slice_type && s.slice_type === 'hero_image'
        ?
        <HeroImage key={s.id} input={s} />
        :
        null
        )
      return <Content>{slice}</Content>
  }
}

HeroImageSliceZone.propTypes = {
  allHeroImageSlices: PropTypes.array.isRequired,
}
