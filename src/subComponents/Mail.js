import React from 'react'
import styled from 'styled-components'
import { mailTheme } from '../components/Themes'

const LetterImage = styled.div`
  position: absolute;
  font-size: 0.45em;
  color: #262424;
  width: 5rem;
  height: 5rem;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  cursor: pointer;

  @media (max-width: 60em) {
    width: 4rem;
    height: 4.8rem;
    font-size: 0.36em;
  }

  @media (max-width: 40em) {
    width: 3rem;
    height: 6rem;
    font-size: 0.27em;
  }
`

const AnimatedMail = styled.div`
  position: absolute;
  height: 3.75rem;
  width: 5rem;
  -webkit-transition: 0.4s;
  -moz-transition: 0.4s;
  transition: 0.4s;

  ${LetterImage}:hover & {
    transform: translateY(1.25rem);
    -webkit-transform: translateY(1.25rem);
    -moz-transform: translateY(1.25rem);
  }

  @media (max-width: 60em) {
    width: 4rem;
    height: 3rem;

    ${LetterImage}:hover & {
      transform: translateY(1rem);
      -webkit-transform: translateY(1rem);
      -moz-transform: translateY(1rem);
    }
  }

  @media (max-width: 40em) {
    width: 3rem;
    height: 2.25rem;

    ${LetterImage}:hover & {
      transform: translateY(0.75rem);
      -webkit-transform: translateY(0.75rem);
      -moz-transform: translateY(0.75rem);
    }
  }
` 

const Body = styled.div`
  position: absolute;
  bottom: 0;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 0 2.5rem 5rem;
  border-color: transparent transparent
    ${(props) =>
      props.color === 'dark' ? mailTheme.color11 : mailTheme.color1}
    transparent;
  z-index: 2;
`

const RightFold = styled.div`
  position: absolute;
  bottom: 0;
  width: 2.5rem;
  height: 0;
  border-style: solid;
  border-width: 1.25rem 2.5rem 1.25rem 0;
  border-color: transparent ${mailTheme.color1} transparent transparent;
  z-index: 2;
  border-radius: 6px;

  @media (max-width: 60em) {
    width: 2rem;
    border-width: 1rem 2rem 1rem 0;
  }

  @media (max-width: 40em) {
    width: 1.5rem;
    border-width: 0.75rem 1.5rem 0.75rem 0;
  }
`

const BottomFold = styled.div`
  position: absolute;
  bottom: 0;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 2.5rem 1.2rem 2.5rem;
  border-color: transparent transparent ${mailTheme.color1} transparent;
  z-index: 2;
  border-radius: 6px;

  @media (max-width: 60em) {
    border-width: 0 2rem 0.96rem 2rem;
  }

  @media (max-width: 40em) {
    border-width: 0 1.5rem 0.72rem 1.5rem;
  }
`

const TopFold = styled.div`
  position: absolute;
  top: 1.4rem;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 1.5rem 2.5rem 0 2.5rem;
  -webkit-transform-origin: 50% 0%;
  -webkit-transition: transform 0.4s 0.4s, z-index 0.2s 0.4s;
  -moz-transform-origin: 50% 0%;
  -moz-transition: transform 0.4s 0.4s, z-index 0.2s 0.4s;
  transform-origin: 50% 0%;
  transition: transform 0.4s 0.4s, z-index 0.2s 0.4s;
  border-color: ${(props) =>
      props.color === 'dark' ? mailTheme.color11 : mailTheme.color3}
    transparent transparent transparent;
  z-index: 3;

  ${LetterImage}:hover ${AnimatedMail} & {
    transition: transform 0.4s, z-index 0.2s;
    transform: rotateX(180deg);
    -webkit-transition: transform 0.4s, z-index 0.2s;
    -webkit-transform: rotateX(180deg);
    -moz-transition: transform 0.4s, z-index 0.2s;
    -moz-transform: rotateX(180deg);
    z-index: 0;
  }
  border-radius: 6px;

  @media (max-width: 60em) {
    top: 1.12rem;
    border-width: 1.2rem 2rem 0 2rem;
  }

  @media (max-width: 40em) {
    top: 0.85rem;
    border-width: 0.9rem 1.5rem 0 1.5rem;
  }
`

const BackFold = styled.div`
  position: absolute;
  bottom: 0;
  width: 5rem;
  height: 2.5rem;
  background: ${(props) =>
    props.color === 'dark' ? mailTheme.color11 : mailTheme.color3};
  border-radius: 6px;
  z-index: 0;

  @media (max-width: 60em) {
    width: 4rem;
    height: 2rem;
  }

  @media (max-width: 40em) {
    width: 3rem;
    height: 1.5rem;
  }
`

const LeftFold = styled.div`
  position: absolute;
  bottom: 0;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 1.25rem 0 1.25rem 2.5rem;
  border-color: transparent transparent transparent
    ${(props) =>
      props.color === 'dark' ? mailTheme.color11 : mailTheme.color2};
  border-radius: 6px;
  z-index: 2;

  @media (max-width: 60em) {
    border-width: 1rem 0 1rem 2rem;
  }

  @media (max-width: 40em) {
    border-width: 0.75rem 0 0.75rem 1.5rem;
  }
`

