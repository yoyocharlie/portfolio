import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import Head from 'next/head'
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
      <div className='flex justify-center'>
        <div className='mt-48 text-4xl font-bold'>
          <h1 className={`text-jet ${animateCss}`}>Hey! I&apos;m <span className='text-amber'>Jacob</span>.</h1>
          <h1 className={`text-amber ${animateCss}`}>Front End Developer<span className='text-jet'>.</span></h1>
          <h1 className={`text-jet ${animateCss}`}>Avid Learner.</h1>
        </div>
      </div>
    </>
  )
}
