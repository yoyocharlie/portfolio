import Link from 'next/link'
import React, { useEffect, useRef } from 'react'

const Hero = () => {
    const heroRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        setTimeout(() => {
          heroRef.current?.classList.remove('opacity-0')
        }, 100)
      }, []);
  return (
    <div ref={heroRef} className='flex flex-col items-center overflow-hidden h-screen justify-center bg-transparent opacity-0 transition-opacity duration-500 ease-in'>
        <div className='mx-5 -mt-20 text-4xl font-bold font-headText tracking-wider text-center'>
            <h1 className={`text-greyWhite md:hover:animate-wiggle`}>Hey! I&apos;m <span className='text-techGreen'>Jacob</span>.</h1>
            <h1 className={`text-techGreen transition-all ease-in-out hover:drop-shadow-[3px_3px_white] hover:scale-110`}>Full-stack Developer<span className='text-jet'></span></h1>
            <div id='avidLearner' className='overflow-hidden transition-all ease-in-out duration-500'><h1 className={`text-greyWhite transition-all ease-in-out duration-500 drop-shadow-[0_50px_#0a192f]`}>& Avid Learner.</h1></div>
        </div>
        <div className='flex flex-col mx-16 text-center'>
            <p className='font-paraText text-jet mt-10 text-lg'>&quot;Jacob&apos;s development skills are so good, it&apos;s almost unfair to the competition.&quot;</p>
            <p className='font-paraText text-jet mt-10 text-lg self-center'><i>- ChatGPT</i></p>
        </div>
        <div className='w-full flex justify-center absolute bottom-3'>
            <Link href={'#about'}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 rounded-full drop-shadow-md bg-techGreen text-darkBlue animate-bounce hover:cursor-pointer">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                </svg>
            </Link>
        </div>
    </div>
  )
}

export default Hero