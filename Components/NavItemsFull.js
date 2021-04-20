import Upwork from './icons/Upwork'
export default function NavItemsFull({ invert }) {
  return (
    <div
      className={`flex justify-between items-center text-sm sm:text-base md:text-[18px] flex-grow    ${invert}  `}>
      <span>About us</span>
      <span>What We Do</span>
      <span>Contacts</span>
      <div className='hidden justify-between items-center flex-shrink min-w-max w-24'>
        <a href='/'>
          <svg
            className='fill-current'
            width='18'
            height='20'
            viewBox='0 0 18 20'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M16 0.961731C16.5304 0.961731 17.0391 1.17642 17.4142 1.55856C17.7893 1.94071 18 2.45901 18 2.99945V17.2635C18 17.8039 17.7893 18.3222 17.4142 18.7043C17.0391 19.0865 16.5304 19.3012 16 19.3012H2C1.46957 19.3012 0.960859 19.0865 0.585786 18.7043C0.210714 18.3222 0 17.8039 0 17.2635V2.99945C0 2.45901 0.210714 1.94071 0.585786 1.55856C0.960859 1.17642 1.46957 0.961731 2 0.961731H16ZM15.5 16.754V11.3541C15.5 10.4732 15.1565 9.62834 14.5452 9.00544C13.9338 8.38254 13.1046 8.0326 12.24 8.0326C11.39 8.0326 10.4 8.56241 9.92 9.35712V8.22618H7.13V16.754H9.92V11.7311C9.92 10.9465 10.54 10.3047 11.31 10.3047C11.6813 10.3047 12.0374 10.4549 12.2999 10.7224C12.5625 10.9899 12.71 11.3527 12.71 11.7311V16.754H15.5ZM3.88 6.62658C4.32556 6.62658 4.75288 6.44624 5.06794 6.12524C5.383 5.80424 5.56 5.36886 5.56 4.9149C5.56 3.96736 4.81 3.19303 3.88 3.19303C3.43178 3.19303 3.00193 3.37444 2.68499 3.69735C2.36805 4.02027 2.19 4.45823 2.19 4.9149C2.19 5.86244 2.95 6.62658 3.88 6.62658ZM5.27 16.754V8.22618H2.5V16.754H5.27Z'
              fill='current'
            />
          </svg>
        </a>
        <a href='/'>
          <Upwork />
        </a>
        <a href='/'>
          <svg
            className='fill-current'
            width='10'
            height='20'
            viewBox='0 0 10 20'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M10 0V4H8C7.31 4 7 4.81 7 5.5V8H10V12H7V20H3V12H0V8H3V4C3 2.93913 3.42143 1.92172 4.17157 1.17157C4.92172 0.421427 5.93913 0 7 0H10Z'
              fill='current'
            />
          </svg>
        </a>
      </div>
    </div>
  )
}
