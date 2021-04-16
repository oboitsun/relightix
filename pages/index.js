import Head from 'next/head'
import FirstSection from '../Components/FirstSection'
import AboutUs from '../Components/AboutUs'
import WhatWeFamiliarWith from '../Components/WhatWeFamiliarWith'
import NextSection from '../Components/NextSection'
import Footer from '../Components/Footer'
import ContactUsSection from '../Components/ContactUsSection'
import EndlessText from '../Components/EndlessText'
import Testimonials from '../Components/Testimonials'
export default function Home() {
  return (
    <div>
      <Head>
        <title>Relightix</title>
        <meta lang='en' />
        <meta property='og:type' content='website' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta http-equiv='Content-Type' content='text/html; charset=utf-8' />
        <meta name='og:description' content={`Let our team to do the heavy work for you \n 💻📱`} />
        <meta property='og:url' content='https://www.relightix.com/' />
        <meta property='og:image' content='https://www.relightix.com/preview.jpg' />
      </Head>
      <div className='flex items-center w-full  dark:bg-gray-800 lg:min-h-screen'>
        <FirstSection />
      </div>
      <div className='w-full h-auto py-12 relative bg-gray-50 '>
        <div className='absolute w-full h-auto bg-gray-100 z-0 top-0 left-0'></div>
        <AboutUs />
      </div>
      <div className='w-full h-auto py-12 relative bg-yellow-50'>
        <div className='absolute w-full h-auto bg-gray-100 z-0 top-0 left-0'></div>
        <WhatWeFamiliarWith />
      </div>
      <div className=' w-full pt-10  md:pt-36 pb-10 md:pb-36'>
        <EndlessText />
      </div>
      <div className='w-full h-auto pt-12 relative bg-green-50'>
        <Testimonials />
      </div>
      <div className='w-full h-auto py-12 relative  bg-blue-100  '>
        <ContactUsSection
          emoji={`💬 😉`}
          heading={`Have questions?`}
          textContent={`Do not hesitate to write to us and we will try to help you.\nWe are waiting for your message`}
        />
      </div>
      <div className='bg-[#fafafa] dark:bg-gray-800 flex justify-center items-end'>
        <Footer />
      </div>
    </div>
  )
}
