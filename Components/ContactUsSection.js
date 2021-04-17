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
      className='w-full flex flex-col lg:items-center px-5 font-lato  z-[1]'>
      <p className='leading-none text-54 pb-8 z-[1]'>{emoji}</p>
      <p className='text-2xl opacity-50 font-semibold text-blue-700 leading-8 pb-5 lg:pb-8 '>
        {heading}
      </p>
      <p className='flex flex-col text-2xl lg:text-4xl lg:items-center   font-bold leading-normal pb-5 lg:pb-12'>
        {text_split.map((t, i) => (
          <span key={i}>{t}</span>
        ))}
      </p>
      <div className='flex lg:justify-center flex-shrink  w-6/12 '>
        <ContactUsButton useDark={false} />
      </div>
    </motion.div>
  )
}
