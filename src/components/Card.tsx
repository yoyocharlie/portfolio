import React from 'react'
import Image from 'next/image'
import { ProjectCards } from '@/pages'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

interface CardsProps {
  id: number,
  name: string,
  blurb: string,
  github: string,
  image: string
}


  const Card: React.FC<CardsProps> = ({ id, name, blurb, github, image }) => {
  // const cardImages = require(`../../public/images/${image}`)

  return (
    <div className='bg-transparent border-4 border-techGreen p-2 shadow-[10px_10px_#64ffda] flex flex-col md:flex-row transition ease-in-out duration-200 xl:hover:-translate-y-4 md:hover:translate-y-[-8px] md:hover:translate-x-[-8px] md:hover:shadow-[18px_18px_#64ffda]'>
      <Image className='rounded-md md:mr-5 mb-2 shadow-md w-80' src={image} alt='project' width={400} height={400}/>
      <div className='flex flex-col'>
        <h3 className='font-headText mr-auto text-techGreen text-2xl md:text-3xl mb-5'>{name}</h3>
        <p className='font-paraText text-techGrey text-sm md:text-lg lg:text-xl max-w-[300px]'>{blurb}</p>
      </div>
      <div className='self-end mt-5 rounded-md'>
        <Link href={github} target='blank' className=''><FontAwesomeIcon className='text-greyWhite text-4xl' icon={faGithub} /></Link>
      </div>
    </div>
  )
}

export default Card