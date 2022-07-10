import React from 'react'
import About from './component/about/About'
import { Contact } from './component/contact/Contact'
import Experiance from './component/experiance/Experiance'
import Footer from './component/footer/Footer'
import Header from './component/header/Header'
import { Nav } from './component/nav/Nav'
import Portfolio from './component/portfolio/Portfolio'
import Services from './component/Services/Services'

const App = () => {
  return (
    <>
      <Header/>
      <Nav/>
      <About/>
      <Experiance/>

       <Portfolio/>
       <Contact/>

    </>
  )
}

export default App