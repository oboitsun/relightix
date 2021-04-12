import { useState } from 'react'
import { motion } from 'framer-motion'
const Testing = () => {
  const [show, setShow] = useState(false)
  const items = [
    'bg-yellow-400 rounded-10',
    'bg-purple-700 rounded-tr-100 rounded-10 ',
    'bg-green-500 rounded-10',
    'bg-blue-500 rounded-10',
    'bg-yellow-500 rounded-10 rounded-br-100',
    'bg-blue-500 rounded-10',
    'bg-green-500 rounded-10',
    'bg-purple-700 rounded-10 rounded-bl-100',
    'bg-yellow-400 rounded-10 rounded-bl-100',
  ]
  const text = 'RELIGHTIX is the top notch'.split('')
  const textItem = {
    hidden: (custom) => ({
      opacity: [0, 0],
    }),
    visible: (custom) => ({
      opacity: [1, 1],

      transition: {
        delay: custom * 0.08,
      },
    }),
  }
  const item = {
    hidden: (custom) => ({
      scale: [1, 1.1, 1, 0],
      transition: {
        delay: (items.length / (custom + 1)) * 0.02,
        duration: 0.4 / (custom * 0.2 + 1),
      },
    }),
    visible: (custom) => ({
      scale: [0, 1, 1.1, 1],

      transition: {
        delay: custom * 0.05,
        duration: (custom + 1) / items.length,
      },
    }),
  }

  return (
    <div className='relative h-screen w-screen bg- flex flex-col items-center'>
      <button
        className='text-2xl dark:text-white uppercase p-4 focus:outline-none'
        onClick={() => {
          setShow(!show)
        }}>
        Show
      </button>

      <div className='w-full h-full flex justify-center items-center '>
        <div className='p-2 w-96 h-96 grid grid-cols-3 grid-rows-3 gap-3'>
          {items.map(
            (it, i) =>
              i < items.length && (
                <motion.div
                  key={i}
                  custom={i}
                  variants={item}
                  initial='hidden'
                  animate={show ? 'visible' : 'hidden'}
                  className={`flex justify-center items-center ${it} shadow-lg `}></motion.div>
              )
          )}
        </div>
        <div className='p-2 w-1/2 h-96    '>
          {text.map((t, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={textItem}
              initial='hidden'
              animate={show ? 'visible' : 'hidden'}
              className={`text-black dark:text-white text-8xl  `}>
              {`${t}`}
            </motion.span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Testing
