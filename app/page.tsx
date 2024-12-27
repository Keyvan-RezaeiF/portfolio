import React from 'react'
import Hero from '@/components/Hero'
// import FloatingNavbar from '@/components/ui/FloatingNavbar'
import Grid from '@/components/Grid'
import RecentProjects from '@/components/RecentProjects'
import KindWords from '@/components/KindWords'
import Experiences from '@/components/Experiences'
import Footer from '@/components/Footer'
import Approach from '@/components/Approach'

const Home = () => {
  return (
    <main className='relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5'>
      <div className='max-w-7xl w-full'>
        {/* <FloatingNavbar /> */}
        <Hero />
        <Grid />
        <RecentProjects />
        <KindWords />
        <Experiences />
        <Approach />
        <Footer />
      </div>
    </main>
  )
}

export default Home