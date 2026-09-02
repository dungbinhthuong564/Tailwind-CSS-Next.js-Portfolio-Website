import React, { FC } from 'react'
import Link from 'next/link'
import Logo from '../Header/Logo'
import { personalInfo } from '@/app/api/data'
import { Icon } from '@iconify/react'

const Footer: FC = () => {
  return (
    <footer className='bg-darkmode relative z-1 border-t border-dark_border px-6'>
      <div className='container mx-auto max-w-6xl px-4'>
        <div className='grid md:grid-cols-12 grid-cols-1 sm:grid-cols-12'>
          <div className='md:col-span-5 sm:col-span-6 col-span-12 sm:border-r border-b border-solid border-dark_border flex items-center sm:border-b-0 py-10 shrink-0'>
            <div className='sm:text-start text-center w-full pr-0 sm:pr-8'>
              <div className='mb-6 flex sm:justify-start justify-center'>
                <Logo />
              </div>
              <p className='text-white/70 text-sm leading-relaxed mb-6'>
                Third-year Software Engineering student at FPT University. Passionate about modern Front-End Web Development, responsive design, and clean code architecture.
              </p>
              <Link
                href='#contact'
                className='inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-white font-medium hover:bg-blue-700 transition duration-300 text-sm'>
                Get In Touch
                <Icon icon='solar:arrow-right-outline' width='16' height='16' />
              </Link>
            </div>
          </div>

          <div className='md:col-span-4 sm:col-span-6 col-span-12 sm:flex items-center py-10 justify-center shrink-0 md:border-r border-b sm:border-b-0 border-solid border-dark_border px-0 sm:px-6'>
            <div className='flex flex-col md:items-start items-center w-full'>
              <span className='text-base font-bold text-white uppercase tracking-wider pb-4 inline-block'>
                Direct Contact
              </span>
              <div className='pb-4 sm:block flex flex-col items-center'>
                <p className='text-xs font-semibold text-white/50 uppercase'>Phone / Zalo</p>
                <Link
                  href={`tel:${personalInfo.phone}`}
                  className='text-lg font-bold text-white hover:text-primary transition-colors'>
                  {personalInfo.phone}
                </Link>
              </div>
              <div className='pb-4 sm:block flex flex-col items-center'>
                <p className='text-xs font-semibold text-white/50 uppercase'>Email Address</p>
                <Link
                  href={`mailto:${personalInfo.email}`}
                  className='text-sm font-semibold text-white/80 hover:text-primary transition-colors break-all'>
                  {personalInfo.email}
                </Link>
              </div>
              <div>
                <ul className='flex items-center gap-3 mt-2'>
                  <li>
                    <a
                      href={personalInfo.github}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='w-9 h-9 rounded-full bg-midnight_text flex items-center justify-center text-white/80 hover:text-white hover:bg-primary transition-colors'
                      aria-label='GitHub'>
                      <Icon icon='mdi:github' width='20' height='20' />
                    </a>
                  </li>
                  <li>
                    <a
                      href={personalInfo.facebook}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='w-9 h-9 rounded-full bg-midnight_text flex items-center justify-center text-white/80 hover:text-white hover:bg-blue-600 transition-colors'
                      aria-label='Facebook'>
                      <Icon icon='mdi:facebook' width='20' height='20' />
                    </a>
                  </li>
                  <li>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className='w-9 h-9 rounded-full bg-midnight_text flex items-center justify-center text-white/80 hover:text-white hover:bg-primary transition-colors'
                      aria-label='Email'>
                      <Icon icon='mdi:email' width='20' height='20' />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className='md:col-span-3 col-span-12 border-t md:border-none border-solid border-dark_border sm:flex items-center justify-end py-10 shrink-0 pl-0 sm:pl-6'>
            <div className='w-full sm:text-start text-center'>
              <span className='font-bold text-white pb-3 inline-block text-base uppercase tracking-wider'>
                Quick Navigation
              </span>
              <ul className='space-y-2 text-sm text-white/60'>
                <li>
                  <Link href='/' className='hover:text-primary transition-colors'>
                    Home & Overview
                  </Link>
                </li>
                <li>
                  <Link href='/about' className='hover:text-primary transition-colors'>
                    About & Education
                  </Link>
                </li>
                <li>
                  <Link href='/portfolio' className='hover:text-primary transition-colors'>
                    Projects & Portfolio
                  </Link>
                </li>
                <li>
                  <Link href='/services' className='hover:text-primary transition-colors'>
                    Skills & Services
                  </Link>
                </li>
                <li>
                  <Link href='/contact' className='hover:text-primary transition-colors'>
                    Contact & Inquiry
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='text-center gap-4 md:gap-0 flex-wrap p-6 border-t border-solid border-dark_border'>
        <div>
          <p className='text-xs text-white/50'>
            © {new Date().getFullYear()} <strong className='text-white'>{personalInfo.name}</strong> • Front-End Developer Portfolio.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
