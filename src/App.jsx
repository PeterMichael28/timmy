import { useState } from 'react'
import img from './assets/bannerimage.png'
import './App.css'
import About from './components/About/About';
import Headers from './components/Headers/Headers';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Skills from './components/Skills/Skills';
import Selected from './components/Selected/Selected';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';




function App() {

  const mobile = window.innerWidth <= 768 ? true : false;

  return (
    <div className="App">
      <Headers />
      <Hero />
      <About />
      <Skills />
      <Services />
     {!mobile && <div className='image-banner'>
        <img src={img} alt="" />
      </div>}
      <Selected />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
