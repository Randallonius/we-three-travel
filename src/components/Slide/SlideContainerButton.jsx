import React, { Component } from 'react'
import styled from '@emotion/styled'
import { FiMapPin } from 'react-icons/fi';
import { bounce } from '../../styles/keyframes';

const SlideButton = styled.div`
  cursor: pointer;
  color: ${props => props.theme.colors.greyDark};
  font-size: 1.3em;

  &: hover {
    .test {
      animation: ${bounce};
      animation-duration: 2s;
      animation-timing-function: ease;
      animation-delay: 0s;
      animation-iteration-count: infinite;
      animation-direction: normal;
      animation-fill-mode: forwards;
      animation-play-state: running;
    }
  }
`
 
class SlideContainerButton extends Component {
  render() {
    return (
      <SlideButton id="roundButton"
      onMouseUp={this.props.handleClick}><FiMapPin className="test"/></SlideButton>
    );
  }
}
 
export default SlideContainerButton;