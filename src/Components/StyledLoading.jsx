import React from 'react'
import styled from 'styled-components'
import GlobalStyle from '../theme/GlobalStyles'

export default function StyledLoading() {
  return (
    <>
      <GlobalStyle/>
      <Container/>
    </>
  )
}

const Container = styled.div`
  
  animation: is-rotating 2s infinite;
  width: 50px;
  height: 50px;
  border: 6px solid var(--secondaryColor);
  border-top-color: var(--highlightColor);
  border-radius: 50%;
  
  @keyframes is-rotating { 
      to {
          transform: rotate(1turn);
      }
  }
`
