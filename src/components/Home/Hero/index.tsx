'use client'
import { getImgPath } from '@/utils/image'
import Image from 'next/image'
import Link from 'next/link'
import { personalInfo } from '@/app/api/data'
import { Icon } from '@iconify/react'

const Hero = () => {
  return (
    <section className='relative md:pt-44 pt-28 bg-white dark:bg-darklight bg-cover text-white' id='home'>
      <div className='container mx-auto max-w-6xl px-4 grid grid-cols-12 gap-4 relative z-10'>
        <div
          className='md:col-span-7 col-span-12 p-4 md:px-4 px-0 space-y-5 flex flex-col items-start justify-center'
          data-aos='fade-right'
          data-aos-delay='200'
          data-aos-duration='1000'>
          <div className='inline-flex gap-2 items-center px-3 py-1.5 rounded-full bg-success/10 border border-success/30'>
            <span className='w-2.5 h-2.5 rounded-full bg-success animate-pulse'></span>
            <span className='font-medium text-success text-xs sm:text-sm'>
              {personalInfo.status}
            </span>
          </div>

          <h1 className='text-midnight_text font-bold dark:text-white text-3xl sm:text-4xl md:text-5xl md:leading-[1.18]'>
            Hi, I&apos;m <span className='text-primary'>{personalInfo.name}</span>
            <br />
            <span className='text-2xl sm:text-3xl md:text-4xl font-semibold text-secondary dark:text-Sky-blue-mist'>
              {personalInfo.role}
            </span>
          </h1>

          <p className='text-grey dark:text-white/75 text-base sm:text-lg font-normal leading-relaxed max-w-xl'>
            {personalInfo.bio}
          </p>

          <div className='flex flex-wrap items-center gap-3 pt-2'>
            <a
              href='#portfolio'
              className='py-3 bg-primary text-white rounded-lg hover:bg-blue-700 transition duration-300 px-6 font-medium shadow-md shadow-primary/20 flex items-center gap-2'>
              View Projects
              <Icon icon='solar:arrow-right-outline' width='20' height='20' />
            </a>
            <a
              href='#contact'
              className='py-3 bg-transparent border border-primary text-primary hover:bg-primary hover:text-white dark:border-primary/50 dark:hover:border-primary transition duration-300 px-6 rounded-lg font-medium'>
              Contact Me
            </a>
            <a
              href={personalInfo.github}
              target='_blank'
              rel='noopener noreferrer'
              className='py-3 bg-slate-100 hover:bg-slate-200 dark:bg-midnight_text/80 dark:hover:bg-midnight_text text-midnight_text dark:text-white transition duration-300 px-4 rounded-lg flex items-center gap-2 text-sm font-medium'>
              <Icon icon='mdi:github' width='20' height='20' />
              GitHub
            </a>
          </div>

          <div className='flex flex-wrap items-center pt-6 gap-6 border-t border-border/40 dark:border-dark_border/50 w-full'>
            <div className='flex items-center gap-2 text-xs sm:text-sm text-grey dark:text-white/60'>
              <Icon icon='mdi:school' className='text-primary text-lg' />
              <span>{personalInfo.university}</span>
            </div>
            <div className='flex items-center gap-2 text-xs sm:text-sm text-grey dark:text-white/60'>
              <Icon icon='mdi:map-marker' className='text-primary text-lg' />
              <span>{personalInfo.location}</span>
            </div>
          </div>
        </div>

        <div className="md:col-span-5 col-span-12 relative flex items-center justify-center before:absolute before:content-[''] before:bg-[url('/images/hero/line-leyar.svg')] before:bg-no-repeat before:left-1/2 before:top-0 before:h-24 before:w-52 before:-z-10 before:translate-x-70% before:-translate-y-40% lg:before:inline-block before:hidden after:absolute after:content-[''] after:bg-[url('/images/hero/round-leyar.svg')] after:bg-no-repeat xl:after:inline-block after:hidden after:left-0 after:bottom-0 after:h-6.25 after:w-6.25 after:-z-10 after:-translate-x-1/2 after:translate-y-1/2">
          <div className='relative w-full max-w-md p-6 bg-white/70 dark:bg-darkmode/70 backdrop-blur-md rounded-2xl border border-border/50 dark:border-dark_border shadow-xl'>
            <div className='flex items-center justify-between pb-4 border-b border-border/40 dark:border-dark_border/40'>
              <div className='flex items-center gap-2'>
                <span className='w-3 h-3 rounded-full bg-red-400'></span>
                <span className='w-3 h-3 rounded-full bg-yellow-400'></span>
                <span className='w-3 h-3 rounded-full bg-green-400'></span>
              </div>
              <span className='text-xs font-mono text-grey dark:text-white/40'>developer_profile.tsx</span>
            </div>
            
            <div className='py-4 font-mono text-xs sm:text-sm space-y-2 text-midnight_text dark:text-white/90'>
              <p><span className='text-purple-500 font-bold'>const</span> <span className='text-blue-500'>developer</span> = &#123;</p>
              <p className='pl-4'><span className='text-indigo-400'>name</span>: <span className='text-emerald-500 dark:text-emerald-400'>&apos;An Trung Dũng&apos;</span>,</p>
              <p className='pl-4'><span className='text-indigo-400'>role</span>: <span className='text-emerald-500 dark:text-emerald-400'>&apos;Front-End Developer&apos;</span>,</p>
              <p className='pl-4'><span className='text-indigo-400'>education</span>: <span className='text-emerald-500 dark:text-emerald-400'>&apos;FPT University (Year 3)&apos;</span>,</p>
              <p className='pl-4'><span className='text-indigo-400'>stack</span>: [</p>
              <p className='pl-8 text-amber-500 dark:text-amber-300'>&apos;React&apos;, &apos;Next.js&apos;, &apos;Vite&apos;, &apos;TailwindCSS&apos;, &apos;TypeScript&apos;</p>
              <p className='pl-4'>],</p>
              <p className='pl-4'><span className='text-indigo-400'>seeking</span>: <span className='text-emerald-500 dark:text-emerald-400'>&apos;Front-End Internship&apos;</span>,</p>
              <p className='pl-4'><span className='text-indigo-400'>openToWork</span>: <span className='text-blue-400 font-bold'>true</span></p>
              <p>&#125;;</p>
            </div>

            <div className='mt-4 pt-3 border-t border-border/40 dark:border-dark_border/40 flex items-center justify-between text-xs text-grey dark:text-white/50'>
              <span>🚀 5+ Projects Completed</span>
              <span className='text-success font-semibold'>● Ready to contribute</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
