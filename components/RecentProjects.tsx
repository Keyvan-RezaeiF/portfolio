import React from 'react'
import { FaLocationArrow } from 'react-icons/fa6'
import { projects } from '@/data/constants'
import { CardBody, CardContainer, CardItem } from './ui/3dCard'
import Link from 'next/link'

const RecentProjects = () => {
  return (
    <div
      id='projects'
      className='pt-10 pb-5'
    >
      <h1 className='heading'>
        A small selection of {' '}
        <span className='text-purple'>recent projects</span>
      </h1>
      <div className='flex flex-wrap items-center justify-center p-4 gap-16 mt-10'>
        {projects.map(project => (
          <Link
            href={project.link}
            target='_blank'
            key={project.id}
          >
            <div className='lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]'>
              <CardContainer>
                <CardBody>
                  <CardItem
                    as='div'
                    className='mx-auto relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10'
                    translateZ={40}
                  >
                    <div
                      className='relative w-full h-full overflow-hidden lg:rounded-3xl'
                      style={{ backgroundColor: '#13162D' }}
                    >
                      <img
                        src='/bg.png'
                        alt='bgimg'
                      />
                    </div>
                    <img
                      src={project.img}
                      alt='cover'
                      className='z-10 absolute bottom-0'
                    />
                  </CardItem>
                  <CardItem
                    as='h1'
                    className='mx-auto font-bold lg:text-2xl md:text-xl text-base line-clamp-1'
                    translateZ={40}
                  >
                    {project.title}
                  </CardItem>
                  <CardItem
                    as='p'
                    className='text-center color-[#BEC1DD] my-[1vh] mx-0 lg:text-xl lg:font-normal font-light text-sm line-clamp-2'
                    translateZ={40}
                  >
                    {project.des}
                  </CardItem>
                  <CardItem
                    as='div'
                    className='flex items-center justify-between mt-7 mb-3 mx-auto'
                    translateZ={40}
                  >
                    <div className='flex items-center'>
                      {project.iconLists.map((icon, index) => (
                        <div
                          key={index}
                          className='border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center'
                          style={{
                            transform: `translateX(-${5 * index + 2}px)`,
                          }}
                        >
                          <img
                            src={icon}
                            alt='icon5'
                            className='p-2'
                          />
                        </div>
                      ))}
                    </div>
                    <div className='flex justify-center items-center'>
                      <p className='flex lg:text-xl md:text-xs text-sm text-purple'>
                        Check Live Site
                      </p>
                      <FaLocationArrow
                        className='ms-3'
                        color='#CBACF9'
                      />
                    </div>
                  </CardItem>
                </CardBody>
              </CardContainer>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default RecentProjects