import React, { Component } from 'react'
import styled from '@emotion/styled'
import { FiX } from 'react-icons/fi';
import SlideMapContainer from './SlideMapContainer'
import Title from '../Title'

const MenuSlide = styled.div`
  width: 40vw;
  height: 200vh;
  background-color: #f5f5f5;
  border-left: 1px solid ${props => props.theme.colors.primary};
  padding: 15px;
  position: fixed;
  top: 0;
  right: 0;
  transition: transform .3s
              cubic-bezier(0, .52, 0, 1);
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
  z-index: 1000;

  &.hide {
    transform: translate3d(40vw, 0, 0);
  }

  &.show {
    transform: translate3d(0vw, 0, 0);
    // overflow: hidden;
  }
`

const CloseButton = styled.div`
  font-size: 1.3em;
  width: 30px;
  height: 30px;
  border: 1px solid ${props => props.theme.colors.greyDark};
  text-align: center;
  cursor: pointer;
  transition: all 0.25s ease-in-out;

  &:hover {
    color: white;
    background-color: ${props => props.theme.colors.greyDark};
  }
`

const SubTitle = styled.h2`
  font-weight: 400;
  text-align: center;
`

const CountryList = styled.ul`
  text-align: center;
  list-style: none;
`

const SLIDE_OPEN_CLASS = "body--slide-open";

class SlideContainer extends Component {

  render() {
    let visibility = 'hide'
    if (this.props.menuVisibility) {
      visibility = 'show'
      document.body.classList.add(SLIDE_OPEN_CLASS);
    } else {
      document.body.classList.remove(SLIDE_OPEN_CLASS);
    }
    return (
      <MenuSlide className={visibility}>
        <div>
          <CloseButton onClick={this.props.handleClick}><FiX /></CloseButton>
          <Title>Where Have We Been??</Title>
          <SlideMapContainer />
          <Title>Where Are We Right Now??</Title>
          <SubTitle>Grand Rapids, MI</SubTitle>
          <Title>Where Are We Off To Next??</Title>
          <SubTitle>September</SubTitle>
          <CountryList>
            <li>Ireland</li>
            <li>England</li>
            <li>Sweden</li>
            <li>Finland</li>
          </CountryList>
        </div>
      </MenuSlide>
    );
  }
}

export default SlideContainer