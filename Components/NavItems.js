import React from 'react'
import NavItemsBurger from './NavItemsBurger'
import NavItemsFull from './NavItemsFull'

const NavItems = ({ scrolled = false }) => {
  const invert = scrolled ? 'dark:text-black' : 'dark:text-white'

  return (
    <>
      <div className='hidden md:flex flex-grow max-w-prose'>
        <NavItemsFull invert={invert} />
      </div>
      <div className='md:hidden dark:text-white text-black '>
        <NavItemsBurger />
      </div>
    </>
  )
}
export default NavItems
