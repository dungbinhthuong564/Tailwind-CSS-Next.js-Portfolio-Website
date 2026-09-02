'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { personalInfo } from '@/app/api/data'
import { Icon } from '@iconify/react'

const Contactform = () => {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
    }, 4000)
  }

  return (
    <section className='overflow-x-hidden bg-darkmode dark:bg-darklight py-20' id='contact'>
      <div className='container mx-auto max-w-6xl px-4'>
        <div className='grid md:grid-cols-12 grid-cols-1 md:gap-10 gap-8 items-center'>
          <div
            className='md:col-span-6 col-span-12'
            data-aos='fade-right'
            data-aos-delay='200'
            data-aos-duration='1000'>
            <div className='flex gap-2 items-center justify-start'>
              <span className='w-3 h-3 rounded-full bg-success'></span>
              <span className='font-medium text-sm text-white/70 uppercase tracking-wider'>
                Get In Touch
              </span>
            </div>
            <h2 className='sm:text-4xl text-2xl leading-tight font-bold text-white py-6'>
              Let&apos;s discuss internship opportunities or collaborate on exciting projects!
            </h2>
            <p className='text-white/70 text-base leading-relaxed mb-8'>
              I am actively seeking a <strong className='text-white'>Front-end Intern</strong> position to apply my skills, gain practical engineering experience, and contribute to your team.
            </p>

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 pb-8 border-b border-dark_border'>
              <div className='p-4 rounded-xl bg-midnight_text/50 border border-dark_border/60'>
                <span className='text-white/50 text-xs font-semibold block uppercase tracking-wider mb-1'>Phone / Zalo</span>
                <Link href={`tel:${personalInfo.phone}`} className='text-white font-bold text-base hover:text-primary transition-colors flex items-center gap-2'>
                  <Icon icon='mdi:phone' className='text-primary' />
                  {personalInfo.phone}
                </Link>
              </div>

              <div className='p-4 rounded-xl bg-midnight_text/50 border border-dark_border/60'>
                <span className='text-white/50 text-xs font-semibold block uppercase tracking-wider mb-1'>Email</span>
                <Link href={`mailto:${personalInfo.email}`} className='text-white font-bold text-xs sm:text-sm hover:text-primary transition-colors flex items-center gap-2 break-all'>
                  <Icon icon='mdi:email' className='text-primary text-base shrink-0' />
                  {personalInfo.email}
                </Link>
              </div>

              <div className='p-4 rounded-xl bg-midnight_text/50 border border-dark_border/60 sm:col-span-2'>
                <span className='text-white/50 text-xs font-semibold block uppercase tracking-wider mb-1'>Location</span>
                <p className='text-white font-medium text-sm flex items-center gap-2'>
                  <Icon icon='mdi:map-marker' className='text-primary text-base' />
                  {personalInfo.location}
                </p>
              </div>
            </div>

            <div className='pt-6'>
              <p className='text-white/60 pb-3 text-xs uppercase tracking-wider font-semibold'>Social & Profiles</p>
              <div className='flex items-center flex-wrap gap-4'>
                <a
                  href={personalInfo.github}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='px-4 py-2 rounded-lg bg-midnight_text hover:bg-primary text-white text-xs font-semibold flex items-center gap-2 transition-all border border-dark_border'>
                  <Icon icon='mdi:github' width='18' height='18' />
                  GitHub ({personalInfo.nickname})
                </a>
                <a
                  href={personalInfo.facebook}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='px-4 py-2 rounded-lg bg-midnight_text hover:bg-blue-600 text-white text-xs font-semibold flex items-center gap-2 transition-all border border-dark_border'>
                  <Icon icon='mdi:facebook' width='18' height='18' />
                  Facebook Profile
                </a>
              </div>
            </div>
          </div>

          <div
            data-aos='fade-left'
            data-aos-delay='200'
            data-aos-duration='1000'
            className='md:col-span-6 col-span-12'>
            <div className='bg-white dark:bg-darkmode p-8 rounded-2xl border border-border/40 dark:border-dark_border shadow-2xl relative z-10'>
              <h3 className='text-2xl font-bold text-midnight_text dark:text-white mb-2'>
                Send a Message
              </h3>
              <p className='text-xs text-grey dark:text-white/60 mb-6'>
                Have a question, job proposal, or want to connect? Leave a note below.
              </p>

              {submitted ? (
                <div className='p-6 rounded-xl bg-green-500/10 border border-green-500/30 text-center space-y-2 animate-fadeIn'>
                  <div className='w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center mx-auto text-2xl'>
                    <Icon icon='mdi:check-bold' />
                  </div>
                  <h4 className='font-bold text-green-600 dark:text-green-400'>Thank you for reaching out!</h4>
                  <p className='text-xs text-green-700 dark:text-green-300'>
                    Your message has been received. I will reply to you as soon as possible!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className='space-y-4'>
                  <div className='grid grid-cols-2 gap-4'>
                    <input
                      required
                      className='text-midnight_text w-full text-sm bg-section/60 dark:bg-midnight_text/40 dark:border-dark_border dark:text-white px-4 py-3 border border-border rounded-xl focus:border-primary focus:outline-none placeholder:text-grey/60'
                      type='text'
                      placeholder='Your name'
                    />
                    <input
                      required
                      type='text'
                      className='text-midnight_text w-full text-sm bg-section/60 dark:bg-midnight_text/40 dark:border-dark_border dark:text-white px-4 py-3 border border-border rounded-xl focus:border-primary focus:outline-none placeholder:text-grey/60'
                      placeholder='Company / Org'
                    />
                  </div>
                  <div>
                    <input
                      required
                      type='email'
                      className='text-midnight_text w-full text-sm bg-section/60 dark:bg-midnight_text/40 dark:border-dark_border dark:text-white px-4 py-3 border border-border rounded-xl focus:border-primary focus:outline-none placeholder:text-grey/60'
                      placeholder='Email address (e.g. name@company.com)'
                    />
                  </div>
                  <div>
                    <textarea
                      required
                      rows={4}
                      className='text-midnight_text w-full text-sm bg-section/60 dark:bg-midnight_text/40 dark:border-dark_border dark:text-white px-4 py-3 border border-border rounded-xl focus:border-primary focus:outline-none placeholder:text-grey/60'
                      placeholder='Tell me about your team, internship opening, or project idea...'></textarea>
                  </div>
                  <button
                    className='w-full bg-primary hover:bg-blue-700 text-white font-semibold py-3.5 rounded-xl transition-all shadow-md shadow-primary/20 text-sm flex items-center justify-center gap-2'
                    type='submit'>
                    Send Message
                    <Icon icon='solar:plain-2-linear' width='18' height='18' />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contactform
