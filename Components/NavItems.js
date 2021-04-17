import React from 'react'
import NavItemsBurger from './NavItemsBurger'
import NavItemsFull from './NavItemsFull'

const NavItems = ({ scrolled = false }) => {
  const invert = scrolled ? 'dark:text-white' : 'dark:text-white'

  return (
    <>
      <div className='hidden md:flex flex-grow max-w-md '>
        <NavItemsFull invert={invert} />
      </div>
      <div className='md:hidden dark:text-white text-black '>
        <NavItemsBurger />
      </div>
    </>
  )
}
export default NavItems
