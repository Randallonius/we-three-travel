import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { theme } from '../styles'

const StyledTagLink = styled(Link)`
padding: 0 15px;
height: 32px;
line-height: 32px;
letter-spacing: 1px;
margin: 0 7px 5px 0;
border: 1px solid black;
display: inline-block;
text-transform: uppercase;
color: ${props => props.theme.colors.black};
font-style: normal;
transition: all 0.25s ease-in-out;
  &:hover,
  &:focus {
    background-color: ${theme.colors.greyDark};
    color: ${theme.colors.greyLight};
    text-decoration: none;
  }
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    font-size: 1.777rem;
  }
`

export default StyledTagLink