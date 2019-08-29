import React, { Component } from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import SlideContainerButton from './Slide/SlideContainerButton'
import SlideContainer from './Slide/SlideContainer'

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
  margin-bottom: 20px;
  @media (min-width: ${props => props.theme.breakpoints.s}) {
    margin-bottom: 0;
  }
  a {
    font-size: 1.5rem;
    @media (min-width: ${props => props.theme.breakpoints.s}) {
      font-size: 	2.25rem;
    }
  }
`

const HeaderRight = styled.div`
  display: flex;
  a {
    font-size: 1rem;
    padding: 0 0.625rem;

    @media (min-width: ${props => props.theme.breakpoints.s}) {
      font-size: 	1.5rem;
    }
  }

  a::after {
    content: '';
    display: block;
    width: 0;
    height: 2px;
    background: ${props => props.theme.colors.greyDark};
    transition: width .25s;
  }

  a:hover::after {
    width: 100%;
  }
`

class Header extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      visible: false
    }
    this.handleClick = this.handleClick.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this)
  }

  handleClick(e) {
    this.toggleMenu()
    e.stopPropagation()
  }

  toggleMenu() {
    this.setState({
      visible: !this.state.visible,
    })
  }

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
          <SlideContainerButton handleClick={this.handleClick} />
          <SlideContainer handleClick={this.handleClick}
            menuVisibility={this.state.visible} />
        </HeaderRight>
      </StyledHeader>
    )
  }
}

export default Header
