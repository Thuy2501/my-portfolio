import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import LogoComponent from '../subComponents/LogoComponent'
import SocialIcons from '../subComponents/SocialIcons'
import { Hey } from './AllSvgs'
import ClickMe from '../assets/Images/click-me.png'
import Intro from './Intro'
import Mail from '../subComponents/Mail'

const MainContainer = styled.div`
  background: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  position: relative;

  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Karla', sans-serif;
    font-weight: 500;
  }

  @media (max-width: 40em) {
    h2 {
      font-size: 1.2em;
    }
  }

  @media (max-width: 30em) {
    h2 {
      font-size: 1em;
    }
  }
`

const Container = styled.div`
  padding: 2rem;

  @media (max-width: 60em) {
    svg {
      & > * {
        fill: ${(props) => props.theme.text};
      }
    }

    span {
      background-color: ${(props) => props.theme.text};
    }
  }

  @media (max-width: 40em) {
    svg {
      & > * {
        fill: ${(props) => props.theme.text};
      }
    }

    span {
      background-color: ${(props) => props.theme.text};
    }
  }
`

const Contact = styled(NavLink)`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 4rem;
  right: calc(4rem + 2vw);
  text-decoration: none;
  z-index: 1;

  @media only Screen and (max-width: 60em) {
    color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  }

  @media only Screen and (max-width: 40em) {
    color: ${(props) => (props.click ? props.theme.body : props.theme.text)};

    h3 {
      font-size: 1.1em;
    }
  }
`

const Project = styled(NavLink)`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 50%;
  right: calc(1rem + 2vw);
  transform: rotate(90deg) translate(-50%, -50%);
  text-decoration: none;
  z-index: 1;

  @media only Screen and (max-width: 60em) {
    color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
    text-shadow: ${(props) =>
      props.click ? 'rgb(196, 110, 84) 0px 0px 4px' : 'null'};
  }

  @media only Screen and (max-width: 40em) {
    color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
    text-shadow: ${(props) =>
      props.click ? 'rgb(196, 110, 84) 0px 0px 4px' : 'null'};
  }
`


const BottomBar = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  width: 100%;

  display: flex;
  justify-content: space-evenly;
`

const About = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  text-decoration: none;
  z-index: 1;

  @media only Screen and (max-width: 60em) {
    color: ${(props) => (props.click ? props.theme.text : props.theme.text)};
  }

  @media only Screen and (max-width: 40em) {
    color: ${(props) => (props.click ? props.theme.text : props.theme.text)};
  }
`

const Skills = styled(NavLink)`
  color: ${(props) => props.theme.text};
  text-decoration: none;
  z-index: 1;
`

const rotate = keyframes`
from{
  transform: rotate(0);
}
to{
  transform: rotate(360deg);
}
`

// const SocialIcons = styled(NavLink)`
//   color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
//   @media only Screen and (max-width: 40em) {
//     color: ${(props) => (props.click ? props.theme.text : props.theme.text)};
//   }
// `

const Center = styled.button`
  position: absolute;
  top: ${(props) => (props.click ? '85%' : '50%')};
  left: ${(props) => (props.click ? '92%' : '50%')};
  transform: translate(-50%, -50%);
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 1s ease;

  ${
    '' /* & > :first-child {
    animation: ${rotate} infinite 2.5s linear;
  } */
  }

  & > :first-child {
    display: ${(props) => (props.click ? 'none' : 'inline-block')};
    padding-left: 13rem;

    img {
      width: 10rem;
      height: auto;
    }
  }
${'' /* 
  @media (max-width: 60em) {
    & > :first-child {
      padding-left: 10rem;
      img {
        width: 10rem;
        height: auto;
      }
    }
  } */}

  @media only screen and (max-width: 50em) {
    top: ${(props) => (props.click ? '87%' : '50%')};
    left: ${(props) => (props.click ? '87%' : '50%')};
    width: ${(props) => (props.click ? '75px' : '175px')};
    height: ${(props) => (props.click ? '75px' : '175px')};
  }

  @media (max-width: 40em) {
    & > :first-child {
      padding-left: 10rem;
      img {
        width: 7rem;
        height: auto;
      }
    }
  }

  @media (max-width: 30em) {
    & > :first-child {
      padding-left: 6.5rem;
      img {
        width: 5rem;
        height: auto;
      }
    }
  }
`

