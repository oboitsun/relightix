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
      <div className='flex items-center w-full  pb-20  '>
        <FirstSection />
      </div>
      <div className='w-full h-auto relative py-12 lg:py-36  bg-gray-50 lg:bg-transparent '>
        <div className='top-0 right-0 hidden absolute lg:block lg:w-9/12 2xl:w-8/12  h-full  bg-gray-50 rounded-tl-[1000px] rounded-bl-[64px] z-0'></div>
        <AboutUs />
      </div>
      <div className='hidden lg:flex w-full pt-10  md:pt-36 pb-10 md:pb-36'>
        <EndlessText
          text={`7 + years of experience and more than 50 happy clients `}
          emoji={` 💪🏻 `}
        />
      </div>
      <div className='w-full h-auto relative py-12 lg:py-36 bg-yellow-50 lg:bg-transparent'>
        <div className='absolute hidden lg:block lg:w-9/12 2xl:w-8/12 w-full h-full bg-yellow-50 z-0 top-0 left-0 rounded-tr-[1000px] rounded-br-[64px]'></div>
        <WhatWeFamiliarWith />
      </div>
      <div className='hidden lg:flex w-full pt-10  md:pt-36 pb-10 md:pb-36'>
        <EndlessText
          text={`Contact us and we solve your problems... At least, development ones... `}
          emoji={` 🙃 `}
        />
      </div>
      <div className='w-full h-auto pt-12 lg:py-36 relative bg-green-50 lg:bg-transparent'>
        <div className='top-0 right-0 hidden absolute lg:block lg:w-9/12 2xl:w-8/12  h-full  bg-green-50 rounded-tl-[1000px] rounded-bl-[64px] z-0'></div>
        <Testimonials />
      </div>
      <div className='hidden lg:flex w-full pt-10  md:pt-36 pb-10 md:pb-36'>
        <EndlessText
          text={`Contact us and we solve your problems... At least, development ones... `}
          emoji={` 🙃 `}
        />
      </div>
      <div className='w-full h-auto py-12 lg:py-24 relative  bg-blue-100  '>
        <ContactUsSection
          emoji={`💬 😉`}
          heading={`Have questions?`}
          textContent={`Do not hesitate to write to us and we will try to help you.\nWe are waiting for your message`}
        />
      </div>
      {/* <div className='bg-[#fafafa] dark:bg-gray-800 flex justify-center items-end'>
        <Footer />
      </div> */}
    </div>
  )
}
