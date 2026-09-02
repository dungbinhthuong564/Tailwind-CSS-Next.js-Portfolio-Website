'use client'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Icon } from '@iconify/react'

const ThemeToggler = () => {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className='w-9 h-9 rounded-xl border border-border/50 dark:border-dark_border bg-slate-100 dark:bg-midnight_text/40 animate-pulse' />
    )
  }

  const isDark = resolvedTheme === 'dark'

  return (
    <button
      aria-label='Toggle theme'
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className='relative flex items-center justify-center w-10 h-10 rounded-xl border border-border/60 dark:border-dark_border bg-slate-50 dark:bg-darklight text-midnight_text dark:text-white hover:bg-slate-100 dark:hover:bg-midnight_text transition-all duration-300 shadow-xs group'
      title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}>
      {isDark ? (
        <Icon
          icon='solar:sun-bold-duotone'
          className='w-5 h-5 text-amber-400 group-hover:rotate-45 transition-transform duration-300'
        />
      ) : (
        <Icon
          icon='solar:moon-bold-duotone'
          className='w-5 h-5 text-midnight_text group-hover:-rotate-12 transition-transform duration-300'
        />
      )}
    </button>
  )
}

export default ThemeToggler
