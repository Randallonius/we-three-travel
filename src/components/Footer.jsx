import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

const StyledFooter = styled.footer`
  margin: 6rem auto 0 auto;
  color: ${props => props.theme.colors.grey};
`

const FooterContainer = styled.div`
  display: flex;
  padding: 3% 4%;
  background: white;
  justify-content: space-evenly;

  div {
    height: 200px;
    width: 200px;
  }
`

const FooterTitle = styled.h4`
  font-size: 14px;
`

const FooterContainerInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`

class Footer extends Component {
  render() {
    const { children } = this.props
    return <StyledFooter>
      <FooterContainer>
        <FooterContainerInner>
          <FooterTitle>FAQS</FooterTitle>
          <Link to="/about" aria-label="To About Page">Who are we and what are we doing?</Link>
          <Link to="/about" aria-label="To About Page">Contact Us</Link>
        </FooterContainerInner>
        <FooterContainerInner>
          <FooterTitle>Follow Us</FooterTitle>
          <p>Email Us</p>
        </FooterContainerInner>
      </FooterContainer>
    </StyledFooter>
  }
}

export default Footer

Footer.propTypes = {
  children: PropTypes.node.isRequired,
}
