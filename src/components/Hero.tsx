import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <div className='flex flex-col items-center overflow-hidden h-screen justify-center'>
        <div className='mx-5 -mt-20 text-4xl font-bold font-headText tracking-wider text-center'>
            <h1 className={`text-jet md:hover:animate-wiggle`}>Hey! I&apos;m <span className='text-amber'>Jacob</span>.</h1>
            <h1 className={`text-amber md:hover:animate-shake`}>Fullstack Developer<span className='text-jet'></span></h1>
            <h1 className={`text-jet md:hover:animate-explode`}>& Avid Learner.</h1>
        </div>
        <div className='flex flex-col mx-16'>
            <p className='font-paraText text-jet mt-10 text-lg'>&quot;Jacob&apos;s front-end development skills are so good, it&apos;s almost unfair to the competition.&quot;</p>
            <p className='font-paraText text-jet mt-10 text-lg self-center'><i>- ChatGPT</i></p>
        </div>
        <Link href={'#projects'}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 rounded-full drop-shadow-md bg-white animate-bounce absolute bottom-2 hover:cursor-pointer">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
            </svg>
        </Link>
    </div>
  )
}

export default Hero