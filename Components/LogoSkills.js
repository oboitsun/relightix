import Bootstrap from './icons/Bootstrap'
import Css3 from './icons/Css3'
import Expressjs from './icons/Expressjs'
import Figma from './icons/Figma'
import Graphql from './icons/Graphql'
import Html from './icons/Html'
import Js from './icons/Js'
import Material from './icons/Material'
import Mongo from './icons/Mongo'
import Node from './icons/Node'
import React from './icons/React'
import Redux from './icons/Redux'
import Sass from './icons/Sass'
import Sketch from './icons/Sketch'
import Tailwind from './icons/Tailwind'
import Webflow from './icons/Webflow'

import { motion } from 'framer-motion'
export default function LogoSkills() {
  const logos = [
    <React />,
    <Redux />,
    <Node />,
    <Material />,
    <Js />,
    <Figma />,
    <Sketch />,
    <Expressjs />,
    <Bootstrap />,
    <Graphql />,
    <Html />,
    <Css3 />,
    <Mongo />,
    <Sass />,
    <Tailwind />,
    <Webflow />,
  ]
  // skill is a custom style
  const styles = `skill  rounded-lg p-3  shadow-lg flex text-gray-700  justify-center items-center bg-white z-[1]`
  const container = {
    hide: { opacity: 1 },
    show: { opacity: 1 },
  }
  const item = {
    hide: { x: 0, y: 0 },
    show: (custom) => ({
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
    //masonry is a custon style
    <motion.div variants={container} animate='show' initial='hide' className='masonry p-2  z-[1]'>
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
