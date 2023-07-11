import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faSquareJs, faGitAlt, faBootstrap, faHtml5, faCss3, faNodeJs } from '@fortawesome/free-brands-svg-icons'
import { faPersonSkiing, faPlaneDeparture, faSliders, faWandSparkles } from '@fortawesome/free-solid-svg-icons'

const About = () => {
  return (
    <div id='about' className='w-full pb-10 relative bg-lessDarkBlue flex flex-col items-center overflow-hidden'>
      <h1 className='font-headText text-techGreen h-20 text-3xl md:text-5xl mt-20 text-center md:self-start md:absolute md:left-36 mx-10 md:mx-0'>I&apos;m <TypeAnimation
        sequence={[
          "a Software Developer 💻",
          2000,
          "an Audio Nerd 🤓🎹",
          2000,
          "a Lawncare Enthusiast 🌳🌼",
          2000,
          "just a guy",
          2000
        ]}
        repeat={Infinity}
        style={{color: 'white'}}
      /></h1>
      <div className='flex flex-col max-w-[350px] md:max-w-[1430px] lg:grid xl:grid-cols-2 gap-10 mx-5 md:mx-20 md:mt-40'>
        <div className='flex flex-col'>
          <p className='font-paraText text-techGrey text-sm md:max-w-[700px] md:text-lg lg:text-xl'>I&apos;m a Software Developer and coffee consumer at <a className='text-techGreen underline' href='https://inventive-group.com/'>Inventive-Group</a>. Before becoming a Software Developer, I was an Audio Engineer in Nashville, Tennessee ("You&apos;re the only Tennessee I see", or something like that). Now, I get to wake up every day and combine my passion for creativity and my love for programming in one domain. If you want to geek out about development, audio, cats, or literally anything at all, I&apos;d love to hear from you so hit me up with the form below!</p>
          <ul className='text-techGreen text-sm md:text-lg lg:text-xl mt-10 md:ml-10 grid grid-cols-2 text-center md:text-start md:grid-cols-4 gap-y-5'>
            <li><FontAwesomeIcon icon={faReact} /> React</li>
            <li>Next.js</li>
            <li><FontAwesomeIcon icon={faSquareJs} /> JavaScript</li>
            <li>TypeScript</li>
            <li><FontAwesomeIcon icon={faGitAlt} /> Git</li>
            <li>MongoDB</li>
            <li>Firebase</li>
            <li><FontAwesomeIcon icon={faNodeJs} /> Node.js</li>
            <li>$ jQuery</li>
            <li>Prisma</li>
            <li>TailwindCSS</li>
            <li><FontAwesomeIcon icon={faBootstrap} /> Bootstrap</li>
            <li><FontAwesomeIcon icon={faHtml5} /> HTML5</li>
            <li><FontAwesomeIcon icon={faCss3} /> CSS3</li>
          </ul>
        </div>
        <div className='p-2 border border-techGreen rounded-md flex flex-col'>
          <div className='border-b border-b-techGreen flex gap-2 pb-2 mb-5'>
            <span className='rounded-full border border-techGreen h-3 w-3'></span>
            <span className='rounded-full border border-techGreen h-3 w-3'></span>
            <span className='rounded-full border border-techGreen h-3 w-3'></span>
          </div>
          <div className='border border-techGreen rounded-md w-11/12 place-self-center'>
            <div>
              <h3 className='font-headText text-greyWhite p-3 text-lg md:text-2xl'>I ALSO LOVE</h3>
              <ul className='mx-5 text-techGrey mb-5 text-sm md:text-lg lg:text-xl font-paraText'>
                <li className='mb-2'><FontAwesomeIcon className='text-techGreen pr-2' icon={faSliders}/>Producing, Mixing, and Mastering audio</li>
                <li className='mb-2'><FontAwesomeIcon className='text-techGreen pr-2' icon={faPersonSkiing}/>Skiing. Especially on the <Link target={"_blank"} className='text-techGreen underline' href={'https://media.bogusbasin.org/uploads/2022/11/09115523/Winter-_Trail_Map_Web-02-1-scaled.jpg'}>local mountain</Link></li>
                <li className='mb-2'><FontAwesomeIcon className='text-techGreen pr-2' icon={faPlaneDeparture}/>Traveling. Like. A lot</li>
                <li className='mb-2'><FontAwesomeIcon className='text-techGreen pr-2' icon={faWandSparkles}/>Pina Coladas, getting caught in the rain, etc.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About