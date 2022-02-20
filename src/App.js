import { Route, Switch } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { lightTheme } from './components/Themes'
import GlobalStyle from './globalStyles'

//Components
import Main from './components/Main'
import AboutPage from './components/AboutPage'
import MySkillsPage from './components/MySkillsPage'
import { useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import SoundBar from './subComponents/SoundBar'
import ProjectPage from './components/ProjectPage'

function App() {
  const location = useLocation()
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={lightTheme}>
        <SoundBar />
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route exact path="/" component={Main} />
            <Route exact path="/about" component={AboutPage} />
            <Route exact path="/project" component={ProjectPage} />
            <Route exact path="/skills" component={MySkillsPage} />
          </Switch>
        </AnimatePresence>
      </ThemeProvider>
    </>
  )
}

export default App
