import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { portfolioinfo } from '@/app/api/data'
import { Icon } from '@iconify/react'

const PortfolioList = () => {
  return (
    <section id='portfolio' className='md:pb-24 pb-16 pt-8 dark:bg-darkmode'>
      <div className='container mx-auto max-w-6xl px-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {portfolioinfo.map((item, index) => (
            <div
              key={index}
              className='bg-white dark:bg-darklight rounded-2xl overflow-hidden border border-border/60 dark:border-dark_border shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col group'>
              <div className='relative h-60 w-full overflow-hidden bg-slate-100 dark:bg-midnight_text/50'>
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className='object-cover group-hover:scale-105 transition-transform duration-500'
                />
                <div className='absolute top-4 right-4 z-10'>
                  <span className='px-3 py-1 text-xs font-bold rounded-full bg-white/95 dark:bg-darkmode/95 text-primary border border-primary/20 backdrop-blur-md shadow'>
                    {item.date}
                  </span>
                </div>
              </div>

              <div className='p-7 flex-1 flex flex-col justify-between'>
                <div>
                  <div className='flex items-center justify-between mb-2'>
                    <span className='text-xs font-bold text-primary uppercase tracking-wider'>
                      {item.role}
                    </span>
                  </div>

                  <h3 className='text-2xl font-bold text-midnight_text dark:text-white group-hover:text-primary transition-colors'>
                    {item.title}
                  </h3>
                  
                  <p className='text-sm text-secondary dark:text-Sky-blue-mist font-semibold mt-1 mb-4'>
                    {item.info}
                  </p>

                  <p className='text-sm text-grey dark:text-white/70 leading-relaxed mb-6'>
                    {item.description}
                  </p>

                  <div className='flex flex-wrap gap-2 mb-6'>
                    {item.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className='text-xs font-medium px-2.5 py-1 rounded-md bg-section dark:bg-midnight_text text-midnight_text dark:text-white/80 border border-border/40 dark:border-dark_border/40'>
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className='pt-4 border-t border-border/40 dark:border-dark_border/50 flex items-center justify-between'>
                  <a
                    href={item.github}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='py-2.5 px-4 rounded-lg bg-primary hover:bg-blue-700 text-white text-xs font-bold flex items-center gap-2 transition-colors shadow-sm'>
                    <Icon icon='mdi:github' width='18' height='18' />
                    View Repository on GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PortfolioList
