import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import Categories from './Categories'
import HeroImageSliceZone from '../HeroImageSliceZone'
import ExcerptSliceZone from '../ExcerptSliceZone';

const Item = styled.div`
  padding-bottom: 15px;

  @media screen and (max-width: ${props => props.theme.breakpoints.xs}) {
    width: 100%;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.s}) {
    box-sizing: border-box;
    width: calc(100% / 2);
    float: left;
    padding-left: 15px;
  }
  @media screen and (min-width: ${props => props.theme.breakpoints.m}) {
    
    padding-left: 40px;
    padding-bottom: 40px;
  }
  @media screen and (min-width: ${props => props.theme.breakpoints.l}) {
    width: calc(100% / 3);
    padding-left: 40px;
    padding-bottom: 40px;
  }
`

const ListingHeroImage = styled.div`

`

const ListingText = styled.div`
  background-color: ${props => props.theme.colors.white};
`

const ListingTextInner = styled.div`
text-align: center;
padding: 38px 40px 20px 40px;
@media (min-width: ${props => props.theme.breakpoints.s}) {
  padding: 38px 40px 20px 40px;
}
`

const ListingTitle = styled.h4`
  margin-bottom: 5px;
`

const ListingInfo = styled.div`
  font-family: 'Source Sans Pro', -apple-system, 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial',
    sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  color: ${props => props.theme.colors.grey};
  margin-bottom: 20px;
  a {
    color: ${props => props.theme.colors.grey};
    font-style: normal;
    font-weight: normal;
  }
`

const ListingCategory = styled.span`
  padding-left: 4px;
`

const Excerpt = styled.div`
  font-size: 13px;
  line-height: 24px;

`

const ListingAuthor = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
`

const ListingAuthorLeft = styled.div`
  font-size: 12px;
  text-transform: uppercase;
`

const ListingAuthorRight = styled.div`
  font-size: 12px;
  text-transform: uppercase;
`

const StyledLink = styled(Link)`
  font-size: 22px;
  color: ${props => props.theme.colors.black};
  font-style: normal;
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    font-size: 1.777rem;
  }
`

export default class ListItem extends Component {
  render() {
    const { node, categories, author } = this.props
    return (
      <Item>
        <ListingHeroImage>
          <HeroImageSliceZone allHeroImageSlices={node.data.body} />
        </ListingHeroImage>
        <ListingText>
          <ListingTextInner>
            <ListingTitle>
              <StyledLink to={node.uid}>{node.data.title.text}</StyledLink>
            </ListingTitle>
            {categories && <ListingInfo>
              <span>In</span>
              <ListingCategory>
                {categories && <Categories categories={categories} />}
              </ListingCategory>
            </ListingInfo>}
            <Excerpt>
              <ExcerptSliceZone excerptSlices={node.data.body} />
            </Excerpt>
            <ListingAuthor>
              <ListingAuthorLeft>
                By {author}
              </ListingAuthorLeft>
              <ListingAuthorRight>
                {node.data.date}
              </ListingAuthorRight>
            </ListingAuthor>
          </ListingTextInner>
        </ListingText>
      </Item>
    )
  }
}

ListItem.propTypes = {
  node: PropTypes.object.isRequired,
  categories: PropTypes.array.isRequired,
}
