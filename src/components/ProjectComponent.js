import { motion } from 'framer-motion'
import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Github } from './AllSvgs'

const Box = styled(motion.div)`
  width: calc(10rem + 15vw);
  text-decoration: none;
  height: 20rem;
  padding: 1rem;
  color: ${(props) => props.theme.body};
  border: 2px solid ${(props) => props.theme.body};
  backdrop-filter: blur(6px);
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;

  display: flex;
  flex-direction: column;
  z-index: 5;

  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
    transition: all 0.3s ease;
  }

  @media (max-width: 50em) {
    width: calc(60vw);
  }

  @media (max-width: 30em) {
    height: 18rem;
  }

  @media (max-width: 25em) {
    height: 14rem;
    padding: 0.8rem;
  }
`

const Image = styled.div`
  background-image: ${(props) => `url(${props.img})`};
  width: 100%;
  height: 60%;
  background-size: cover;
  border: 1px solid transparent;
  background-position: center center;

  ${Box}:hover & {
    border: 1px solid ${(props) => props.theme.body};
  }

  @media (max-width: 25em) {
    height: 70%;
  }
`

const Title = styled.h3`
  color: inherit;
  padding: 0.5rem 0;
  padding-top: 1rem;
  font-family: 'Karla', sans-serif;
  font-weight: 700;
  border-bottom: 1px solid ${(props) => props.theme.body};

  ${Box}:hover & {
    border-bottom: 1px solid ${(props) => props.theme.body};
  }

  @media (max-width: 40em) {
    font-size: calc(0.8em + 1vw);
  }

  @media (max-width: 25em) {
    font-size: calc(0.6em + 1vw);
  }
`

const HashTags = styled.div`
  padding: 0.5rem 0;

  @media (max-width: 25em) {
    font-size: calc(0.5em + 1vw);
  }
`

const Tag = styled.span`
  padding-right: 0.5rem;
`

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
`

const Git = styled(NavLink)`
  color: inherit;
  text-decoration: none;
  & > * {
    fill: ${(props) => props.theme.body};
  }
`

const Link = styled(NavLink)`
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  text-decoration: none;
  padding: 0.5rem calc(1rem + 2vw);
  border-radius: 0 0 0 50px;
  font-size: calc(0.8em + 0.5vw);
`

const Container = styled(motion.div)`
  z-index: 5;
`

const Item = {
  hidden: {
    scale: 0
  },
  show: {
    scale: 1,
    transition: {
      type: 'spring',
      duration: 0.5
    }
  }
}

const ProjectComponent = (props) => {
  const { name, tags, imgSrc, demo, github } = props.project

  return (
    <Container variants={Item}>
      <Box>
        <Image img={imgSrc} />
        <Title>{name}</Title>
        <HashTags>
          {tags.map((t, id) => {
            return <Tag key={id}>#{t}</Tag>
          })}
        </HashTags>
        <Footer>
          <Git to={{ pathname: `${github}` }} target="_blank">
            <Github width={30} height={30} />
          </Git>
          <Link to={{ pathname: `${demo}` }} target="_blank">
            Demo
          </Link>
        </Footer>
      </Box>
    </Container>
  )
}

export default ProjectComponent
