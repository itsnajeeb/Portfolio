import './App.css'
import Navbar from './components/Navbar'
import Contact from './pages/Contact'
import Education from './pages/Education'
import Experience from './pages/Experience'
import Footer from './pages/Footer'
import Hero from './pages/HeroSection'
import Projects from './pages/Project'
import Skills from './pages/Skills'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <Education />
      <Experience />
      <Projects />
      <Contact/>
      <Footer />
    </>
  )
}

export default App
