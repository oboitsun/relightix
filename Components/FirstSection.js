import ContactUsButton from './ContactUsButton'
import Logo from './Logo'
import Moto from './Moto'
export default function FirstSection() {
  return (
    <div className='w-full min-h-screen px-2 md:px-10 lg:px-20 pt-20 flex  justify-around items-center '>
      <div className='w-full md:w-1/2 min-h-[480px]  h-full flex flex-col justify-around   items-center sm:items-start font-lato text-4xl md:text-4xl lg:text-6xl  leading-snug dark:text-white'>
        <Moto />
        <div className='max-w-screen-sm text-base md:text-xl lg:text-2xl font-lato font-light text-gray-300 px-6 sm:px-0 text-center md:text-left'>
          We help you to relight your idea or transform existing business by providing more value
          for it.
        </div>
        <div className='w-80 sm:w-auto '>
          <ContactUsButton />
        </div>
      </div>
      <div className='hidden md:block md:w-[30vw]  md:h-[30vw] '>
        <Logo />
      </div>
    </div>
  )
}
