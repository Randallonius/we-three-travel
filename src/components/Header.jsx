import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from '@emotion/styled'

const StyledHeader = styled.nav`
  padding: 1.5rem 3rem;
  background-color: ${props => props.theme.colors.white};

  @media (min-width: ${props => props.theme.breakpoints.m}) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  a {
    color: ${props => (props.invert ? props.theme.colors.greyLight : props.theme.colors.greyDark)};
    font-weight: 400;
    font-style: normal;
    font-family: 'Source Sans Pro', -apple-system, 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial',
      sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  }
`

const HeaderLeft = styled.div`
  a {
    @media (min-width: ${props => props.theme.breakpoints.m}) {
      font-size: 	2.25rem;
    }
  }
`

const HeaderRight = styled.div`
  a {
    padding: 0 0.625rem
  }
`

class Header extends Component {
  render() {
    const { invert } = this.props
    return (
      <StyledHeader invert={invert}>
        <HeaderLeft>
          <Link to="/" aria-label="Back to Home">
            We Three Travel
          </Link>
        </HeaderLeft>
        <HeaderRight>
          <Link to="/" aria-label="Back to Home">
            About
          </Link>
          <Link to="/" aria-label="Back to Home">
            Contact
          </Link>
        </HeaderRight>
      </StyledHeader>
    )
  }
}

export default Header

Header.propTypes = {
  invert: PropTypes.bool,
}

Header.defaultProps = {
  invert: false,
}
