import Relightix_text from './icons/Relightix_text'
import LogoStatic from './LogoStatic'
export default function NavLogo({ scrolled = false }) {
  const invert = scrolled ? 'dark:text-black' : 'dark:text-white'
  return (
    <div className={`${invert} flex items-center justify-center`}>
      <div className='w-8 h-8 flex md:hidden mr-2'>
        <LogoStatic />
      </div>
      <div className='h-9 flex flex-col justify-around'>
        <Relightix_text />
      </div>
    </div>
  )
}
