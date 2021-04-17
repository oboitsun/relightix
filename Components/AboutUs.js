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
      className={`w-full lg:flex justify-center overflow-hidden z-[1]`}>
      <div className=''></div>
      <div className=' lg:order-2 max-w-lg flex flex-col px-5 font-lato  z-[1] lg:ml-12 '>
        <p className=' leading-none text-54  z-[1]'>👋</p>
        <p className='text-2xl opacity-50 font-semibold leading-8 py-8'>About Us</p>
        <p className='text-2xl font-bold leading-normal pb-5 line-clamp-4'>
          We provide high-quality
          <br /> design and developing
          <br /> solutions for Web & Mobile
          <br /> applications.
        </p>
        <div className='text-2xl leading-normal font-light opacity-50'>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
          consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
        </div>
      </div>
      <div className='w-full lg:w-auto  lg:order-1 z-[1] lg:mr-12'>
        <Carousel />
      </div>
    </div>
  )

  return text
}
