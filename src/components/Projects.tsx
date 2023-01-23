import React from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'

const Projects = () => {
    const myTravelsImage = require("../../public/images/myTravels2.JPG");
    const mindfulImage = require("../../public/images/mindful2.JPG");
    const portfolioImage = require("../../public/images/protfolio.PNG");
  return (
    <div id='projects' className='w-full bg-gradient-to-br from-sky-800 via-jet to-sky-300 flex flex-col items-center overflow-hidden'>
        <h1 className='font-headText text-amber text-5xl mt-16 mb-14 md:self-start md:ml-40'>PROJECTS</h1>
        <div className='flex flex-col gap-10 md:justify-evenly mx-5'>
          <div className='bg-white md:ml-5 mb-10 p-5 rounded-md flex flex-col md:flex-row transition ease-in-out duration-200 md:hover:-translate-y-6 md:hover:shadow-2xl md:hover:scale-105 md:hover:cursor-pointer'>
            <Image className='rounded md:mr-5 mb-2 md:w-full md:h-full' src={myTravelsImage} alt='myTravels' width={300} height={300}/>
            <div className='flex flex-col mr-10'>
              <h3 className='font-headText text-amber text-2xl md:text-3xl mb-10'>myTravels</h3>
              <p className='font-paraText text-md md:text-xl max-w-[300px]'>A photojournaling app created with React.js, JavaScript, TailwindCSS, & Firebase.</p>
            </div>
          </div>
          <div className='bg-white md:ml-5 mb-10 p-5 rounded-md flex flex-col md:flex-row transition ease-in-out duration-200 md:hover:-translate-y-6 md:hover:shadow-2xl md:hover:scale-105 md:hover:cursor-pointer'>
            <Image className='rounded md:mr-5 mb-2 md:w-full md:h-full' src={mindfulImage} alt='myTravels' width={300} height={300}/>
            <div className='flex flex-col mr-10'>
              <h3 className='font-headText text-amber text-2xl md:text-3xl mb-10'>mindful.</h3>
              <p className='font-paraText text-md md:text-xl max-w-[300px]'>A quote generation app.</p>
            </div>
          </div>
          <div className='bg-white md:ml-5 mb-10 p-5 rounded-md flex flex-col md:flex-row transition ease-in-out duration-200 md:hover:-translate-y-6 md:hover:shadow-2xl md:hover:scale-105 md:hover:cursor-pointer'>
            <Image className='rounded md:mr-5 mb-2 md:w-full md:h-full' src={portfolioImage} alt='myTravels' width={300} height={300}/>
            <div className='flex flex-col mr-10'>
              <h3 className='font-headText text-amber text-2xl md:text-3xl mb-10'>My Portfolio</h3>
              <p className='font-paraText text-md md:text-xl max-w-[300px]'>I used Nextjs, TypeScript, TailwindCSS, & something else I&apos;m sure</p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Projects