'use client'

import React, { useEffect, useState, useRef } from 'react'
import { cn } from '@/utils'
import InfiniteCard from '../InfiniteCard'

type Item = {
  quote: string;
  name: string;
  title: string;
  linkedinUrl: string;
  img: string;
}

interface InfiniteMovingCardsProps {
  items: Item[];
  direction?: 'left' | 'right';
  speed?: 'fast' | 'normal' | 'slow';
  pauseOnHover?: boolean;
  className?: string;
}

export const InfiniteMovingCards = (props: InfiniteMovingCardsProps) => {
  const {
    items,
    direction = 'left',
    speed = 'fast',
    pauseOnHover = true,
    className,
  } = props
  const [start, setStart] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const scrollerRef = useRef<HTMLUListElement>(null)

  useEffect(() => {
    addAnimation()
  }, [])

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children)

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true)

        if (scrollerRef.current) scrollerRef.current.appendChild(duplicatedItem)
      })

      getDirection()
      getSpeed()
      setStart(true)
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === 'left') {
        containerRef.current.style.setProperty(
          '--animation-direction',
          'forwards'
        )
      } else {
        containerRef.current.style.setProperty(
          '--animation-direction',
          'reverse'
        )
      }
    }
  }

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === 'fast') {
        containerRef.current.style.setProperty('--animation-duration', '20s')
      } else if (speed === 'normal') {
        containerRef.current.style.setProperty('--animation-duration', '40s')
      } else {
        containerRef.current.style.setProperty('--animation-duration', '80s')
      }
    }
  }

  return (
    <div
      ref={containerRef}
      className={cn(
        'scroller relative z-20 w-screen overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]',
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          ' flex min-w-full shrink-0 gap-16 py-4 w-max flex-nowrap',
          start && 'animate-scroll ',
          pauseOnHover && 'hover:[animation-play-state:paused]'
        )}
      >
        {items.map((item, index) => (
          <InfiniteCard
            key={index}
            name={item.name}
            img={item.img}
            quote={item.quote}
            linkedinUrl={item.linkedinUrl}
            title={item.title}
          />
        ))}
      </ul>
    </div>
  )
}