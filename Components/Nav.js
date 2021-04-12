import NavLogo from './NavLogo'
import NavItems from './NavItems'

export default function Nav({ scrolled }) {
  const shadow = scrolled ? 'md:shadow-md  md:bg-white' : ''

  return (
    <div className='sm:px-10 py-5 w-full flex justify-center fixed z-10 top-0'>
      <div
        className={`w-full h-18 rounded-40 transition-all ${shadow} duration-500 flex justify-between items-center px-10 `}>
        <NavLogo scrolled={scrolled} />
        <NavItems scrolled={scrolled} />
      </div>
    </div>
  )
}
