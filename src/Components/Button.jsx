import React, { useState } from 'react'
import styled from 'styled-components'
import GlobalStyle from '../theme/GlobalStyles'

export default function Button({ text, onclick }) {
  
  if (!text) {text = 'vazio'}
  const [loading, setLoading] = useState(false)

  return (
    <>
    <GlobalStyle />
    <Container onClick={onclick}>
      <h1>{text}</h1>
    </Container>
    </>
  )
}

const Container = styled.div`
  background-color: var(--primaryColor);
  width: 109px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 9px;
  cursor: pointer;
  margin: 15px;
  transition: .5s;
  :hover{
    transform: scale(1.05);
    background-color: rgb(248, 219, 209);
  }
  h1{
    color: var(--secondaryColor);
    font-family: var(--primaryFont);
    font-size: 18px;
    font-weight: 400;
  }
`
