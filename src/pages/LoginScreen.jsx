import React, { useState } from 'react'
import styled from 'styled-components'
import GlobalStyle from '../theme/GlobalStyles'
import logo from '../assets/logo.svg'
import Button from '../Components/Button'

export default function LoginScreen() {

  const [username, setUsername] = useState('')

  function enterApp(){
    console.log(username)
  }

  return (
    <>
      <GlobalStyle/>
      <Container>
        <Image>
          <img 
            src={logo} 
            alt='logo'
          />
        </Image>
        <input 
          type={'text'} 
          placeholder={'Digite seu nome'}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Button 
        text={'Entrar'}
        onclick={enterApp}
        />
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
    font-size: 18px;
    color: #aeaeae;
    border: 1px solid #D7D7D7;
    text-align: center;
    :focus{
      outline: 0;
    }
    ::placeholder{
    color: #aeaeae;
    }
  }
`
const Image = styled.div`
  margin-top: 72px;
  margin-bottom: 94px;
  width: 130px;
  height: 92px;
`
