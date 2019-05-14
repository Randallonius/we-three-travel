import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { theme } from '../styles'

const StyledFooter = styled.footer`
  margin: 6rem auto 0 auto;
  color: ${theme.colors.grey};
`

const FooterContainer = styled.div`
  display: flex;
  padding: 3% 4%;
  background: white;
  justify-content: space-evenly;
`

const FooterContainerInner = styled.div`
  display: grid;
  grid-template-rows: 30% 70%;
  text-align: center;
  height: 200px;
  width: 200px;
`

const FooterTitle = styled.h4`
  font-size: 14px;
  margin-top: 1.45rem;
`
const FooterLinks = styled.div`
  p {
    color: ${theme.colors.grey};
    font-weight: 700;
    margin-bottom: 10px;
  }
  a {
    display: block;
    margin-bottom: 10px;
    font-size: 0.875em;
    font-weight: 700;
  }
`

class Footer extends Component {
  render() {
    return <StyledFooter>
      <FooterContainer>
        <FooterContainerInner>
          <FooterTitle>FAQS</FooterTitle>
          <FooterLinks>
            <Link to="/about" aria-label="To About Page">Who are we and what are we doing?</Link>
            <Link to="/about" aria-label="To About Page">Contact Us</Link>
          </FooterLinks>
        </FooterContainerInner>
        <FooterContainerInner>
          <FooterTitle>Follow Us</FooterTitle>
          <FooterLinks>
            <p>Want a more social experience?</p>
            <Link to="/about" aria-label="To About Page">Email Us</Link>
          </FooterLinks>
        </FooterContainerInner>
      </FooterContainer>
    </StyledFooter>
  }
}

export default Footer
