import React from 'react'
import Image from 'next/image'
import { getImgPath } from '@/utils/image'
import { personalInfo } from '@/app/api/data'
import { Icon } from '@iconify/react'

const Testimonial = () => {
  return (
    <section
      className='scroll-mt-24 bg-section dark:bg-darklight border-none py-20'
      id='testimonials'>
      <div className='container mx-auto max-w-4xl px-4 text-center'>
        <div className='w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-8 text-3xl'>
          <Icon icon='ri:double-quotes-l' />
        </div>
        
        <div className='pb-10'>
          <blockquote className='font-medium md:text-2xl text-lg text-midnight_text dark:text-white leading-relaxed italic'>
            &ldquo;Passionate about writing clean, maintainable code and building high-performance web applications. Driven by curiosity, fast self-learning, and the ambition to deliver real value to product teams and end users.&rdquo;
          </blockquote>
        </div>

        <div className='flex flex-col items-center justify-center gap-1'>
          <strong className='text-xl font-bold text-midnight_text dark:text-primary'>
            {personalInfo.name}
          </strong>
          <p className='text-sm text-grey dark:text-white/60'>
            {personalInfo.role} • {personalInfo.university}
          </p>
        </div>
      </div>
    </section>
  )
}

export default Testimonial
