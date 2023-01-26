import { useForm } from '@formspree/react'
import { faDiscord, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'

const Form = () => {    const [state, handleSubmit] = useForm("mdovaoap");
if (state.succeeded) {
    return <Form />;
}
    
  return (
    <form className='mx-auto flex flex-col' name="contact" action='https://formspree.io/f/mdovaoap' method='POST' onSubmit={handleSubmit}>
        <div className='w-full pb-4'>
            <label className="sr-only" htmlFor="inputName">Name</label>
            <input className='w-full bg-darkBlue border border-techGreen text-techGreen font-paraText p-4 border-rounded-xl' type="text" name="name" id="inputName" placeholder="Name" required />
        </div>
        <div className='w-full pb-4'>
            <label className="sr-only" htmlFor="inputEmaiil">Email</label>
            <input className='w-full bg-darkBlue border border-techGreen text-techGreen font-paraText p-4 border-rounded-xl' type="email" name="email" id="inputEmail" placeholder="Email" required />
        </div>
        <div className="mb-2 rounded">
            <label className="sr-only" htmlFor="inputMessage">Message</label>
            <textarea className='w-full bg-darkBlue text-techGreen p-4 border border-techGreen font-paraText' name="message" id="inputMessage" rows={5} placeholder="Message" required></textarea>
        </div>
        <div className='flex'>
            <div className={`flex items-center mr-auto`}>
                <Link target={"_blank"} href={'https://github.com/yoyocharlie'}><FontAwesomeIcon className={`text-greyWhite text-xl md:text-3xl`} icon={faGithub} /></Link>
                <Link target={"_blank"} href={'https://www.linkedin.com/in/jacob-pixler-094348219/'}><FontAwesomeIcon className={`text-greyWhite text-xl md:text-3xl px-8`} icon={faLinkedin} /></Link>
                <Link target={"_blank"} href={'https://discordapp.com/users/825450304307724288'}><FontAwesomeIcon className={`text-greyWhite text-xl md:text-3xl`} icon={faDiscord} /></Link>
            </div>
            <button className='text-darkBlue font-headText rounded-md bg-techGreen p-2 text-lg'>SUBMIT</button>
        </div>
    </form>
  )
}

export default Form