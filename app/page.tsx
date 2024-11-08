import React from 'react'
import { navItems } from '@/data'
import Hero from '@/components/Hero'
import FloatingNavbar from '@/components/ui/FloatingNavbar'
import Grid from '@/components/Grid'
import RecentProjects from '@/components/RecentProjects'
import Clients from '@/components/Clients'
import Experience from '@/components/Experience'
import Footer from '@/components/Footer'
import Approach from '@/components/Approach'

const Home = () => {
  return (
    <main className='relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5'>
      <div className='max-w-7xl w-full'>
        <FloatingNavbar navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  )
}

export default Home