import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/pexel.png'
import IMG2 from '../../assets/micromax.png'
import IMG3 from '../../assets/asus.png'
import IMG4 from '../../assets/Netflix.png'
import IMG5 from '../../assets/olx.png'
import IMG6 from '../../assets/mpick.png'
import IMG7 from '../../assets/userManagment.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Pexel static web page',
    github: 'https://github.com/navi-navanee/pexels.git ',
    demo: 'https://navi-navanee.github.io/pexels/ '
  },
  {
    id: 2,
    image: IMG2,
    title: 'Micromax static web page',
    github: 'https://github.com/navi-navanee/pexels.git ',
    demo: 'https://navi-navanee.github.io/MicromaxProject/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Asus responsive',
    github: 'https://github.com/navi-navanee/Asus ',
    demo: 'https://navi-navanee.github.io/Asus/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Netflix Clone',
    github: 'https://github.com/navi-navanee/Netflix',
    demo: 'https://navi-navanee.github.io/Netflix/'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Olx Clone',
    github: 'https://github.com/navi-navanee/olx-clone',
    demo: ''
  },
  {
    id: 6,
    image: IMG6,
    title: 'M.pick e-Commerse',
    github: 'https://github.com/navi-navanee/M.pick',
    demo: 'www.mpick.shop'
  },
  {
    id: 7,
    image: IMG7,
    title: 'User Managment',
    github: 'https://github.com/navi-navanee/usermanagment',
    demo: ''
  },

]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {
          data.map(({id,image,title,github,demo}) => {
            return(
              <article key={id} className='portfolio__item'>
              <div className='portfolio__item-image'>
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className='portfolio__item-cta'>
                <a href={github} className='btn' target='_blank'>Github</a>
                <a href={demo} className='btn btn-primary' target='_blank' >Live Demo</a>
              </div>
            </article>
            )
          })
        }

      </div>
    </section>
  )
}

export default Portfolio