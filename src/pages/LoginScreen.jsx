import React from 'react'
import styled from 'styled-components'
import GlobalStyle from '../theme/GlobalStyles'
import logo from '../assets/logo.svg'
import Button from '../Components/Button'

export default function LoginScreen() {
  return (
    <>
      <GlobalStyle/>
      <Container>
        <Image>
          <img src={logo} alt='logo'/>
        </Image>
        <input 
          type={'text'} 
          placeholder={'Digite seu nome'}
        />
        <Button/>
      </Container>
    </>
  )
}

const Container = styled.div `
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  input{
    height: 54px;
    width: 261px;
    left: 57px;
    top: 258px;
    border-radius: 4px;
  }
`
const Image = styled.div`
  margin-top: 72px;
  margin-bottom: 94px;
  width: 130px;
  height: 92px;
`
