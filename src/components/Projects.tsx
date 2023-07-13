import React from 'react'
import Image from 'next/image'
import Card from './Card'
import { ProjectCards } from '@/pages'

const Projects: React.FC<ProjectCards> = ({ cards }) => {

    const card = cards.map(data => {
      return (
        <Card
          key={data['id']}
          id={data['id']}
          name={data['name']}
          blurb={data['blurb']}
          github={data['github']}
          image={data['image']}
        />
      )
    })
  return (
    <div id='projects' className='pb-10 w-full relative bg-transparent flex flex-col items-center overflow-hidden'>
      <h1 className='font-headText text-techGreen text-3xl md:text-5xl mt-20 mb-14 md:self-start md:absolute md:left-36'>PROJECTS</h1>
      <div className='flex flex-col lg:grid xl:grid-cols-2 gap-10 mx-5 md:mx-20 md:mt-40'>
        {card}
      </div>
    </div>
  )
}

export default Projects