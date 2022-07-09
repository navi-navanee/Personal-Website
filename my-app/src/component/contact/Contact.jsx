
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'

import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form=useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ihd83zc', 'template_xp5okfq', form.current, 'U9GOKZfW4_GTkQSMw')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact__container'>
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>navaneethdevanofficial@gmail.com</h5>
            <a href="mailto:navaneethdevanofficial@gmail.com" target={"_blank"}>Sent a message</a>
          </article>
          <article className="contact__option">
            <BsMessenger className='contact__option-icon'/>
            <h4>Messanger</h4>
            <h5>navaneethdevanofficial@gmail.com</h5>
            <a href="http://m.me/navaneeth.devan.5/" target={"_blank"}>Sent a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>9497502035</h5>
            <a href="http://api.whatsapp.com/send ?phone= +919497502035" target={"_blank"}>Sent a message</a>
          </article>
        </div>
        {/* ==================END================ */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name='message' id='' cols={30} rows="7" placeholder='Your message' required></textarea>
          <button type='submit' className='btn btn-primary' >Send Message</button>
        </form>
      </div>
    </section>
  )
}
