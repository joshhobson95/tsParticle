import React from 'react';
import './Modal.css';
import logo from '../assets/logo.png'

function Modal() {
  return (
    <div className='modal_outer'>

        <div className='modal_main'>

            <div className='modal_left'> 

            <h2>About me.</h2>
            <div className='intro_container'>
                <p className='intro'>Hello, my name is <span className='jh_red'>Josh Hobson </span>and I am a <span className='jh_blue'>Full Stack Web Developer. </span> Whether you are looking for a new member for your team, or just the freelancer who can get it all done, I am passionate to help you reach your Web Development needs. From <span className='jh_yellow'>design to database </span>, let me be the answer to “How can we get this done?”</p>
            </div>

            </div>
            <div className='modal_right'>
                <div className='modal_right_header'>
                <h2>Send me an Email.</h2>
                <p>Lets get something working</p>
                </div>

               <form className='contact_form'>
        <div className='image_container'>
                <img src={logo} alt='' className='form_logo'/>
        </div>
                <h5>Name</h5>
               <input
                    type='text'
                    name='from_name'     
                    className='name_input'
                />
                <h5>Email</h5>
               <input
                    type='text'
                    name='from_email'   
                    className='email_input'
                />
                <h5>Message</h5>
               <textarea
                    type='textarea'
                    name='message'        
                    className='message_input'
                />  



<div className='send_container'>
                <button className='send'>send</button>
</div>
               </form>
    

            </div>

        </div>



    </div>
  )
}

export default Modal