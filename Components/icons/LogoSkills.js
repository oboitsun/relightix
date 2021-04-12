import Bootstrap from './Bootstrap'
import Css3 from './Css3'
import Expressjs from './Expressjs'
import Figma from './Figma'
import Graphql from './Graphql'
import Html from './Html'
import Js from './Js'
import Material from './Material'
import Mongo from './Mongo'
import Node from './Node'
import React from './React'
import Redux from './Redux'
import Sass from './Sass'
import Sketch from './Sketch'
import Tailwind from './Tailwind'
import Webflow from './Webflow'

import { motion } from 'framer-motion'
export default function LogoSkills() {
  const logos = [
    <React />,
    <Redux />,
    <Node />,
    <Material />,
    <Bootstrap />,
    <Css3 />,
    <Expressjs />,
    <Figma />,
    <Graphql />,
    <Html />,
    <Js />,
    <Mongo />,
    <Sass />,
    <Sketch />,
    <Tailwind />,
    <Webflow />,
  ]
  const styles = `w-1/4  flex flex-shrink text-black dark:text-white justify-center items-center`
  const container = {
    hide: { opacity: 1 },
    show: { opacity: 1 },
  }
  const item = {
    hide: { x: 0, y: 0 },
    show: (custom) => ({
      scale: [1, 1, 1],
      x: [0, custom < 3 ? 2 : -2, 0],
      y: [0, custom < 2 ? 2 : -1, 0],

      transition: {
        delay: custom,
        repeatDelay: custom,
        repeatType: 'loop',
        repeat: 'Infinity',
        ease: 'easeOut',
        duration: 2,
      },
    }),
  }

  return (
    <motion.div
      variants={container}
      animate='show'
      initial='hide'
      className='flex flex-wrap items-center justify-around p-6'>
      {logos.map((logo, i) => {
        return (
          <motion.div
            key={i}
            custom={(Math.random() * i * 10).toFixed(1) / logos.length}
            variants={item}
            className={styles}>
            {logo}
          </motion.div>
        )
      })}
    </motion.div>
  )
}
