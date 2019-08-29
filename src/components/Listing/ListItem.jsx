import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import Categories from './Categories'
import HeroImageSliceZone from '../HeroImageSliceZone'
import ExcerptSliceZone from '../ExcerptSliceZone';

const Item = styled.div`
  padding-bottom: 15px;
  width: 100%;
  @media screen and (min-width: ${props => props.theme.breakpoints.s}) {
    padding-bottom: 20px;
  }

  &.masonry {
    @media screen and (max-width: ${props => props.theme.breakpoints.xs}) {
      width: 100%;
    }

    @media screen and (min-width: ${props => props.theme.breakpoints.s}) {
      box-sizing: border-box;
      width: calc(100% / 2);
      float: left;
      padding: 15px;
    }
    @media screen and (min-width: ${props => props.theme.breakpoints.m}) {
      padding: 0 20px 40px;
    }
    @media screen and (min-width: ${props => props.theme.breakpoints.l}) {
      width: calc(100% / 3);
      padding-left: 25px;
      padding-right: 25px;
      padding-bottom: 50px;
    }
  }
`

const ListingImageContainer = styled.div`
  position: relative;
  text-align: center;
  overflow: hidden;

  * {
    transition: all .25s ease-in-out;
  }

  &:hover {
    .gatsby-image-wrapper {
      opacity: 0.9;
      filter: grayscale(100%);
    }
    .image-text {
      transform: translate(-50%, -50%) scale(1);
      transition: transform 300ms 100ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
  }
`

const ListingImageText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  background: ${props => props.theme.colors.white};
  border: 1px solid ${props => props.theme.colors.primary}; 
  transform: translate(-50%, -50%) scale(0);
  transition: transform 300ms 0ms cubic-bezier(0.6, -0.28, 0.735, 0.045);
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    padding: 15px;
    font-style: initial;
  }
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
  color: ${props => props.theme.colors.grey};
  font-size: 12px;
  font-weight: 700;
  margin-bottom: 20px;
  text-transform: uppercase;
  a {
    color: ${props => props.theme.colors.grey};
    font-style: normal;
    transition: all 0.25s ease-in-out;
    &:hover,
    &:focus {
      color: ${props => props.theme.colors.primary};
      text-decoration: none;
    }
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
  font-size: 12px;
  text-transform: uppercase;
`

const StyledLink = styled(Link)`
  font-size: 22px;
  color: ${props => props.theme.colors.black};
  font-style: normal;
  transition: all 0.25s ease-in-out;
  &:hover,
  &:focus {
    color: ${props => props.theme.colors.grey};
    text-decoration: none;
  }
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    font-size: 1.777rem;
  }
`

export default class ListItem extends Component {
  render() {
    const { node, categories, author, location } = this.props
    const listSize = location.pathname === '/' ? 'masonry' : 'full'
    return (
      <Item className={listSize}>
        <ListingImageContainer>
          <Link to={node.uid}>
            <HeroImageSliceZone allHeroImageSlices={node.data.body} />
            <ListingImageText className="image-text">
              <span>read more</span>
            </ListingImageText>
          </Link>
        </ListingImageContainer>
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
              <div>
                By {author}
              </div>
              <div>
                {node.data.date}
              </div>
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
  location: PropTypes.object.isRequired,
}