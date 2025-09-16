import './App.css'
import Navbar from './components/Navbar'
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
      <Footer />
    </>
  )
}

export default App
