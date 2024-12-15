'use client'

import { useEffect } from 'react'
import { motion, stagger, useAnimate } from 'framer-motion'
import { cn } from '@/utils'

interface TextGenerateEffectProps {
  words: string;
  className?: string;
}

const TextGenerateEffect = (props: TextGenerateEffectProps) => {
  const {
    words,
    className,
  } = props
  const [scope, animate] = useAnimate()
  const wordsArray = words.split(' ')

  useEffect(() => {
    animate(
      'span',
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.2),
      }
    )
  }, [animate])

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, index) => {
          return (
            <motion.span
              key={word + index}
              className={` ${index > 3 ? 'text-purple' : 'dark:text-white text-black'} opacity-0`}
            >
              {word}{' '}
            </motion.span>
          )
        })}
      </motion.div>
    )
  }

  return (
    <div className={cn('font-bold', className)}>
      <div className='my-4'>
        <div className=' dark:text-white text-black leading-snug tracking-wide'>
          {renderWords()}
        </div>
      </div>
    </div>
  )
}

export default TextGenerateEffect