import React, { Component } from 'react'
import styled from '@emotion/styled'
import { FiMapPin } from 'react-icons/fi';

const SlideButton = styled.button`

`
 
class SlideContainerButton extends Component {
  render() {
    return (
      <SlideButton id="roundButton"
      onMouseUp={this.props.handleClick}><FiMapPin /></SlideButton>
    );
  }
}
 
export default SlideContainerButton;