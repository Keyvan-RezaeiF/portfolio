import { companies } from '@/data/constants'
import React from 'react'

const Companies = () => {
  return (
    <div className='flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10'>
      {companies.map(company => (
        <a
          key={company.id}
          href={company.link}
          target='_blank'
        >
          <div className='flex md:max-w-60 max-w-32 gap-2'>
            <img
              src={company.img}
              alt={company.name}
            />
          </div>
        </a>
      ))}
    </div>
  )
}

export default Companies