import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import Img from 'gatsby-image'

const HeroImage = styled.div`
  @media (min-width: ${props => props.theme.breakpoints.l}) {

  }
`

const Image = ({ input }) => (
  <HeroImage>
    <Img fluid={input.primary.image.localFile.childImageSharp.fluid} alt={input.primary.image.alt} />
  </HeroImage>
)

export default Image

Image.propTypes = {
  input: PropTypes.object.isRequired,
}