import NavLogo from './NavLogo'
import NavItems from './NavItems'

export default function Nav({ scrolled }) {
  const shadow = scrolled ? 'shadow-md bg-white dark:bg-gray-800 py-3' : ''

  return (
    <div className='px-2 lg:px-5 xl:px-10 py-5 w-full flex justify-center items-center fixed z-30 top-0'>
      <div
        className={`w-full md:h-20 rounded-40 transition-all ${shadow} duration-500 flex justify-between items-center px-4 sm:px-0 xl:px-10 `}>
        <NavLogo scrolled={scrolled} />
        <NavItems scrolled={scrolled} />
      </div>
    </div>
  )
}