const DarkDiv = styled.div`
  position: absolute;
  top: 0;
  background-color: ${(props) => props.theme.text};
  bottom: 0;
  right: 50%;
  width: ${(props) => (props.click ? '50%' : '0%')};
  height: ${(props) => (props.click ? '100%' : '0%')};
  z-index: 1;
  transition: height 0.5s ease, width 1s ease 0.5s;

  @media only Screen and (max-width: 60em) {
    bottom: 50%;
    background-color: ${(props) => props.theme.text};
    left: 0;
    right: 0;
    height: ${(props) => (props.click ? '50%' : '0%')};
    width: ${(props) => (props.click ? '100%' : '0%')};
    z-index: 1;
    transition: width 0.5s ease, height 1s ease 0.5s;
  }

  @media only Screen and (max-width: 40em) {
    bottom: 50%;
    background-color: ${(props) => props.theme.text};
    left: 0;
    right: 0;
    height: ${(props) => (props.click ? '50%' : '0%')};
    width: ${(props) => (props.click ? '100%' : '0%')};
    z-index: 1;
    transition: width 0.5s ease, height 1s ease 0.5s;
  }
`

const Cloud = styled.div`
  ${'' /* position: absolute;
  top: 0;
  left: 2rem; */}
  img {
    width: 50px;
    height: 50px;
  }
`

const Text2 = styled.h2`
  display: inline-block;

  &:hover {
    letter-spacing: 25px;
    transform: scale(1.3);
    transition: 0.5s;
  }
`

const Main = () => {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)
  return (
    <MainContainer>
      <DarkDiv click={click} />
      <Container>
        <LogoComponent theme={click ? 'dark' : 'light'} />

        <SocialIcons theme={click ? 'dark' : 'light'} />

        <Center click={click} onClick={() => handleClick()}>
          <Cloud>
            <img src={ClickMe} alt="" />
          </Cloud>
          <Hey
            onClick={() => handleClick()}
            width={click ? 120 : 200}
            height={click ? 120 : 200}
            fill="currentColor"
          />
          {/* <span>Click here</span> */}
        </Center>

        <Contact
          target="_blank"
          to={{ pathname: 'mailto:2501ngocthuy@gmail.com' }}
          click={click}
        >
          <motion.div
            initial={{
              y: -200,
              transition: { type: 'spring', duration: 1.5, delay: 1 }
            }}
            animate={{
              y: 0,
              transition: { type: 'spring', duration: 1.5, delay: 1 }
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {/* Say hi... */}
            <Mail theme={click ? 'dark' : 'light'} />
          </motion.div>
        </Contact>
        <Project to="/project" click={click}>
          <motion.h2
            initial={{
              y: -200,
              transition: { type: 'spring', duration: 1.5, delay: 1 }
            }}
            animate={{
              y: 0,
              transition: { type: 'spring', duration: 1.5, delay: 1 }
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Project
          </motion.h2>
        </Project>

        <BottomBar>
          <About to="/about" click={click}>
            <motion.h2
              initial={{
                y: 200,
                transition: { type: 'spring', duration: 1.5, delay: 1 }
              }}
              animate={{
                y: 0,
                transition: { type: 'spring', duration: 1.5, delay: 1 }
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              About
            </motion.h2>
          </About>
          <Skills to="/skills">
            <motion.h2
              initial={{
                y: 200,
                transition: { type: 'spring', duration: 1.5, delay: 1 }
              }}
              animate={{
                y: 0,
                transition: { type: 'spring', duration: 1.5, delay: 1 }
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              My Skills
            </motion.h2>
          </Skills>
        </BottomBar>
      </Container>
      {click ? <Intro click={click} /> : null}
    </MainContainer>
  )
}

export default Main
