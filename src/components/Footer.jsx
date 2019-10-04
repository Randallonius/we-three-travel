import React, { Component } from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { FiFacebook, FiInstagram } from 'react-icons/fi'
import website from '../../config/website'

const StyledFooter = styled.footer`
  width: 100%;
  margin: 6rem auto 0 auto;
  color: ${props => props.theme.colors.grey};
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
const FooterLinkContainer = styled.div`
  p {
    color: ${props => props.theme.colors.grey};
    font-weight: 700;
    margin-bottom: 10px;
  }
`

const FooterContact = styled.a`
  display: block;
  margin-bottom: 10px;
  font-size: 0.875em;
  font-weight: 700;
  font-style: inherit;
`

const FooterLink = styled(Link)`
  display: block;
  margin-bottom: 10px;
  font-size: 0.875em;
  font-weight: 700;
  font-style: inherit;
`

const SocialLink = styled.a`
  font-size: 18px;
  padding: 2px 7px 4px;
  transition: all 0.25s ease-in-out;
  color: ${props => props.theme.colors.greyHover};
  border: 1px solid ${props => props.theme.colors.greyHover};
  margin: 2px;

  &:hover {
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.greyLight};
    border-color: transparent;
  }
`

class Footer extends Component {
  render() {
    return (
      <StyledFooter>
        <FooterContainer>
          <FooterContainerInner>
            <FooterTitle>FAQS</FooterTitle>
            <FooterLinkContainer>
              <FooterLink to="/about" aria-label="To About Page">Who are we and what are we doing?</FooterLink>
              <FooterContact href={`mailto:${website.email}`}>Contact Us</FooterContact>
            </FooterLinkContainer>
          </FooterContainerInner>
          <FooterContainerInner>
            <FooterTitle>Follow Us</FooterTitle>
            <FooterLinkContainer>
              <p>Want a more social experience?</p>
              <SocialLink href={`http://www.instagram.com/${website.instagram}`}><FiInstagram /></SocialLink>
            </FooterLinkContainer>
          </FooterContainerInner>
        </FooterContainer>
      </StyledFooter>
    )
  }
}

export default Footer
