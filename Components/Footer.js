import NavLogo from './NavLogo'
import NavItemsFull from './NavItemsFull'

export default function Footer() {
  return (
    <div className='px-2 md:px-10 py-5 w-full '>
      <div className={`w-full h-18   flex justify-center md:justify-between items-center   `}>
        <div className='hidden md:block'>
          <NavLogo />
        </div>
        <div className='w-full  max-w-prose '>
          <NavItemsFull invert={'dark:text-white'} />
        </div>
      </div>
    </div>
  )
}
