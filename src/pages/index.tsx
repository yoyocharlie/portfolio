import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import Card from '@/components/Card'
import Projects from '@/components/Projects'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import cardData from '../cardData.js'
import { GetStaticProps } from 'next'
import About from '@/components/About'
import Contact from '@/components/Contact'
import { useRouter } from 'next/router.js'

export interface ProjectCards {
  cards: []
}

const Home: React.FC<ProjectCards> = ({ cards }) => {
  const router = useRouter();
  const canonicalUrl = (`https://jacobpixler.com` + (router.asPath === "/" ? "": router.asPath)).split("?")[0];
  const [showSidebar, setShowSidebar] = useState<boolean>(false);

  return (
    <>
      <Head>
        <title>Jacob Pixler</title>
        <meta name="description" content="Jacob Pixler Fullstack Developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={canonicalUrl} />
      </Head>
        <Navbar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        <Hero />
        <About />
        <Projects cards={cards} />
        <Contact />
        <footer className='text-center text-techGrey font-paraText text-sm p-2'>©2023 Jacob Pixler. All jams preserved</footer>
    </>
  )
}

export default Home



export const getStaticProps: GetStaticProps = async () => {
  const cards = cardData
  return {
    props: {cards}
  }
}