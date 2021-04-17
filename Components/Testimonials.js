import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'

import CarouselFeedback from './CarouselFeedback'
export default function Testimonials() {
  const controls = useAnimation()
  const [ref, inView] = useInView()
  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  const text = (
    <div
      key={2}
      ref={ref}
      animate={controls}
      initial='hidden'
      transition={{ delay: 0.3, duration: 0.9, ease: 'easeOut' }}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
      className={`w-full lg:flex justify-center`}>
      <div className=' max-w-lg flex flex-col px-5 font-lato  z-[1] lg:order-2 lg:ml-12 '>
        <p className=' leading-none text-54 pb-8 z-[1] '>💬</p>
        <p className='text-2xl opacity-50 font-semibold text-green-600 leading-8 pb-4 sm:py-8'>
          Testimonials
        </p>
        <h3 className='text-2xl font-bold leading-normal pb-4'>
          We are flexible and work with clients <br /> all over the world
        </h3>
        <p className='text-2xl leading-normal font-light opacity-50'>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
          consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
        </p>
      </div>
      <div className='w-full max-h-[580px] lg:w-auto lg:mr-12 lg:order-1 '>
        <CarouselFeedback />
      </div>
    </div>
  )

  return text
}
