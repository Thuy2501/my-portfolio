import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { darkTheme } from '../components/Themes'

const Logo = styled.h1`
  display: inline-block;
  color: ${(props) =>
    props.color === 'dark' ? darkTheme.text : darkTheme.body};
  font-family: 'Dancing Script', cursive;

  position: fixed;
  left: 2rem;
  top: 2rem;
  z-index: 3;

  @media (max-width: 40em){
    font-size: 1.7em;
  }
`

const LogoComponent = (props) => {
  return <NavLink to="/"><Logo color={props.theme}>Dang Thuy</Logo></NavLink>
}

export default LogoComponent
