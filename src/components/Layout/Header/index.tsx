'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { headerData } from '../Header/Navigation/menuData'
import Logo from './Logo'
import HeaderLink from '../Header/Navigation/HeaderLink'
import MobileHeaderLink from '../Header/Navigation/MobileHeaderLink'
import ThemeToggler from './ThemeToggler'
import { Icon } from '@iconify/react/dist/iconify.js'
import { personalInfo } from '@/app/api/data'

const Header: React.FC = () => {
  const pathUrl = usePathname()
  const [navbarOpen, setNavbarOpen] = useState(false)
  const [sticky, setSticky] = useState(false)

  const mobileMenuRef = useRef<HTMLDivElement>(null)

  const handleScroll = () => {
    setSticky(window.scrollY >= 80)
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (
      mobileMenuRef.current &&
      !mobileMenuRef.current.contains(event.target as Node) &&
      navbarOpen
    ) {
      setNavbarOpen(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [navbarOpen])

  useEffect(() => {
    if (navbarOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [navbarOpen])

  return (
    <header
      className={`fixed h-24 top-0 py-1 z-50 w-full dark:bg-transparent transition-all duration-300 ${
        sticky
          ? 'shadow-lg bg-white/95 backdrop-blur-md dark:shadow-dark-md dark:bg-darklight/95!'
          : 'shadow-none bg-transparent'
      }`}>
      <div className='container mx-auto max-w-6xl flex items-center justify-between p-6'>
        <Logo />
        
        <nav className='hidden lg:flex grow items-center justify-center gap-7'>
          {headerData.map((item, index) => (
            <HeaderLink key={index} item={item} />
          ))}
        </nav>

        <div className='flex items-center gap-3'>
          {/* Theme Toggler (Dark/Light) */}
          <ThemeToggler />
          
          <a
            href={personalInfo.github}
            target='_blank'
            rel='noopener noreferrer'
            className='hidden sm:flex items-center gap-1.5 bg-transparent border border-border/80 dark:border-dark_border text-midnight_text dark:text-white px-3.5 py-2.5 rounded-xl hover:border-primary hover:text-primary transition-colors text-xs font-semibold'>
            <Icon icon='mdi:github' width='16' height='16' />
            GitHub
          </a>

          <Link
            href='/contact'
            className='hidden sm:flex items-center gap-1 bg-primary text-white px-4 py-2.5 rounded-xl hover:bg-blue-700 transition duration-300 text-xs font-semibold shadow-sm'>
            Get In Touch
          </Link>

          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className='block lg:hidden p-2 rounded-xl border border-border/60 dark:border-dark_border text-midnight_text dark:text-white'
            aria-label='Toggle mobile menu'>
            <span className='block w-6 h-0.5 bg-midnight_text dark:bg-white'></span>
            <span className='block w-6 h-0.5 bg-midnight_text dark:bg-white mt-1.5'></span>
            <span className='block w-6 h-0.5 bg-midnight_text dark:bg-white mt-1.5'></span>
          </button>
        </div>
      </div>

      {navbarOpen && (
        <div className='fixed top-0 left-0 w-full h-full bg-black/60 backdrop-blur-xs z-40' />
      )}

      <div
        ref={mobileMenuRef}
        className={`lg:hidden fixed top-0 right-0 h-full w-full bg-white dark:bg-darkmode shadow-2xl transform transition-transform duration-300 max-w-xs ${
          navbarOpen ? 'translate-x-0' : 'translate-x-full'
        } z-50 flex flex-col justify-between`}>
        <div>
          <div className='flex items-center justify-between p-5 border-b border-border/40 dark:border-dark_border/50'>
            <Logo />
            <button
              onClick={() => setNavbarOpen(false)}
              className='p-1 rounded-lg hover:bg-slate-100 dark:hover:bg-midnight_text text-midnight_text dark:text-white'
              aria-label='Close mobile menu'>
              <Icon icon='ic:round-close' className='text-2xl' />
            </button>
          </div>

          <nav className='flex flex-col items-start p-5 space-y-2'>
            {headerData.map((item, index) => (
              <div key={index} className='w-full' onClick={() => setNavbarOpen(false)}>
                <MobileHeaderLink item={item} />
              </div>
            ))}
          </nav>
        </div>

        <div className='p-5 border-t border-border/40 dark:border-dark_border/50 space-y-3'>
          <div className='flex items-center justify-between py-2 px-1'>
            <span className='text-xs font-semibold text-grey dark:text-white/60'>Appearance</span>
            <ThemeToggler />
          </div>

          <a
            href={personalInfo.github}
            target='_blank'
            rel='noopener noreferrer'
            className='bg-transparent border border-border dark:border-dark_border text-midnight_text dark:text-white px-4 py-3 rounded-xl flex items-center justify-center gap-2 text-sm font-semibold w-full'
            onClick={() => setNavbarOpen(false)}>
            <Icon icon='mdi:github' width='18' height='18' />
            GitHub Profile
          </a>

          <Link
            href='/contact'
            className='bg-primary text-white px-4 py-3 rounded-xl hover:bg-blue-700 text-center text-sm font-semibold block w-full shadow-md'
            onClick={() => setNavbarOpen(false)}>
            Contact Me
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
