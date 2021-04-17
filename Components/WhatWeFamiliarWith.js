import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'
import LogoSkills from './LogoSkills'
import Carousel from './Carousel'
export default function WhatWeFamiliarWith() {
  const controls = useAnimation()
  const [ref, inView] = useInView()
  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  const text = (
    <motion.div
      key={2}
      ref={ref}
      animate={controls}
      initial='hidden'
      transition={{ delay: 0.3, duration: 0.9, ease: 'easeOut' }}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
      className={`w-full z-[1] lg:flex lg:flex-row lg:justify-center`}>
      <div className='w-full max-w-lg flex flex-col  px-5 pb-7 font-lato  z-[1]'>
        <div className=' leading-none text-54 pb-8 z-[1]'>💡</div>
        <p className='text-2xl opacity-50 font-semibold leading-8 py-2 sm:py-8 text-yellow-500 z-[1]'>
          What We Are Familiar With
        </p>
        <p className='text-2xl font-bold leading-normal pb-5 z-[1]'>
          Our team have full-stack skills to develop and provide a whole circle process of
          development from one hand.
        </p>
        <p className='text-2xl leading-normal font-light opacity-50 z-[1]'>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
          consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
        </p>
      </div>
      <div className='w-full lg:max-w-2xl pl-2 z-[1]'>
        <LogoSkills />
      </div>
    </motion.div>
  )

  return text
}
