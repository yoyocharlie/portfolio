import Link from 'next/link'
import React, { Dispatch, SetStateAction } from 'react'
import { useScrollPosition } from '../hooks/useScrollPosition'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faDiscord, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'


    interface Sidebar{
    showSidebar: boolean,
    setShowSidebar: Dispatch<SetStateAction<boolean>>,
}

    const Navbar: React.FC<Sidebar> = ({showSidebar, setShowSidebar}) => {

    const scrollPosition = useScrollPosition();

  return (
    <div className={`py-4 px-5 md:px-20 bg-darkBlue bg-opacity-0 flex transition-shadow duration-700 backdrop-blur-sm ${scrollPosition > 1 && "shadow-2xl"} items-center font-headText sticky top-0 w-full bg-white z-40`}>
        <Link className='mr-auto' href={'/'}>
            <button onClick={() => showSidebar && setShowSidebar(!showSidebar)}>
                <span className='text-3xl md:text-4xl lg:text-5xl text-greyWhite font-headText mr-2 font-bold tracking-tighter'>J</span>
                <span className='text-3xl md:text-4xl lg:text-5xl text-techGreen font-headText font-bold mr-auto tracking-tighter'>P</span>
            </button>
        </Link>
        <div>
            <button onClick={() => setShowSidebar(!showSidebar)} className={`text-techGreen lg:hidden p-0 pt-1 ${scrollPosition > 1 && "hidden"}`}>
                <FontAwesomeIcon className='text-3xl' icon={faBars} />
            </button>
            <button onClick={() => setShowSidebar(!showSidebar)} className={`text-techGreen p-0 pt-1 ${scrollPosition < 1 && "hidden"}`}>
                <FontAwesomeIcon className='text-3xl' icon={faBars} />
            </button>
        </div>
        <div className={`hidden lg:flex ${scrollPosition > 1 && "lg:hidden"}`}>
            <div className={`${showSidebar && "hidden"} flex items-center mr-5`}>
                <Link target={"_blank"} href={'https://github.com/yoyocharlie'}><FontAwesomeIcon className={`text-greyWhite text-4xl hover:text-white transition duration-200 ease-out hover:ease-in`} icon={faGithub} /></Link>
                <Link target={"_blank"} href={'https://www.linkedin.com/in/jacob-pixler-094348219/'}><FontAwesomeIcon className={`text-greyWhite text-4xl px-8 hover:text-white transition duration-200 ease-out hover:ease-in`} icon={faLinkedin} /></Link>
                <Link target={"_blank"} href={'https://discordapp.com/users/825450304307724288'}><FontAwesomeIcon className={`text-greyWhite text-4xl hover:text-white transition duration-200 ease-out hover:ease-in`} icon={faDiscord} /></Link>
            </div>
            <Link className={`${showSidebar && "hidden"} bg-techGreen text-darkBlue rounded-md text-xl p-2 flex items-center gap-5 mx-2 hover:cursor-pointer hover:bg-darkBlue hover:text-techGreen border border-techGreen transition duration-200 ease-out hover:ease-in`} href={'#projects'}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                </svg>
                PROJECTS
            </Link>
            <Link className={`${showSidebar && "hidden"} bg-techGreen text-darkBlue rounded-md text-xl p-2 flex items-center gap-5 mx-2 hover:cursor-pointer hover:bg-darkBlue hover:text-techGreen border border-techGreen transition duration-200 ease-out hover:ease-in`} href={'#contact'}>
                <FontAwesomeIcon icon={faEnvelope} />
                CONTACT
            </Link>
            <Link className={`${showSidebar && "hidden"} bg-darkBlue text-techGreen rounded-md text-xl p-2 flex items-center gap-5 mx-2 hover:cursor-pointer hover:bg-techGreen hover:text-darkBlue border border-techGreen transition duration-200 ease-out hover:ease-in`} target={"blank"} href={'https://drive.google.com/file/d/1nMr3QybJfd7rubsAJKub0Kl5zsTjh3Gn/view?usp=sharing'}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
                RESUME
            </Link>
        </div>
    </div>
  )
}

export default Navbar