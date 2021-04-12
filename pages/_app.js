import '../styles/globals.css'
import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Nav from '../Components/Nav'
import Head from 'next/head'

function MyApp({ Component, pageProps, router }) {
  const [scrolled, setScrolled] = useState(false)
  const handleScroll = (e) => {
    if (e.target.scrollingElement.scrollTop < 10) setScrolled(false)
    if (e.target.scrollingElement.scrollTop >= 10) setScrolled(true)
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  })
  return (
    <AnimatePresence exitBeforeEnter>
      <div className='min-h-screen bg-[#fff] dark:bg-gray-700  '>
        <Nav scrolled={scrolled} />
        <Component {...pageProps} key={router.route} />
      </div>
    </AnimatePresence>
  )
}

export default MyApp
