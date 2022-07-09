import React from 'react'
import './nav.css'
import {AiOutlineHome}  from 'react-icons/ai'
import {FaUser}  from 'react-icons/fa'
import {FiBook}  from 'react-icons/fi'
import {RiServiceLine}  from 'react-icons/ri'
import {SiGooglemessages}  from 'react-icons/si'
import { useState } from 'react'

export const Nav = () => {
  const [activeNav,setActiveNav]=useState('#')
  return (
    <nav>
      <a href="#" onClick={()=> setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''} ><FaUser/></a>
      <a href="#experiance" onClick={()=> setActiveNav('#experiance')} className={activeNav === '#experiance' ? 'active' : ''}><FiBook/></a>
      <a href="#services" onClick={()=> setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceLine/></a>
      <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><SiGooglemessages/></a>
    </nav>
  )
}
