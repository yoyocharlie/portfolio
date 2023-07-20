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
import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export interface ProjectCards {
  cards: []
}

const Home: React.FC<ProjectCards> = ({ cards }) => {
  const router = useRouter();
  const canonicalUrl = (`https://jacobpixler.com` + (router.asPath === "/" ? "": router.asPath)).split("?")[0];
  const [showSidebar, setShowSidebar] = useState<boolean>(false);

  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);

    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    await console.log(container);
  }, []);


  return (
    <>
      <Head>
        <title>Jacob Pixler</title>
        <meta name="description" content="Jacob Pixler's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Jacob Pixler's Portfolio" key="title" />
        <meta property="og:description" content="I'm just a coffee looking forward to my next programmer." key="description" />
        <meta property="og:image" content="/images/HeadImage.PNG" key="image" />
        <link rel="canonical" href={canonicalUrl} />
      </Head>
        <Navbar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        <Hero />
        <About />
        <Projects cards={cards} />
        <Contact />
        <Particles className='particles'
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        value: "transparent",
                    },
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#ffffff",
                    },
                    links: {
                        color: "#ffffff",
                        distance: 190,
                        enable: true,
                        opacity: 0.2,
                        width: 1,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 1,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.2,
                    },
                    shape: {
                        type: "square",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
            }}
        />
        <footer className='text-center bg-darkBlue text-techGrey font-paraText text-sm p-2'>©2023 Jacob Pixler. All jams preserved</footer>
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