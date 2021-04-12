import { motion } from 'framer-motion'

export default function Logo() {
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
    <div className='w-full h-full auto-cols-fr auto-rows-fr grid grid-cols-3 grid-rows-3 gap-10p'>
      {items.map(
        (it, i) =>
          i < items.length && (
            <div className={`flex justify-center items-center ${it} shadow-md `}></div>
          )
      )}
    </div>
  )
}
