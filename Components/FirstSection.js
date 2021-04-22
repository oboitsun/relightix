import ContactUsButton from './ContactUsButton'
import Logo from './Logo'
import Moto from './Moto'
export default function FirstSection() {
  return (
    <div className='w-full  pb-10 px-5 pt-32 flex  justify-center items-center font-lato  leading-normal'>
      <div className='mr-10  flex flex-col justify-around sm:items-start text-4xl md:text-4xl lg:text-6xl  dark:text-white'>
        <Moto />
        <div className='max-w-[570px] text-xl  lg:text-2xl  font-light text-gray-300 lg:py-10  '>
          We help you to relight your idea or transform existing business by providing more value
          for it.
        </div>
        <div className='w-full sm:w-auto mt-8 lg:mt-0'>
          <ContactUsButton />
        </div>
      </div>
      <div className='w-full lg:ml-10 hidden md:block md:w-[200px] md:h-[200px] lg:w-[35vw]  lg:h-[35vw] max-h-[480px] max-w-[480px]'>
        <Logo />
      </div>
    </div>
  )
}
