'use client'

import React from 'react'
import { testimonials } from '@/data/constants'
import { InfiniteMovingCards } from './ui/InfiniteCards'
import Companies from './Companies'

const KindWords = () => {
  return (
    <section id='testimonials' className='pt-10 py-5 mt-12'>
      <h1 className='heading'>
        Kind words from
        <span className='text-purple'> clients/teammates</span>
      </h1>
      <div className='flex flex-col items-center max-lg:mt-10'>
        <div className='h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden'>
          <InfiniteMovingCards
            items={testimonials}
            direction='right'
            speed='normal'
          />
        </div>
        <Companies />
      </div>
    </section>
  )
}

export default KindWords