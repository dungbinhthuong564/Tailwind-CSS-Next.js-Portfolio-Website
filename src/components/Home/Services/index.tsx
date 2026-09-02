import React from 'react'
import Link from 'next/link'
import { Servicebox } from '@/app/api/data'
import { Icon } from '@iconify/react'
import Image from 'next/image'

const Services = () => {
  return (
    <section className='bg-section dark:bg-darklight' id='services'>
      <div className='container mx-auto max-w-6xl px-4'>
        <div
          className='flex gap-2 items-center justify-center'
          data-aos='fade-up'
          data-aos-delay='200'
          data-aos-duration='1000'>
          <span className='w-3 h-3 rounded-full bg-success'></span>
          <span className='font-medium text-midnight_text text-sm dark:text-white/50 uppercase tracking-wider'>
            Core Capabilities
          </span>
        </div>
        <h2
          className='sm:text-4xl text-[28px] leading-tight font-bold text-midnight_text md:text-center text-start pt-6 pb-16 md:w-4/6 w-full m-auto dark:text-white'
          data-aos='fade-up'
          data-aos-delay='200'
          data-aos-duration='1000'>
          Front-End Engineering Solutions for Modern Web Projects
        </h2>
        <div className='grid md:grid-cols-12 sm:grid-cols-8 grid-cols-1 gap-7'>
          {Servicebox.map((item, index) => (
            <div
              key={index}
              data-aos='fade-up'
              data-aos-delay={`${index * 200}`}
              data-aos-duration='1000'
              data-aos-offset='300'
              className='col-span-4 bg-white flex flex-col justify-between items-center text-center py-12 px-7 shadow-service rounded-xl gap-6 border border-border/40 dark:border-dark_border/50 dark:bg-darkmode hover:shadow-xl hover:-translate-y-1 transition-all duration-300'>
              <div className='w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center'>
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={36}
                  height={36}
                  className='w-9 h-9 bg-no-repeat inline-block bg-contain'
                />
              </div>
              <h3 className='text-xl font-bold text-midnight_text dark:text-white'>
                {item.title}
              </h3>
              <p className='dark:text-white/60 text-grey text-sm leading-relaxed'>
                {item.description}
              </p>
              <Link
                href='#portfolio'
                className='hover:text-blue-700 text-sm font-semibold text-primary group flex items-center gap-1 mt-2'>
                Explore Related Work
                <Icon
                  icon='solar:arrow-right-outline'
                  width='18'
                  height='18'
                  className='group-hover:translate-x-1 transition-transform'
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
