import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import img from '../assets/Images/sea2.png'
import LogoComponent from '../subComponents/LogoComponent'
import SocialIcons from '../subComponents/SocialIcons'
import BigTitle from '../subComponents/BigTitle'

import { ProjectData } from '../data/ProjectData'
import ProjectComponent from './ProjectComponent'
import AnchorComponent from '../subComponents/AnchorComponent'
import { motion } from 'framer-motion'
import { nightTheme } from './Themes'

const MianContainer = styled(motion.div)`
  background-image: url(${img});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  width: 100vw;


`

const Container = styled.div`
  background-color: ${(props) => `rgba(${props.theme.bodyRgba},0.2)`};
  width: 100%;
  height: auto;
  position: relative;
  padding-bottom: 5rem;


`

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10rem;


`
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
  grid-gap: calc(1rem + 2vw);

  @media (max-width: 50em) {
    grid-template-columns: repeat(1, minmax(calc(10rem + 15vw), 1fr));
  }
`

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,

    transition: {
      staggerChildren: 0.5,
      duration: 0.5
    }
  }
}


const ProjectPage = (props) => {
  const [ numbers, setNumbers ] = useState(0)
  useEffect(() => {
    let num = (window.innerHeight - 70) / 30
    setNumbers(parseInt(num))
  }, [])
  return (
    <MianContainer
      variants={container}
      initial="hidden"
      animate="show"
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <Container>
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        <AnchorComponent numbers={numbers} />
        <Center>
          <Grid>
            {ProjectData.map((blog) => {
              return <ProjectComponent key={blog.id} blog={blog} />
            })}
          </Grid>
        </Center>
        <BigTitle text="Work" top="5rem" left="5rem" />
      </Container>
    </MianContainer>
  )
}

export default ProjectPage
