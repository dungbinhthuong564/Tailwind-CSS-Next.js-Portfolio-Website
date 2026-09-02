import React from 'react'
import Link from 'next/link'
import { personalInfo } from '@/app/api/data'
import { Icon } from '@iconify/react'

const Location = () => {
  return (
    <>
      <section className='bg-primary md:py-20 py-14'>
        <div className='container mx-auto max-w-6xl px-4'>
          <div className='grid md:grid-cols-2 grid-cols-1 gap-10 text-white'>
            <div className='p-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 space-y-4'>
              <div className='flex items-center gap-3'>
                <div className='w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-xl'>
                  <Icon icon='mdi:home-map-marker' />
                </div>
                <div>
                  <span className='text-xs uppercase tracking-wider text-white/70 font-semibold'>Primary Location</span>
                  <h3 className='text-2xl font-bold'>Long Binh, Dong Nai</h3>
                </div>
              </div>
              <p className='text-white/80 text-sm leading-relaxed'>
                Dong Nai Province, Vietnam. Open to on-site opportunities in Dong Nai, Thu Duc City, and Ho Chi Minh City, as well as remote positions.
              </p>
              <div className='pt-2 flex flex-col gap-2'>
                <Link href={`tel:${personalInfo.phone}`} className='text-white hover:text-white/80 text-sm font-semibold flex items-center gap-2'>
                  <Icon icon='mdi:phone' />
                  {personalInfo.phone}
                </Link>
                <Link href={`mailto:${personalInfo.email}`} className='text-white hover:text-white/80 text-sm font-semibold flex items-center gap-2 break-all'>
                  <Icon icon='mdi:email' />
                  {personalInfo.email}
                </Link>
              </div>
            </div>

            <div className='p-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 space-y-4'>
              <div className='flex items-center gap-3'>
                <div className='w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-xl'>
                  <Icon icon='mdi:school' />
                </div>
                <div>
                  <span className='text-xs uppercase tracking-wider text-white/70 font-semibold'>Academic Campus</span>
                  <h3 className='text-2xl font-bold'>FPT University HCM</h3>
                </div>
              </div>
              <p className='text-white/80 text-sm leading-relaxed'>
                Saigon Hi-Tech Park, Long Thanh My, Thu Duc City, Ho Chi Minh City. Software Engineering Department.
              </p>
              <div className='pt-2 flex flex-col gap-2'>
                <span className='text-white text-sm font-semibold flex items-center gap-2'>
                  <Icon icon='mdi:calendar-clock' />
                  Year 3 (2023 - Present)
                </span>
                <span className='text-white text-sm font-semibold flex items-center gap-2'>
                  <Icon icon='mdi:laptop' />
                  Major: Software Engineering
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Location
