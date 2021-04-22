import React, { useState } from 'react'
import Burger from './Burger'
import { motion } from 'framer-motion'
import { Link, animateScroll as scroll } from 'react-scroll'
const NavItemsBurger = React.memo(() => {
  const colors = ['bg-green-500', 'bg-yellow-500', 'bg-blue-500', 'bg-purple-700', 'bg-yellow-400']
  const menuItems = ['about us', 'what we are familiar with', 'testimonials', 'have questions?']
  const [showMenu, setShowMenu] = useState(false)
  const [currentBackGr, setCurrentBackGr] = useState(colors[0])
  const toggleMenu = () => {
    setShowMenu(!showMenu)
    if (!showMenu) setCurrentBackGr(colors[Math.floor(Math.random() * colors.length)])
  }
  const menu = {
    close: { x: '-100%', transition: { duration: 0.3 } },
    open: { x: '0', transition: { duration: 0.3 } },
  }
  const linkProps = {
    spy: true,
    smooth: true,
    offset: -200,
    duration: 500,
    activeClass: 'active',
    className: 'font-semibold text-3xl lg:text-7xl uppercase dark:text-white text-black',
    onClick: toggleMenu,
  }
  return (
    <>
      <Burger showMenu={showMenu} setShowMenu={toggleMenu} />
      <motion.div
        className={`fixed z-30 w-full h-full flex  justify-center items-center ${currentBackGr} top-0 left-0`}
        variants={menu}
        initial={false}
        animate={showMenu ? 'open' : 'close'}>
        <div className='w-full h-1/2 flex flex-col justify-between px-10'>
          <Link {...linkProps} to='section1'>
            About Us
          </Link>
          <Link {...linkProps} to='section2'>
            What we are familiar with
          </Link>
          <Link {...linkProps} to='section3'>
            testimonials
          </Link>
          <Link {...linkProps} to='section4'>
            Have any questions?
          </Link>
        </div>
      </motion.div>
    </>
  )
})

export default NavItemsBurger
