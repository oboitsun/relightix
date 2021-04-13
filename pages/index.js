import Head from 'next/head'
import FirstSection from '../Components/FirstSection'
import NextSection from '../Components/NextSection'
import Footer from '../Components/Footer'
import ContactUsSection from '../Components/ContactUsSection'
export default function Home() {
  return (
    <div>
      <Head>
        <title>Relightix</title>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta http-equiv='Content-Type' content='text/html; charset=utf-8' />
        <meta name='description' content='Let our team to do the heavy work for you 💻📱' />
        <meta name='og:description' content='We are the team of developers.' />
        <meta property='og:url' content='https://www.relightix.com/' />
        <meta property='og:image' content='https://www.relightix.com/preview.jpg' />
      </Head>
      <div className='flex items-center bg-[#fafafa] dark:bg-gray-800 min-h-screen'>
        <FirstSection />
      </div>
      <div className=' w-full pt-10  md:pt-36 '>
        <NextSection
          key={1}
          bg={`bg-green-100`}
          rounded={`rounded-l-60`}
          i={1}
          emoji={`👋`}
          heading={`What we familiar with?`}
          textContent={`Our team have full-stack skills
to develop and provide a whole circle process of development
from one hand.`}
        />
      </div>
      <div className=' w-full pt-10  md:pt-36'>
        <NextSection
          key={2}
          bg={`bg-purple-100`}
          rounded={`rounded-r-60`}
          content=''
          i={2}
          emoji={`🤝`}
          heading={`How can we help you?`}
          textContent={`We provide high-quality design and developing solutions for Web & Mobile applications.`}
        />
      </div>
      <div className=' w-full pt-10  md:pt-36 pb-10 md:pb-36'>
        <NextSection
          key={3}
          bg={`bg-yellow-100`}
          rounded={`rounded-l-60`}
          content=''
          i={3}
          emoji={`👋`}
          heading={`How can we help you?`}
          textContent={`We provide high-quality design and developing solutions for Web & Mobile applications.`}
        />
      </div>
      <div className=' w-full  flex justify-center font-lato h-auto md:h-60'>
        <ContactUsSection
          emoji={`💬 😉`}
          heading={`Have questions?`}
          textContent={`Do not hesitate to write to us and we will try to help you.\nWe are waiting for your message`}
        />
      </div>
      <div className='bg-[#fafafa] dark:bg-gray-800 flex justify-center items-end h-[80px]  md:h-[420px] '>
        <Footer />
      </div>
    </div>
  )
}
