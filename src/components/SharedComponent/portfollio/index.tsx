import React from 'react'
import PortfolioCard from '@/components/SharedComponent/portfollio/Portfolio-card'

const Portfolio = () => {
  return (
    <section id='portfolio' className='dark:bg-darkmode py-16'>
      <div className='text-center lg:px-0 px-8'>
        <div
          className='flex gap-2 items-center justify-center'
          data-aos='fade-right'
          data-aos-delay='200'
          data-aos-duration='1000'>
          <span className='w-3 h-3 rounded-full bg-success'></span>
          <span className='font-medium text-midnight_text text-sm dark:text-white/50 uppercase tracking-wider'>
            Featured Projects
          </span>
        </div>
        <h2
          className='sm:text-4xl text-[28px] leading-tight font-bold text-midnight_text text-center pt-6 pb-4 md:w-4/6 w-full m-auto dark:text-white'
          data-aos='fade-left'
          data-aos-delay='200'
          data-aos-duration='1000'>
          Explore My Completed Works & Open-Source Projects
        </h2>
        <div className='pb-12 inline-flex'>
          <p className='text-base font-normal text-grey max-w-2xl dark:text-white/60 text-center px-4'>
            A collection of web applications developed using React, Next.js, Vite, Tailwind CSS, REST APIs, and modern front-end engineering principles.
          </p>
        </div>
      </div>
      <PortfolioCard />
    </section>
  )
}

export default Portfolio
