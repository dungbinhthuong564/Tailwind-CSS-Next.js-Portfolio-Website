import React from 'react'
import Link from 'next/link'
import { personalInfo } from '@/app/api/data'
import { Icon } from '@iconify/react'

const ContactInfo = () => {
  return (
    <>
      <section className='dark:bg-darkmode pt-8 md:pb-16 pb-12'>
        <div className='container mx-auto max-w-6xl px-4'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            <div className='p-8 rounded-2xl bg-white dark:bg-darklight border border-border/60 dark:border-dark_border shadow-md flex flex-col items-center text-center'>
              <div className='w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center text-2xl mb-4'>
                <Icon icon='mdi:email-outline' />
              </div>
              <h3 className='text-lg font-bold text-midnight_text dark:text-white mb-2'>
                Email Address
              </h3>
              <p className='text-xs text-grey dark:text-white/60 mb-4'>
                Feel free to email me directly for job inquiries or collaborations.
              </p>
              <Link
                href={`mailto:${personalInfo.email}`}
                className='text-sm font-semibold text-primary hover:underline break-all'>
                {personalInfo.email}
              </Link>
            </div>

            <div className='p-8 rounded-2xl bg-white dark:bg-darklight border border-border/60 dark:border-dark_border shadow-md flex flex-col items-center text-center'>
              <div className='w-14 h-14 rounded-2xl bg-green-500/10 text-green-500 flex items-center justify-center text-2xl mb-4'>
                <Icon icon='mdi:phone-outline' />
              </div>
              <h3 className='text-lg font-bold text-midnight_text dark:text-white mb-2'>
                Phone & Zalo
              </h3>
              <p className='text-xs text-grey dark:text-white/60 mb-4'>
                Available for phone calls and direct messages on Zalo.
              </p>
              <Link
                href={`tel:${personalInfo.phone}`}
                className='text-sm font-semibold text-green-600 dark:text-green-400 hover:underline'>
                {personalInfo.phone}
              </Link>
            </div>

            <div className='p-8 rounded-2xl bg-white dark:bg-darklight border border-border/60 dark:border-dark_border shadow-md flex flex-col items-center text-center'>
              <div className='w-14 h-14 rounded-2xl bg-blue-500/10 text-blue-500 flex items-center justify-center text-2xl mb-4'>
                <Icon icon='mdi:map-marker-outline' />
              </div>
              <h3 className='text-lg font-bold text-midnight_text dark:text-white mb-2'>
                Current Location
              </h3>
              <p className='text-xs text-grey dark:text-white/60 mb-4'>
                Based in Long Binh, Dong Nai & studying in Ho Chi Minh City.
              </p>
              <span className='text-sm font-semibold text-midnight_text dark:text-white'>
                {personalInfo.location}
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactInfo
