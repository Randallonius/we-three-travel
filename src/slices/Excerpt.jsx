import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import truncate from 'lodash/truncate'

const Content = styled.div`
  max-width: ${props => props.theme.maxWidthText};
`

const Excerpt = ({ input }) => {
  const EXCERPT_LENGTH = 140;
  const excerptText = truncate(input.primary.text.text, {
    length: EXCERPT_LENGTH, // maximum 140 characters
    separator: /,?\.* +/ // separate by spaces, including preceding commas and periods
  });
  return (
    <Content dangerouslySetInnerHTML={{ __html: excerptText }} />
  )
}

export default Excerpt

Excerpt.propTypes = {
  input: PropTypes.object.isRequired,
}