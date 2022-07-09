import React from 'react'
import {FaLinkedinIn}  from 'react-icons/fa'
import {BsGithub}  from 'react-icons/bs'
import {FaFacebook}  from 'react-icons/fa'
const HeaderSocial = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com"><FaLinkedinIn/></a>
        <a href="https://github.com"><BsGithub/></a>
        <a href="https://instagram.com"><FaFacebook/></a>
    </div>
  )
}

export default HeaderSocial