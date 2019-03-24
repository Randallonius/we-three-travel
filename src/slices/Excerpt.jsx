import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

const Content = styled.div`
  max-width: ${props => props.theme.maxWidthText};
`

const Excerpt = ({ input }) => {
  const EXCERPT_LENGTH = 140;
  const excerptString = input.primary.text.text.substring(0, EXCERPT_LENGTH) + '...';
  const excerptText = (input.primary.text.text.length > EXCERPT_LENGTH) ? excerptString : input.primary.text.text;
  return (
    <Content dangerouslySetInnerHTML={{ __html: excerptText }} />
  )
}

export default Excerpt

Excerpt.propTypes = {
  input: PropTypes.object.isRequired,
}