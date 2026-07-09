import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import './index.css'
import Nav from './portfolio/Nav.jsx'
import Hero from './portfolio/Hero.jsx'
import About from './portfolio/About.jsx'

function App() {

  return (
    <>
    <Nav />
    <Hero />
    <About />
    </>
  )
}

export default App
