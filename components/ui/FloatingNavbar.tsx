'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
import { navItems } from '@/data/constants'

const FloatingNavbar = () => {
  const [visible, setVisible] = useState(true)
  const { scrollYProgress } = useScroll()

  useMotionValueEvent(scrollYProgress, 'change', (current) => {
    if (typeof current === 'number') {
      const direction = current! - scrollYProgress.getPrevious()!

      if (scrollYProgress.get() < 0.05) {
        setVisible(true)
      } else {
        if (direction < 0) {
          setVisible(true)
        } else {
          setVisible(false)
        }
      }
    }
  })

  return (
    <AnimatePresence mode='wait'>
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={'flex gap-x-2 max-w-fit md:min-w-[70vw] lg:min-w-fit fixed z-[5000] top-10 inset-x-0 mx-auto px-10 py-5 rounded-lg border border-black/.1 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] items-center justify-center space-x-4'}
        style={{
          backdropFilter: "blur(16px) saturate(180%)",
          backgroundColor: "rgb(17, 25, 40)",
          borderRadius: "12px",
          border: "1px solid rgba(255, 255, 255, 0.125)",
        }}
      >
        {navItems.map((navItem, index) => (
          <Link
            key={`link=${index}`}
            href={navItem.link}
            className={'relative dark:text-neutral-50 items-center flex gap-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500'}
          >
            <span className='text-sm !cursor-pointer'>{navItem.name}</span>
          </Link>
        ))}
      </motion.div>
    </AnimatePresence>
  )
}

export default FloatingNavbar