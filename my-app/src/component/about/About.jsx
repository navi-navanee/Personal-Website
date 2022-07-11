import React from 'react'
import './about.css'
import Me from '../../assets/about.jpg'
import {FaAward} from 'react-icons/fa'
import {AiFillProject} from 'react-icons/ai'

const About = () => {
  return (
    <section id='about' >
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon'/>
              <h5>Experiance</h5>
              <small>6 Month Working</small>
            </article>
            <article className="about__card">
              <AiFillProject className='about__icon'/>
              <h5>MiniProjects</h5>
              <small>5+</small>
            </article>
            <article className="about__card">
              <AiFillProject className='about__icon'/>
              <h5>Project</h5>
              <small>1+</small>
            </article>
          </div>

          <p>
          Hello I'm a Self taught full-stack developer proficient in MERN stack with knowledge in HTML, CSS, SCSS, JavaScript, with a Degree in Bachelor of Engineering in Mechanical. I have a keen interest in coding and switch my career into IT field.Iam a self taught developer
          and thats my strength and i have the skill to learn things faster and be versatile
          </p>
          <a href="#contact" className='btn btn-primary'>Lets Talk</a>
        </div>

      </div>


    </section>
  )
}

export default About