import React from 'react'
import Image from 'next/image'

interface CardData {
  key: string,
  name: string,
  blurb: string,
  github: string
}

const Card: React.FC<CardData> = ({ key, name, blurb, github }) => {


  return (
    <div className='bg-white md:ml-5 mb-10 p-5 rounded-md flex flex-col md:flex-row transition ease-in-out duration-200 md:hover:-translate-y-6 md:hover:shadow-2xl md:hover:scale-105 md:hover:cursor-pointer'>
    <Image className='rounded md:mr-5 mb-2 md:w-full md:h-full' src={name} alt='myTravels' width={300} height={300}/>
    <div className='flex flex-col mr-10'>
      <h3 className='font-headText text-amber text-2xl md:text-3xl mb-10'>{name}</h3>
      <p className='font-paraText text-md md:text-xl max-w-[300px]'>A photojournaling app created with React.js, JavaScript, TailwindCSS, & Firebase.</p>
    </div>
  </div>
  )
}

export default Card