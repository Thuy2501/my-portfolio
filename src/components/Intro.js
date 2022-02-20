import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import Me from '../assets/Images/profile-img.png'

const Box = styled(motion.div)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  right: 0px;

  width: 65vw;
  height: 55vh;

  display: flex;

  background: linear-gradient(
      to right,
      ${(props) => props.theme.body} 50%,
      ${(props) => props.theme.text} 50%
    ),
    linear-gradient(
      to right,
      ${(props) => props.theme.body} 50%,
      ${(props) => props.theme.text} 50%
    );
  background-repeat: no-repeat;
  background-size: 100% 2px;
  border-left: 2px solid ${(props) => props.theme.body};
  border-right: 2px solid ${(props) => props.theme.text};
  z-index: 1;

  background-color: ${(props) => props.theme.bodyRgba};
  background-position: center bottom, center top;
  background-attachment: scroll, scroll;
  background-origin: padding-box, padding-box;
  background-clip: border-box, border-box;

  @media (max-width: 60em) {
    width: 50vw;
    background-size: 100% 2px;
    flex-direction: column;
    -moz-box-pack: justify;
    justify-content: space-between;
  }

  @media only Screen and (max-width: 60em) {
    border-style: solid none;
    background-position: 0px 0px, 100% 0px;
    background-repeat: no-repeat;
    background-color: ${(props) => props.theme.bodyRgba};
    background-attachment: scroll;
    background-origin: padding-box;
    background-clip: border-box;
    border-width: 2px medium;
    border-color: ${(props) => props.theme.body} currentcolor
      ${(props) => props.theme.text};
    background-size: 2px 100%;
    background-image: linear-gradient(
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      ),
      linear-gradient(
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      );
    border-image: none 100% / 1 / 0 stretch;
  }

  @media (max-width: 40em) {
    width: 50vw;
    background-size: 100% 2px;
    flex-direction: column;
    -moz-box-pack: justify;
    justify-content: space-between;
  }

  @media only Screen and (max-width: 40em) {
    border-style: solid none;
    background-position: 0px 0px, 100% 0px;
    background-repeat: no-repeat;
    background-color: ${(props) => props.theme.bodyRgba};
    background-attachment: scroll;
    background-origin: padding-box;
    background-clip: border-box;
    border-width: 2px medium;
    border-color: ${(props) => props.theme.body} currentcolor
      ${(props) => props.theme.text};
    background-size: 2px 100%;
    background-image: linear-gradient(
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      ),
      linear-gradient(
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      );
    border-image: none 100% / 1 / 0 stretch;
  }
`

const SubBox = styled.div`
  width: 50%;
  position: relative;
  display: flex;

  .pic {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0%);
    width: 100%;
    height: auto;
  }

  @media only Screen and (max-width: 60em) {
    width: 100%;
    height: 50%;
    position: relative;
    display: flex;

    .pic {
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translate(-50%, 0%);
      width: 90%;
      height: auto;
    }
  }

  @media only Screen and (max-width: 40em) {
    width: 100%;
    height: 50%;
    position: relative;
    display: flex;

    .pic {
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translate(-50%, 0%);
      width: 70%;
      height: auto;
    }
  }

  @media (max-width: 29.75em) {
    .pic {
      width: 112%;
    }
  }
`

const Text = styled.div`
  font-size: calc(1em + 1.5vw);
  color: ${(props) => props.theme.body};
  padding: 2rem;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  & > *:last-child {
    color: ${(props) => `rgba(${props.theme.bodyRgba},0.6)`};
    font-size: calc(0.5rem + 1.5vw);
    font-weight: 300;
  }

  @media (max-width: 60em) {
    font-size: calc(1rem + 1.5vw);
  }

  @media (max-width: 40em) {
    font-size: calc(1rem + 1.5vw);
  }

  @media (max-width: 20em) {
    padding: 1rem;
  }
`

const Intro = () => {
  return (
    <Box
      initial={{ height: 0 }}
      animate={{ height: '55vh' }}
      transition={{ type: 'spring', duration: 2, delay: 1 }}
    >
      <SubBox>
        <Text>
          <h1>Hi,</h1>
          <h3>I'm Dang Thi Ngoc Thuy</h3>
          <h6>I design and Code simple yet beatiful websites</h6>
        </Text>
      </SubBox>
      <SubBox>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <img className="pic" src={Me} alt="Profile pic" />
        </motion.div>
      </SubBox>
    </Box>
  )
}

export default Intro
