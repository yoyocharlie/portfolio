import React from 'react'
import Image from 'next/image'
import { ProjectCards } from '@/pages'
import Link from 'next/link'

interface CardsProps {
  id: number,
  name: string,
  blurb: string,
  github: string,
  image: string
}


  const Card: React.FC<CardsProps> = ({ id, name, blurb, github, image }) => {
  const cardImages = require(`../../public/images/${image}`)

  return (
    <div className='bg-white md:ml-5 mb-10 p-5 rounded-md flex flex-col md:flex-row transition ease-in-out duration-200 xl:hover:-translate-y-6 md:hover:shadow-2xl xl:hover:scale-105'>
      <Image className='rounded md:mr-5 mb-2 shadow-md' src={cardImages.default.src} alt='myTravels' width={400} height={400}/>
      <div className='flex flex-col'>
        <h3 className='font-headText mr-auto text-amber text-2xl md:text-3xl mb-10'>{name}</h3>
        <p className='font-paraText text-md md:text-xl max-w-[300px]'>{blurb}</p>
      </div>
      <div className='self-end mt-10 border border-jet rounded-md'>
        <Link href={github} target='blank' className=''><Image className='w-10 h-10' src={require('../../public/images/github-mark.png')} alt={'github'} /></Link>
      </div>
    </div>
  )
}

export default Card