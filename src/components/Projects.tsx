import React from 'react'
import Image from 'next/image'

const Projects = () => {
    const myTravelsImage = require("../../public/images/myTravels2.JPG");
    const mindfulImage = require("../../public/images/mindful2.JPG");
    const portfolioImage = require("../../public/images/protfolio.PNG");
  return (
    <div id='projects' className='w-full bg-gradient-to-br from-sky-800 via-jet to-sky-300 flex flex-col items-center overflow-hidden'>
        <h1 className='font-headText text-amber text-5xl mt-16 mb-12 self-start'>PROJECTS</h1>
        <div className='flex flex-col lg:flex-row gap-10 md:justify-evenly lg:w-full w-3/4'>
          <div className='bg-white mb-10 p-5 rounded-md flex flex-col transition ease-in-out duration-200 md:hover:-translate-y-6 md:hover:shadow-2xl md:hover:scale-105 md:hover:cursor-pointer'>
            <Image className='rounded mb-2 lg:w-full' src={myTravelsImage} alt='myTravels' width={300} height={300}/>
            <h3 className='font-headText text-amber text-3xl mb-10'>myTravels</h3>
            <p className='font-paraText text-xl max-w-[300px]'>A photojournaling app created with React.js, JavaScript, TailwindCSS, & Firebase.</p>
          </div>
          <div className='bg-white mb-10 p-5 rounded-md flex flex-col transition ease-in-out duration-200 md:hover:-translate-y-6 md:hover:shadow-2xl md:hover:scale-105 md:hover:cursor-pointer'>
            <Image className='rounded mb-2 lg:w-full' src={mindfulImage} alt='myTravels' width={300} height={300}/>
            <h3 className='font-headText text-amber text-3xl mb-10'>mindful.</h3>
            <p className='font-paraText text-xl max-w-[300px]'>A quote generation app.</p>
          </div>
          <div className='bg-white mb-10 p-5 rounded-md flex flex-col transition ease-in-out duration-200 md:hover:-translate-y-6 md:hover:shadow-2xl md:hover:scale-105 md:hover:cursor-pointer'>
            <Image className='rounded mb-2 lg:w-full' src={portfolioImage} alt='myTravels' width={300} height={300}/>
            <h3 className='font-headText text-amber text-3xl mb-10'>My Portfolio</h3>
            <p className='font-paraText text-xl max-w-[300px]'>I used Nextjs, TypeScript, TailwindCSS, & something else I&apos;m sure</p>
          </div>
        </div>
      </div>
  )
}

export default Projects