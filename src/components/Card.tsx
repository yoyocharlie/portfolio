import React from 'react'
import Image from 'next/image'
import { ProjectCards } from '@/pages'

interface CardsProps {
  id: number,
  name: string,
  blurb: string,
  github: string,
  image: string
}


  const Card: React.FC<CardsProps> = ({ id, name, blurb, github, image }) => {
  const cardImages = require(`../../public/images/${image}`)
  console.log(cardImages.default.src)

  return (
    <div className='bg-white md:ml-5 mb-10 p-5 rounded-md flex flex-col md:flex-row transition ease-in-out duration-200 xl:hover:-translate-y-6 md:hover:shadow-2xl xl:hover:scale-105 xl:hover:cursor-pointer'>
    <Image className='rounded md:mr-5 mb-2 md:w-full md:h-full' src={cardImages.default.src} alt='myTravels' width={300} height={300}/>
    <div className='flex flex-col mr-10'>
      <h3 className='font-headText text-amber text-2xl md:text-3xl mb-10'>{name}</h3>
      <p className='font-paraText text-md md:text-xl max-w-[300px]'>{blurb}</p>
    </div>
  </div>
  )
}

export default Card