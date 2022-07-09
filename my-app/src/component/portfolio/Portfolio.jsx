import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/pexel.png'
import IMG2 from '../../assets/micromax.png'

const data = [
{
 id: 1,
 image:IMG1,
 title:'Pexel static web page',
 github:'https://github.com/navi-navanee/pexels.git ',
demo:'https://dribbble.com/navi-navanee '
},
{
  id: 2,
  image:IMG2,
  title:'Micromax static web page',
  github:'https://github.com/navi-navanee/pexels.git ',
  demo:'https://dribbble.com/navi-navanee'
 },
 {
  id: 3,
  image:IMG1,
  title:'Pexel static web page',
  github:'https://github.com/navi-navanee/pexels.git ',
 demo:'https://dribbble.com/navi-navanee '
 },
 {
   id: 4,
   image:IMG2,
   title:'Micromax static web page',
   github:'https://github.com/navi-navanee/pexels.git ',
   demo:'https://dribbble.com/navi-navanee'
  },

]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
 
      </div>
    </section>
  )
}

export default Portfolio