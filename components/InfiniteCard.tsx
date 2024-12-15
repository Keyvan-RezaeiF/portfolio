import Image from 'next/image'
import React from 'react'

interface InfiniteCardProps {
  quote: string;
  name: string;
  title: string;
  linkedinUrl: string;
  img: string;
}

const InfiniteCard = (props: InfiniteCardProps) => {
  const {
    name,
    img,
    quote,
    linkedinUrl,
    title,
  } = props

  return (
    <a
      href={linkedinUrl}
      target='_blank'
    >
      <li
        className='w-[90vw] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-800 p-5 md:p-16 md:w-[60vw]'
        style={{
          background: 'rgb(4,7,29)',
          backgroundColor: 'linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)',
        }}
      >
        <blockquote>
          <div
            aria-hidden='true'
            className='user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]'
          />
          <span className='relative z-20 text-sm md:text-lg leading-[1.6] text-white font-normal'>
            {quote}
          </span>
          <div className='relative z-20 mt-6 flex flex-row items-center'>
            <div className='me-3'>
              <Image
                className='rounded-full'
                src={img}
                alt={name}
                width={50}
                height={50}
              />
            </div>
            <span className='flex flex-col gap-1'>
              <span className='text-xl font-bold leading-[1.6] text-white'>
                {name}
              </span>
              <span className='text-sm leading-[1.6] text-white-200 font-normal'>
                {title}
              </span>
            </span>
          </div>
        </blockquote>
      </li>
    </a>
  )
}

export default InfiniteCard