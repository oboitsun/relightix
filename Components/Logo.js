import { motion } from 'framer-motion'

export default function Logo() {
  const items = [
    'bg-rYellow rounded-10 shadow-rYellow',
    'bg-rPurple rounded-tr-100 rounded-10 shadow-rPurple',
    'bg-rGreen rounded-10 shadow-rGreen',
    'bg-rBlue rounded-10 shadow-rBlue',
    'bg-rOrange rounded-10 rounded-br-100 shadow-rOrange',
    'bg-rBlue rounded-10 shadow-rBlue',
    'bg-rGreen rounded-10 shadow-rGreen',
    'bg-rNavy rounded-10 rounded-bl-100 shadow-rNavy',
    'bg-rYellow rounded-10 rounded-bl-100 shadow-rYellow',
  ]
  const container = {
    hidden: { scale: 0, transition: { duration: 1 } },
    visible: () => ({
      scale: 1,
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
        repeatDelay: 5,
        repeatType: 'mirror',
        repeat: 'Infinity',
        delay: custom * 0.1 + 0.1,
        duration: (6 + custom * 0.1) / items.length,
      },
    }),
  }
  return (
    <motion.div
      variants={container}
      animate='visible'
      initial='hidden'
      className='hidden w-full h-full auto-cols-fr auto-rows-fr md:grid grid-cols-3 grid-rows-3 gap-10p '>
      {items.map(
        (it, i) =>
          i < items.length && (
            <motion.div
              key={i + 100}
              custom={i}
              variants={item}
              className={`hidden md:flex justify-center items-center ${it}`}></motion.div>
          )
      )}
    </motion.div>
  )
}
