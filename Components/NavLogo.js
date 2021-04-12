import Relightix_text from './icons/Relightix_text'
import LogoStatic from './LogoStatic'
export default function NavLogo({ scrolled = false }) {
  const invert = scrolled ? 'dark:text-black' : 'dark:text-white'
  return (
    <div className={`h-20 ${invert} flex flex-col justify-center`}>
      <div className=' hidden md:block'>
        <Relightix_text />
      </div>
      <div className='w-10 h-10 block md:hidden'>
        <LogoStatic />
      </div>
    </div>
  )
}
