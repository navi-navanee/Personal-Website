import React from 'react'
import CTA from './CTA'
import './header.css'
import ME from '../../assets/main.jpg'
import HeaderSocial from './HeaderSocial'
const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Helloo I'm</h5>
        <h1>Navaneeth Devan</h1>
        <h5 className='text-light'>Fullstack developer</h5>
        <CTA />
        <HeaderSocial/>
        <div className="me">
          <img src={ME} alt="" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header