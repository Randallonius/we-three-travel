import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { HeroImage } from '../slices'

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
      return <div>{slice}</div>
  }
}

HeroImageSliceZone.propTypes = {
  allHeroImageSlices: PropTypes.array.isRequired,
}
