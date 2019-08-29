import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { Excerpt } from '../slices'

const ExcerptContent = styled.div`
  
`

export default class ExcerptSliceZone extends Component {
  render() {
    const { excerptSlices } = this.props
      const slice = excerptSlices.map(s => 
        s.slice_type && s.slice_type === 'text'
        ?
        <Excerpt key={s.id} input={s} />
        :
        null
        )
      const firstSlice = slice.find(s => s)
      return <ExcerptContent>{firstSlice}</ExcerptContent>
  }
}

ExcerptSliceZone.propTypes = {
  excerptSlices: PropTypes.array.isRequired,
}
