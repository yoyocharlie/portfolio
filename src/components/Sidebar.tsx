import Link from 'next/link'
import React, { Dispatch, SetStateAction } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

interface Sidebar{
    showSidebar: boolean,
    setShowSidebar: Dispatch<SetStateAction<boolean>>,
}

const Sidebar: React.FC<Sidebar> = ({showSidebar, setShowSidebar}) => {
    const visibility: string = 'top-0 right-0 w-56 bg-darkBlue drop-shadow-2xl fixed h-full z-40 ease-in-out duration-500 flex flex-col font-headText'

  return (
    <div className={showSidebar ? visibility : `${visibility} -right-full`}>
        <button
            className="bg-darkBlue text-techGreen border border-techGreen mt-5 rounded-md text-2xl p-2 mb-5 flex items-center gap-5 mx-4 hover:cursor-pointer hover:bg-techGreen hover:text-darkBlue transition duration-200 ease-out hover:ease-in"
            onClick={() => setShowSidebar(!showSidebar)}
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>

            <h3>Close</h3>
        </button>
        <Link className="bg-techGreen border border-techGreen text-darkBlue rounded-md mt-8 text-xl p-3 mb-5 flex items-center gap-5 mx-4 hover:cursor-pointer hover:bg-darkBlue hover:text-techGreen transition duration-200 ease-out hover:ease-in" href={'#projects'}>
            <button className='flex' onClick={() => setShowSidebar(!showSidebar)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-3 mr-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                </svg>
                PROJECTS
            </button>
        </Link>
        <Link className="bg-techGreen border border-techGreen text-darkBlue rounded-md text-xl p-3 mb-5 flex items-center gap-5 mx-4 hover:cursor-pointer hover:bg-darkBlue hover:text-techGreen transition duration-200 ease-out hover:ease-in" href={'#contact'}>
            <button onClick={() => setShowSidebar(!showSidebar)}>
                <FontAwesomeIcon className='ml-3 mr-5' icon={faEnvelope} />
                CONTACT
            </button>
        </Link>
        <Link className="bg-darkBlue border border-techGreen text-techGreen rounded-md text-xl p-3 mb-5 flex items-center gap-5 mx-4 hover:cursor-pointer hover:bg-techGreen hover:text-darkBlue transition duration-200 ease-out hover:ease-in" target={"blank"} href={'https://drive.google.com/file/d/19W2kuXcTCi4UB9Yj8fk9WJ4A55RT2j0j/view?usp=share_link'}>
            <button className='flex' onClick={() => setShowSidebar(!showSidebar)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-3 mr-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
                RESUME
            </button>
        </Link>
        <h3 className='text-jet text-2xl tracking-wider font-bold ml-4 mt-10 mb-5'>SOCIAL</h3>
        <div className='flex justify-around'>
            <Link target={"_blank"} href={'https://github.com/yoyocharlie'}><FontAwesomeIcon className='text-greyWhite text-4xl hover:text-white transition duration-200 ease-out hover:ease-in' icon={faGithub} /></Link>
            <Link target={"_blank"} href={'https://www.linkedin.com/in/jacob-pixler-094348219/'}><FontAwesomeIcon className='text-greyWhite text-4xl hover:text-white transition duration-200 ease-out hover:ease-in' icon={faLinkedin} /></Link>
            <Link target={"_blank"} href={'https://discordapp.com/users/825450304307724288'}><FontAwesomeIcon className='text-greyWhite text-4xl hover:text-white transition duration-200 ease-out hover:ease-in' icon={faDiscord} /></Link>
        </div>
    </div>
  )
}

export default Sidebar