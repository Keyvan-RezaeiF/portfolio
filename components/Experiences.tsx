import React from 'react'
import { workExperiences } from '@/data/constants'
import ExperienceCard from './ui/ExperienceCard'

const Experiences = () => {
  return (
    <div className='py-20 w-full'>
      <h1 className='heading'>
        My <span className='text-purple'>work experience</span>
      </h1>
      <div className='w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10'>
        {workExperiences.map(experience => (
          <ExperienceCard
            key={experience.id}
            thumbnail={experience.thumbnail}
            title={experience.title}
            desc={experience.desc}
          />
        ))}
      </div>
    </div>
  )
}

export default Experiences