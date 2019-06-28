import React, { Component } from 'react'
import styled from '@emotion/styled'
import { FiX } from 'react-icons/fi';

const MenuSlide = styled.div`
  width: 40vw;
  height: 100vh;
  background-color: #FFE600;
  position: fixed;
  top: 0;
  right: 0;
  transition: transform .3s
              cubic-bezier(0, .52, 0, 1);
  overflow: scroll;
  z-index: 1000;

  &.hide {
    transform: translate3d(40vw, 0, 0);
  }

  &.show {
    transform: translate3d(0vw, 0, 0);
    overflow: hidden;
  }
`
class SlideContainer extends Component {
  render() {
    let visibility = 'hide'
    if (this.props.menuVisibility) {
      visibility = 'show'
      console.log('>>>SHOW')
    }
    return (
      <MenuSlide onMouseUp={this.props.handleClick} 
      className={visibility}>
        <div>
          <div><FiX /></div>
          <ul>
            <li>Lorem</li>
            <li>Ipsum</li>
            <li>Dolor</li>
            <li>Sit</li>
            <li>Bumblebees</li>
            <li>Aenean</li>
            <li>Consectetur</li>
          </ul>
        </div>
      </MenuSlide>
    );
  }
}

export default SlideContainer