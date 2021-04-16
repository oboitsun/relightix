import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'
import LogoSkills from './LogoSkills'
export default function NextSection({ i, emoji, content, heading, textContent, rounded, bg }) {
  const controls = useAnimation()
  const [ref, inView] = useInView()
  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])
  const odd = i % 2 !== 0
  const cont = (
    <div key={1} className='hidden sm:flex sm:w-1/3 md:w-1/2 z-10 '>
      <LogoSkills />
    </div>
  )
  const text = (
    <motion.div
      key={2}
      ref={ref}
      animate={controls}
      initial='hidden'
      transition={{ delay: 1, duration: 0.9, ease: 'easeOut' }}
      variants={{
        visible: { x: 0, opacity: 1 },
        hidden: { opacity: 0, x: odd ? '90%' : '-90%' },
      }}
      className={`w-full sm:w-2/3 md:w-1/2  sm:h-auto ${rounded} flex flex-col  p-8 md:p-12 lg:p-24  font-lato items-center sm:items-start`}>
      <div className='text-3xl sm:text-4xl lg:text-6xl'>{emoji}</div>
      <div className='text-lg lg:text-2xl opacity-50 font-light py-2 sm:py-8'>{heading}</div>
      <div className='text-2xl lg:text-4xl leading-snug font-bold text-center sm:text-left'>
        {textContent}
      </div>
    </motion.div>
  )
  const seq = odd ? [cont, text] : [text, cont]
  return <div className='flex w-full overflow-x-hidden justify-between '>{seq.map((s) => s)}</div>
}
