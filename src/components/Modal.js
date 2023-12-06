import React from 'react';
import './Modal.css';
import logo from '../assets/logo.png'

function Modal() {
  return (
    <div className='modal_outer'>

        <div className='modal_main'>

            <div className='modal_left'> 

            <h2>About me.</h2>
                <p>Hello, my name is Josh Hobson and I am a Full Stack Web Developer. Whether you are looking for a new member for your team, or just the freelancer who can get it all done, I am passionate to help you reach your Web Development needs. From design to database, let me be the answer to “How can we get this done?”</p>

            </div>
            <div className='modal_right'>
                <h2>Send me an Email.</h2>

               <form className='contact_form'>
                <img src={logo} alt='' className='form_logo'/>
               <input
                    type='text'
                    name='from_name'
                    placeholder='Your name'
                    className='name_input'
                />
               <input
                    type='text'
                    name='from_email'
                    placeholder='Email'
                    className='name_input'
                />
               <input
                    type='textarea'
                    name='message'
                    placeholder='Message'
                    className='name_input'
                />
               </form>
    

            </div>

        </div>



    </div>
  )
}

export default Modal