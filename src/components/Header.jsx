import React, { Component } from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'

const StyledHeader = styled.nav`
  background-color: ${props => props.theme.colors.white};
  display: flex;
  padding: 1.5rem 3rem;
  flex-direction: column;
  align-items: center;

  @media (min-width: ${props => props.theme.breakpoints.s}) {
    flex-direction: row;
    justify-content: space-between;
  }

  a {
    color: ${props => props.theme.colors.greyDark};
    font-weight: 400;
    font-style: normal;
  }
`

const HeaderLeft = styled.div`
  a {
    font-size: 1.5rem;
    @media (min-width: ${props => props.theme.breakpoints.s}) {
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
    return (
      <StyledHeader>
        <HeaderLeft>
          <Link to="/" aria-label="Back to Home">
            We Three Travel
          </Link>
        </HeaderLeft>
        <HeaderRight>
          <Link to="/" aria-label="Back to Home">
            Blog
          </Link>
          <Link to="/about" aria-label="Back to Home">
            About
          </Link>
        </HeaderRight>
      </StyledHeader>
    )
  }
}

export default Header
