'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Progress as ProgressData, personalInfo, educationList, activitiesList, skillsList } from '@/app/api/data'
import { getImgPath } from '@/utils/image'
import { Icon } from '@iconify/react'

interface ProgressItem {
  title: string
  Progress: number
}

const Progresswork = ({ isColorMode }: { isColorMode: Boolean }) => {
  const [progressValues, setProgressValues] = useState<ProgressItem[]>([])

  useEffect(() => {
    setProgressValues(ProgressData)
  }, [])

  return (
    <section
      className={`scroll-mt-25 ${
        isColorMode
          ? 'dark:bg-darklight bg-section'
          : 'dark:bg-darkmode bg-white'
      }`}
      id='about'>
      <div className='container mx-auto max-w-6xl px-4'>
        <div className='grid md:grid-cols-12 items-center gap-10'>
          <div className='md:col-span-5' data-aos='fade-right' data-aos-delay='200' data-aos-duration='1000'>
            <div className='space-y-6'>
              <div className='p-6 rounded-2xl bg-white dark:bg-darklight border border-border/60 dark:border-dark_border shadow-lg'>
                <div className='flex items-center gap-3 pb-4 border-b border-border/40 dark:border-dark_border/50'>
                  <div className='w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center text-2xl'>
                    <Icon icon='mdi:school-outline' />
                  </div>
                  <div>
                    <h4 className='text-lg font-bold text-midnight_text dark:text-white'>Education</h4>
                    <p className='text-xs text-grey dark:text-white/50'>Academic Journey</p>
                  </div>
                </div>
                <div className='mt-4 space-y-4'>
                  {educationList.map((edu, idx) => (
                    <div key={idx} className='relative pl-4 border-l-2 border-primary/40'>
                      <span className='text-xs font-semibold text-primary px-2 py-0.5 rounded bg-primary/10 inline-block mb-1'>{edu.time}</span>
                      <h5 className='text-sm font-bold text-midnight_text dark:text-white'>{edu.school}</h5>
                      <p className='text-xs text-grey dark:text-white/70 font-medium'>{edu.degree}</p>
                      <p className='text-xs text-grey/80 dark:text-white/50 mt-1'>{edu.details}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className='p-5 rounded-2xl bg-white dark:bg-darklight border border-border/60 dark:border-dark_border shadow-md'>
                <div className='flex items-center gap-3'>
                  <div className='w-10 h-10 rounded-xl bg-red-500/10 text-red-500 flex items-center justify-center text-xl'>
                    <Icon icon='mdi:heart-pulse' />
                  </div>
                  <div>
                    <span className='text-xs text-red-500 font-semibold uppercase tracking-wider'>Activity</span>
                    <h5 className='text-sm font-bold text-midnight_text dark:text-white'>{activitiesList[0].title}</h5>
                    <p className='text-xs text-grey dark:text-white/60'>{activitiesList[0].time} • {activitiesList[0].description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className='md:col-span-7'
            data-aos='fade-left'
            data-aos-delay='200'
            data-aos-duration='1000'>
            <div className='flex gap-2 items-center'>
              <span className='w-3 h-3 rounded-full bg-success'></span>
              <span className='font-medium text-midnight_text text-sm dark:text-white/50 uppercase tracking-wider'>
                About Me & Skills
              </span>
            </div>
            <h2 className='pt-6 pb-4 text-midnight_text font-bold dark:text-white text-3xl sm:text-4xl leading-tight'>
              Passionate about Building Responsive, Modern Web Experiences
            </h2>
            <p className='text-grey dark:text-white/70 text-base leading-relaxed mb-6'>
              I am a 3rd-year Software Engineering student at <strong className='text-midnight_text dark:text-white'>{personalInfo.university}</strong>. I specialize in developing responsive, accessible, and dynamic interfaces with modern JavaScript, React, Next.js, and Tailwind CSS.
            </p>

            <div className='grid sm:grid-cols-2 gap-3 mb-8'>
              {skillsList.map((category, idx) => (
                <div key={idx} className='p-3.5 rounded-xl bg-section/70 dark:bg-midnight_text/40 border border-border/40 dark:border-dark_border/50'>
                  <span className='text-xs font-bold text-primary block mb-2'>{category.category}</span>
                  <div className='flex flex-wrap gap-1.5'>
                    {category.skills.map((skill, sIdx) => (
                      <span key={sIdx} className='text-[11px] font-medium px-2 py-0.5 rounded bg-white dark:bg-darkmode text-midnight_text dark:text-white/80 border border-border/30 dark:border-dark_border/40'>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className='block mx-auto pt-2'>
              <h4 className='text-sm font-bold uppercase tracking-wider text-midnight_text dark:text-white mb-4'>
                Technical Proficiency
              </h4>
              {progressValues.map((item, index) => (
                <div
                  key={index}
                  className='progress_bar_item flex flex-wrap mb-4'>
                  <div className='flex-1 w-auto text-xs sm:text-sm font-semibold text-midnight_text dark:text-white/80 mb-1.5'>
                    {item.title}
                  </div>
                  <div className='item_value shrink text-xs sm:text-sm font-bold text-primary mb-1.5'>
                    {item.Progress}%
                  </div>
                  <div className='relative h-2 w-full bg-border/40 dark:bg-dark_border rounded-full overflow-hidden'>
                    <div
                      className='progress absolute left-0 top-0 bottom-0 h-full bg-gradient-to-r from-primary to-blue-400 rounded-full transition-all duration-1000 ease-out'
                      style={{ width: `${item.Progress}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Progresswork
