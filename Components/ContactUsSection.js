import ContactUsButton from './ContactUsButton'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'
export default function ContactUsSection({ emoji, heading, textContent }) {
  const text_split = textContent.split('\n')
  const controls = useAnimation()
  const [ref, inView] = useInView()
  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])
  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial='hidden'
      transition={{ delay: 0.4, duration: 0.9, ease: 'easeOut' }}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
      className='w-full sm:w-4/5  md:relative h-480 md:-bottom-[240px]   bg-blue-100  flex flex-col items-center justify-center py-6 md:py-12 lg:py-24 px-6  md:px-10 lg:px-20  shadow-semi  sm:rounded-3xl '>
      <p className='text-3xl md:text-6xl'>{emoji}</p>
      <p className='md:text-2xl opacity-50 font-light py-4'>{heading}</p>
      <p className='text-2xl md:text-4xl  leading-normal font-bold text-center flex flex-col items-center'>
        {text_split.map((t, i) => (
          <span key={i}>{t}</span>
        ))}
      </p>
      <div className='pt-10'>
        <ContactUsButton useDark={false} />
      </div>
    </motion.div>
  )
}
