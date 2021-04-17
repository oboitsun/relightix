import '../styles/globals.css'
import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Nav from '../Components/Nav'
import Head from 'next/head'

function MyApp({ Component, pageProps, router }) {
  const [scrolled, setScrolled] = useState(false)
  const [width, setWidth] = useState(0)
  const handleScroll = (e) => {
    if (e.target.scrollingElement.scrollTop < 10) setScrolled(false)
    if (e.target.scrollingElement.scrollTop >= 10) setScrolled(true)
  }
  const handleScreenWidth = (e) => {
    setWidth(window.innerWidth)
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleScreenWidth)
    setWidth(window.innerWidth)
    return () => {
      window.addEventListener('resize', handleScreenWidth)
      window.removeEventListener('scroll', handleScroll)
    }
  })

  return (
    <AnimatePresence exitBeforeEnter>
      <div className='min-h-screen w-full bg-[#fff] dark:bg-gray-700  '>
        {/* <div className='fixed top-2 left-2 z-50'>{width}</div> */}
        <Nav scrolled={scrolled} />
        <Component {...pageProps} key={router.route} />
      </div>
    </AnimatePresence>
  )
}

export default MyApp
