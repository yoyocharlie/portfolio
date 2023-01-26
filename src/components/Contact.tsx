import { useForm } from '@formspree/react'
import { faDiscord, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React, { useRef } from 'react'
import Form from './Form'

const Contact = () => {


  return (
    <div id='contact' className='w-full pb-10 bg-lessDarkBlue flex flex-col items-center overflow-hidden'>
        <h1 className='text-techGreen font-headText text-3xl md:text-5xl mt-20 mb-10'>LET&apos;S CHAT!</h1>
        <div className='lg:w-2/4 md:w-3/4 w-10/12'>
            <Form />
        </div>
    </div>
  )
}

export default Contact