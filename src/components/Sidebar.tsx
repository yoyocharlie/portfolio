import Link from 'next/link'
import React, { Dispatch, SetStateAction } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

interface Sidebar{
    showSidebar: boolean,
    setShowSidebar: Dispatch<SetStateAction<boolean>>,
}

const Sidebar: React.FC<Sidebar> = ({showSidebar, setShowSidebar}) => {
    const visibility: string = 'top-0 right-0 w-56 bg-white drop-shadow-2xl text-white fixed h-full z-40 ease-in-out duration-500 flex flex-col font-headText'

  return (
    <div className={showSidebar ? visibility : `${visibility} -right-full`}>
        <button
            className="bg-white text-amber border border-amber mt-2 rounded-md text-2xl p-2 mb-5 flex items-center gap-5 mx-4"
            onClick={() => setShowSidebar(!showSidebar)}
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>

            <h3>Close</h3>
        </button>
        <Link className="bg-amber border border-amber text-white rounded-md text-xl p-2 mb-5 flex items-center gap-5 mx-4 hover:cursor-pointer mt-8" href={''}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
            ABOUT
        </Link>
        <Link className="bg-amber border border-amber text-white rounded-md text-xl p-2 mb-5 flex items-center gap-5 mx-4 hover:cursor-pointer" href={'#projects'}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
            </svg>
            PROJECTS
        </Link>
        <Link className="bg-white border border-amber text-amber rounded-md text-xl p-2 mb-5 flex items-center gap-5 mx-4 hover:cursor-pointer" target={"blank"} href={'https://drive.google.com/file/d/1Lf1LLMMyFE8X3hW7qzuVOoqf0cUPb4el/view'}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
            </svg>
            RESUM&Eacute;
        </Link>
        <h3 className='text-amber text-xl ml-4 mt-10'>SOCIAL</h3>
        <FontAwesomeIcon className='text-black' icon={faGithub} />
    </div>
  )
}

export default Sidebar