const Letter = styled.div`
  left: 0.5rem;
  bottom: 0px;
  position: absolute;
  width: 4rem;
  height: 1.5rem;
  background: white;
  z-index: 1;
  overflow: hidden;
  -webkit-transition: 0.4s 0.2s;
  -moz-transition: 0.4s 0.2s;
  transition: 0.4s 0.2s;

  ${LetterImage}:hover ${AnimatedMail} & {
    height: 4.5rem;
  }

  @media (max-width: 60em) {
    left: 0.4rem;
    width: 3.2rem;
    height: 1.2rem;

    ${LetterImage}:hover ${AnimatedMail} & {
      height: 3.6rem;
    }
  }

  @media (max-width: 40em) {
    left: 0.3rem;
    width: 2.4rem;
    height: 0.9rem;

    ${LetterImage}:hover ${AnimatedMail} & {
      height: 2.7rem;
    }
  }
`

const LetterBorder = styled.div`
  height: 0.25rem;
  width: 100%;
  background: repeating-linear-gradient(
    -45deg,
    #cb5a5e,
    #cb5a5e 0.4rem,
    transparent 0.4rem,
    transparent 0.9rem
  );

  @media (max-width: 60em) {
    height: 0.2rem;
    background: repeating-linear-gradient(
      -45deg,
      #cb5a5e,
      #cb5a5e 0.192rem,
      transparent 0.192rem,
      transparent 0.432rem
    );
  }

  @media (max-width: 40em) {
    height: 0.15rem;
    background: repeating-linear-gradient(
      -45deg,
      #cb5a5e,
      #cb5a5e 0.24rem,
      transparent 0.24rem,
      transparent 0.54rem
    );
  }
`

const LetterTitle = styled.div`
  margin-top: 0.25rem;
  margin-left: 0.375rem;
  height: 0.45rem;
  width: 40%;
  border-bottom: 1px solid #cccc;

  @media (max-width: 60em) {
    margin-top: 0.2rem;
    margin-left: 0.3rem;
    height: 0.36rem;
  }

  @media (max-width: 40em) {
    margin-top: 0.15rem;
    margin-left: 0.225rem;
    height: 0.27rem;
  }
`

const LetterContext = styled.div`
  margin-top: 0.125rem;
  margin-left: 0.375rem;
  height: 0.25rem;
  width: 77%;
  height: 0.025rem;

  @media (max-width: 60em) {
    margin-top: 0.1rem;
    margin-left: 0.3rem;
    height: 0.2rem;
    height: 0.02rem;
  }

  @media (max-width: 40em) {
    margin-top: 0.075rem;
    margin-left: 0.225rem;
    height: 0.15rem;
    height: 0.015rem;
  }
`

const LetterStamp = styled.div`
  margin-top: 0.75rem;
  margin-left: 3rem;
  border-radius: 100%;
  height: 0.75rem;
  width: 0.75rem;
  background: #cb5a5e;
  opacity: 0.3;

  @media (max-width: 60em) {
    margin-top: 0.6rem;
    margin-left: 2.4rem;
    height: 0.6rem;
    width: 0.6rem;
  }

  @media (max-width: 40em) {
    margin-top: 0.45rem;
    margin-left: 1.8rem;
    height: 0.45rem;
    width: 0.45rem;
  }
`

const Shadow = styled.div`
  position: absolute;
  top: 5rem;
  left: 50%;
  width: 10rem;
  height: 0.75rem;
  transition: 0.4s;
  transform: translateX(-50%);
  -webkit-transition: 0.4s;
  -webkit-transform: translateX(-50%);
  -moz-transition: 0.4s;
  -moz-transform: translateX(-50%);
  border-radius: 100%;
  background: radial-gradient(
    rgba(196, 110, 84, 0.5),
    rgba(196, 110, 84, 0),
    rgba(196, 110, 84, 0)
  );

  ${LetterImage}:hover & {
    width: 6.25rem;
  }

  @media (max-width: 60em) {
    top: 4rem;
    width: 8rem;
    height: 0.6rem;

    ${LetterImage}:hover & {
      width: 5rem;
    }
  }

  @media (max-width: 40em) {
    top: 3rem;
    width: 6rem;
    height: 0.45rem;

    ${LetterImage}:hover & {
      width: 3.75rem;
    }
  }
`

const LetterStampInner = styled.div``

const Mail = (props) => {
  return (
    <LetterImage>
      <AnimatedMail>
        <BackFold />
        <Letter>
          <LetterBorder />
          <LetterTitle>Hello</LetterTitle>
          <LetterContext>I'm always waiting for your letter</LetterContext>
          <LetterStamp>
            <LetterStampInner />
          </LetterStamp>
        </Letter>
        <TopFold />
        <RightFold color={props.theme} />
        <BottomFold color={props.theme} />
        <LeftFold />
      </AnimatedMail>
      <Shadow />
    </LetterImage>
  )
}

export default Mail
