import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'

import Carousel from './Carousel'
export default function AboutUs() {
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
      className={`w-full `}>
      <div className='w-full flex flex-col px-5 font-lato  z-[1]'>
        <div className=' leading-none text-54 pb-8 z-[1]'>👋</div>
        <div className='text-2xl opacity-50 font-semibold leading-8 pb-4 sm:py-8'>About Us</div>
        <div className='text-2xl font-bold leading-normal pb-4'>
          Our team have full-stack skills to develop and provide a whole circle process of
          development from one hand.
        </div>
        <div className='text-2xl leading-normal font-light opacity-50'>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
          consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
        </div>
      </div>
      <div className='w-full '>
        <Carousel />
      </div>
    </div>
  )

  return text
}
