import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import AsideListing from './AsideListing';
import AsideCategories from './AsideCategories';
import AsideTags from './AsideTags'

const AsideWrapper = styled.section`
  display: none;
  @media (min-width: ${props => props.theme.breakpoints.m}) {
    display: block;
    width: 25%;
  }
`

const AsideContainer = styled.div`
  margin-bottom: 1.45rem;
`

const AsideTitle = styled.div`
  background-color: ${props => props.theme.colors.black};

  h4 {
    color: ${props => props.theme.colors.white};
    padding: 1rem;
  }
`

export default class AsideLayout extends Component {
  render() {
    const { posts } = this.props
    return (
      <AsideWrapper>
      <AsideContainer>
        <AsideTitle>
          <h4>Recent Posts</h4>
        </AsideTitle>
        <AsideListing posts={posts}/>
      </AsideContainer>
      <AsideContainer>
        <AsideTitle>
          <h4>Categories</h4>
        </AsideTitle>
        <AsideCategories />
      </AsideContainer> 
      <AsideContainer>
        <AsideTitle>
          <h4>Tags</h4>
        </AsideTitle>
        <AsideTags />
      </AsideContainer>  
    </AsideWrapper>
    )
  }
}

AsideLayout.propTypes = {
  posts: PropTypes.array.isRequired,
}