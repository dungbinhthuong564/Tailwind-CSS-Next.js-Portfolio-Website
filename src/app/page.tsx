import React from 'react'
import { Metadata } from 'next'
import Hero from '@/components/Home/Hero'
import Counter from '@/components/Home/Counter'
import Progresswork from '@/components/Home/WorkProgress'
import Services from '@/components/Home/Services'
import Portfolio from '@/components/SharedComponent/portfollio'
import Testimonial from '@/components/SharedComponent/Testimonial'
import Contactform from '@/components/Home/Contact'

export const metadata: Metadata = {
  title: 'An Trung Dũng | Front-End Developer Portfolio',
  description: 'Portfolio of An Trung Dũng - Front-End Developer, 3rd-year Software Engineering student at FPT University HCM. Showcasing projects in React, Next.js, Vite, Tailwind CSS, and RESTful APIs.',
}

export default function Home() {
  return (
    <main>
      <Hero />
      <Counter isColorMode={false} />
      <Progresswork isColorMode={false} />
      <Services />
      <Portfolio />
      <Testimonial />
      <Contactform />
    </main>
  )
}
