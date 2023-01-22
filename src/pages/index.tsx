import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import Head from 'next/head'
import Image from 'next/image'
import myTravelPic from 'public/images/myTravels2.JPG'
import mindful from 'public/images/mindful2.JPG'
import { useState } from 'react'

export default function Home() {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);

  const animateCss = "md:transition md:ease-in-out md:hover:-translate-y-1 md:hover:scale-110 md:duration-300"

  return (
    <>
      <Head>
        <title>Jacob Pixler</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <div className='flex flex-col items-center overflow-hidden h-screen'>
        <div className='md:mt-48 mt-32 mx-5 text-4xl font-bold font-headText tracking-wider text-center'>
          <h1 className={`text-jet ${animateCss}`}>Hey! I&apos;m <span className='text-amber'>Jacob</span>.</h1>
          <h1 className={`text-amber ${animateCss}`}>Front End Developer<span className='text-jet'>.</span></h1>
          <h1 className={`text-jet ${animateCss}`}>Avid Learner.</h1>
        </div>
        <div className='flex flex-col mx-16'>
          <p className='font-paraText mt-10 text-lg'>&quot;Jacob&apos;s front-end development skills are so good, it&apos;s almost unfair to the competition.&quot;</p>
          <p className='font-paraText mt-10 text-lg self-center'><i>- ChatGPT</i></p>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 animate-bounce absolute bottom-0">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
        </svg>
      </div>
      <div className='w-full bg-jet flex flex-col items-center overflow-hidden'>
        <h1 className='font-headText text-white text-4xl mt-10 mb-12'>Projects</h1>
        <div className='flex flex-col md:flex-row gap-10'>
          <div className='bg-white mb-10 p-5 rounded-md flex flex-col'>
            <Image className='rounded mb-2' src={myTravelPic} alt='myTravels' width={300} height={300}/>
            <h3 className='font-headText text-amber text-3xl mb-10'>myTravels</h3>
            <p className='font-paraText text-xl w-[300px]'>A photojournaling app created with React.js</p>
          </div>
          <div className='bg-white mb-10 p-5 rounded-md flex flex-col'>
            <Image className='rounded mb-2' src={mindful} alt='myTravels' width={300} height={300}/>
            <h3 className='font-headText text-amber text-3xl mb-10'>mindful.</h3>
            <p className='font-paraText text-xl w-[300px]'>A photojournaling app created with React.js</p>
          </div>
        </div>
      </div>
    </>
  )
}
