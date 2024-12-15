'use client'

import React from 'react'
import { approaches } from '@/data/constants'
import { CanvasRevealEffect } from './ui/CanvasRevealEffect'
import ApproachCard from './ui/ApproachCard'
import AceternityIcon from './ui/AceternityIcon'

const Approach = () => {
  return (
    <section className='w-full py-20'>
      <h1 className='heading'>
        My <span className='text-purple'>approach</span>
      </h1>
      <div className='my-20 flex flex-col lg:flex-row items-center justify-center w-full gap-4'>
        {approaches.map(approach => (
          <ApproachCard
            key={approach.id}
            title={approach.title}
            icon={<AceternityIcon order={approach.order} />}
            des={approach.des}
          >
            <CanvasRevealEffect
              animationSpeed={approach.animationSpeed}
              containerClassName={approach.containerClassName}
              colors={approach.colors}
              dotSize={approach.dotSize}
            />
          </ApproachCard>
        ))}
      </div>
    </section>
  )
}

export default Approach
