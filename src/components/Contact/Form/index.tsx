'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { getImgPath } from '@/utils/image'
import { Icon } from '@iconify/react'

const ContactForm = () => {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <>
      <section className='dark:bg-darkmode md:pb-24 pb-16'>
        <div className='container mx-auto max-w-6xl px-4'>
          <div className='grid md:grid-cols-12 grid-cols-1 gap-10 items-center'>
            <div className='md:col-span-6 col-span-12'>
              <div className='flex gap-2 items-center mb-2'>
                <span className='w-3 h-3 rounded-full bg-success'></span>
                <span className='font-medium text-xs text-midnight_text dark:text-white/60 uppercase tracking-wider'>
                  Inquiry Form
                </span>
              </div>
              <h2 className='text-3xl sm:text-4xl font-bold mb-4 text-midnight_text dark:text-white leading-tight'>
                Send a Message or Internship Offer
              </h2>
              <p className='text-sm text-grey dark:text-white/70 mb-8 leading-relaxed'>
                Whether you have an internship position, a freelance web project, or simply want to connect, please fill out the form below.
              </p>

              {sent ? (
                <div className='p-6 rounded-2xl bg-green-500/10 border border-green-500/30 text-center space-y-2'>
                  <div className='w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center mx-auto text-2xl'>
                    <Icon icon='mdi:check-bold' />
                  </div>
                  <h4 className='font-bold text-green-600 dark:text-green-400'>Message Sent Successfully!</h4>
                  <p className='text-xs text-green-700 dark:text-green-300'>
                    Thank you for reaching out. I will respond to your message shortly!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className='space-y-4'>
                  <div className='grid sm:grid-cols-2 gap-4'>
                    <div>
                      <label className='text-xs font-semibold text-midnight_text dark:text-white/80 block mb-1.5'>
                        Your Name *
                      </label>
                      <input
                        required
                        type='text'
                        placeholder='Full name'
                        className='w-full text-sm px-4 py-3 rounded-xl border border-border/80 dark:border-dark_border dark:bg-darklight dark:text-white focus:border-primary focus:outline-none'
                      />
                    </div>
                    <div>
                      <label className='text-xs font-semibold text-midnight_text dark:text-white/80 block mb-1.5'>
                        Email Address *
                      </label>
                      <input
                        required
                        type='email'
                        placeholder='name@domain.com'
                        className='w-full text-sm px-4 py-3 rounded-xl border border-border/80 dark:border-dark_border dark:bg-darklight dark:text-white focus:border-primary focus:outline-none'
                      />
                    </div>
                  </div>

                  <div>
                    <label className='text-xs font-semibold text-midnight_text dark:text-white/80 block mb-1.5'>
                      Topic / Subject
                    </label>
                    <select className='w-full text-sm px-4 py-3 rounded-xl border border-border/80 dark:border-dark_border dark:bg-darklight dark:text-white focus:border-primary focus:outline-none'>
                      <option value='internship'>Front-End Internship Opportunity</option>
                      <option value='freelance'>Web Development Project</option>
                      <option value='collaboration'>Open-Source Collaboration</option>
                      <option value='other'>General Inquiry / Networking</option>
                    </select>
                  </div>

                  <div>
                    <label className='text-xs font-semibold text-midnight_text dark:text-white/80 block mb-1.5'>
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder='Write your message here...'
                      className='w-full text-sm px-4 py-3 rounded-xl border border-border/80 dark:border-dark_border dark:bg-darklight dark:text-white focus:border-primary focus:outline-none'></textarea>
                  </div>

                  <button
                    type='submit'
                    className='w-full py-3.5 bg-primary hover:bg-blue-700 text-white font-semibold rounded-xl transition-all shadow-md shadow-primary/20 text-sm flex items-center justify-center gap-2'>
                    Send Message
                    <Icon icon='solar:plain-2-linear' width='18' height='18' />
                  </button>
                </form>
              )}
            </div>

            <div className='md:col-span-6 col-span-12'>
              <div className='p-8 rounded-2xl bg-white dark:bg-darklight border border-border/60 dark:border-dark_border shadow-xl space-y-6'>
                <h3 className='text-xl font-bold text-midnight_text dark:text-white'>
                  Why connect with me?
                </h3>
                
                <div className='space-y-4 text-sm text-grey dark:text-white/75'>
                  <div className='flex items-start gap-3'>
                    <div className='w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5'>
                      <Icon icon='mdi:lightning-bolt' />
                    </div>
                    <div>
                      <h4 className='font-bold text-midnight_text dark:text-white'>Fast Learner & Adaptive</h4>
                      <p className='text-xs mt-0.5 text-grey dark:text-white/60'>Quickly master new frameworks, libraries, and codebase standards.</p>
                    </div>
                  </div>

                  <div className='flex items-start gap-3'>
                    <div className='w-8 h-8 rounded-lg bg-green-500/10 text-green-500 flex items-center justify-center shrink-0 mt-0.5'>
                      <Icon icon='mdi:code-braces' />
                    </div>
                    <div>
                      <h4 className='font-bold text-midnight_text dark:text-white'>Clean, Modern Code</h4>
                      <p className='text-xs mt-0.5 text-grey dark:text-white/60'>Proficient in React, Next.js, Tailwind CSS, TypeScript basics, and RESTful API integration.</p>
                    </div>
                  </div>

                  <div className='flex items-start gap-3'>
                    <div className='w-8 h-8 rounded-lg bg-purple-500/10 text-purple-500 flex items-center justify-center shrink-0 mt-0.5'>
                      <Icon icon='mdi:account-group' />
                    </div>
                    <div>
                      <h4 className='font-bold text-midnight_text dark:text-white'>Team Player & Dedicated</h4>
                      <p className='text-xs mt-0.5 text-grey dark:text-white/60'>Proven collaborative experience with GitHub in team projects like AI Study Hub.</p>
                    </div>
                  </div>
                </div>

                <div className='pt-4 border-t border-border/40 dark:border-dark_border/50'>
                  <span className='text-xs font-semibold text-primary block mb-1'>RESPONSE TIME</span>
                  <p className='text-xs text-grey dark:text-white/60'>Usually within 24 hours via Email or Phone.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactForm
