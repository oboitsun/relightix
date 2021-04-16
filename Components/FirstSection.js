import ContactUsButton from './ContactUsButton'
import Logo from './Logo'
import Moto from './Moto'
export default function FirstSection() {
  return (
    <div className='w-full h-auto pb-10 px-5  pt-20 flex  justify-around items-center font-lato  leading-normal'>
      <div className='w-full md:w-1/2 h-96 md:h-full flex flex-col justify-around sm:items-start font-lato text-4xl md:text-4xl lg:text-6xl  dark:text-white'>
        <Moto />
        <div className='max-w-screen-sm text-xl  lg:text-2xl  font-light text-gray-300   '>
          We help you to relight your idea or transform existing business by providing more value
          for it.
        </div>
        <div className='w-full sm:w-auto '>
          <ContactUsButton />
        </div>
      </div>
      <div className='hidden md:block md:w-[30vw]  md:h-[30vw] max-h-[480px] max-w-[480px]'>
        <Logo />
      </div>
    </div>
  )
}
