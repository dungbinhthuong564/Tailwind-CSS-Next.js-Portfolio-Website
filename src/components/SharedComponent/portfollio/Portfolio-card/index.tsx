'use client'
import React from 'react'
import Slider from 'react-slick'
import Image from 'next/image'
import Link from 'next/link'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { portfolioinfo } from '@/app/api/data'
import { Icon } from '@iconify/react'

const PortfolioCard = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 3500,
    dots: true,
    arrows: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  return (
    <div className='dark:bg-darkmode pb-8'>
      <div className='lg:px-9 m-auto px-4 max-w-6xl slider-container'>
        <Slider {...settings}>
          {portfolioinfo.map((item, index) => (
            <div key={index} className='px-3 pb-6'>
              <div className='bg-white dark:bg-darklight rounded-2xl overflow-hidden border border-border/50 dark:border-dark_border/60 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full group'>
                <div className='relative h-48 sm:h-52 w-full overflow-hidden bg-slate-100 dark:bg-midnight_text/50'>
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className='object-cover group-hover:scale-105 transition-transform duration-500'
                  />
                  <div className='absolute top-3 right-3 z-10'>
                    <span className='px-2.5 py-1 text-[11px] font-bold rounded-full bg-white/90 dark:bg-darkmode/90 text-primary border border-primary/20 backdrop-blur-sm'>
                      {item.date}
                    </span>
                  </div>
                </div>

                <div className='p-6 flex-1 flex flex-col justify-between'>
                  <div>
                    <span className='text-xs font-semibold text-primary uppercase tracking-wider block mb-1'>
                      {item.role}
                    </span>
                    <h4 className='text-xl font-bold text-midnight_text dark:text-white group-hover:text-primary transition-colors'>
                      {item.title}
                    </h4>
                    <p className='text-xs text-secondary dark:text-Sky-blue-mist font-medium mt-1 mb-3'>
                      {item.info}
                    </p>
                    <p className='text-xs text-grey dark:text-white/60 line-clamp-3 leading-relaxed mb-4'>
                      {item.description}
                    </p>
                  </div>

                  <div>
                    <div className='flex flex-wrap gap-1.5 mb-4'>
                      {item.tags.slice(0, 3).map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className='text-[10px] font-medium px-2 py-0.5 rounded bg-section dark:bg-midnight_text text-midnight_text dark:text-white/70'>
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <div className='flex items-center justify-between pt-3 border-t border-border/40 dark:border-dark_border/50'>
                      <a
                        href={item.github}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-xs font-semibold text-midnight_text dark:text-white hover:text-primary dark:hover:text-primary flex items-center gap-1.5 transition-colors'>
                        <Icon icon='mdi:github' width='16' height='16' />
                        GitHub Repo
                      </a>
                      <Link
                        href={`/portfolio`}
                        className='text-xs font-semibold text-primary hover:text-blue-700 flex items-center gap-1'>
                        Details
                        <Icon icon='solar:arrow-right-outline' width='14' height='14' />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default PortfolioCard
