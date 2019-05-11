import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { theme } from '../styles'

const StyledLink = styled(Link)`
  display: block;
  font-size: 14px;
  margin-bottom: .5rem;
  text-transform: uppercase;
  color: ${props => props.theme.colors.black};
  font-style: normal;
  transition: all 0.25s ease-in-out;
  &:hover,
  &:focus {
    color: ${theme.colors.grey};
    text-decoration: none;
  }
`

export default StyledLink