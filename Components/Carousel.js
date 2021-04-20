import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
export default function Carousel() {
  const items = [
    {
      title: 'Frontend Development',
      text:
        'Using only modern development solution methods, clear and understandable code. Manual and automatic testing.',
      color: 'bg-purple-200',
      logo: (
        <svg
          width='34'
          height='30'
          viewBox='0 0 34 30'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M30.5 21V3H3.5V21H30.5ZM30.5 0C31.2956 0 32.0587 0.31607 32.6213 0.87868C33.1839 1.44129 33.5 2.20435 33.5 3V21C33.5 21.7956 33.1839 22.5587 32.6213 23.1213C32.0587 23.6839 31.2956 24 30.5 24H20V27H23V30H11V27H14V24H3.5C1.835 24 0.5 22.65 0.5 21V3C0.5 1.335 1.835 0 3.5 0H30.5ZM6.5 6H20V13.5H6.5V6ZM21.5 6H27.5V9H21.5V6ZM27.5 10.5V18H21.5V10.5H27.5ZM6.5 15H12.5V18H6.5V15ZM14 15H20V18H14V15Z'
            fill='#914FC7'
          />
        </svg>
      ),
    },
    {
      title: 'UI/UX Design',
      text:
        'Providing modern solutions in design. Full circle from wireframes to mockups. Making project libraries.',
      color: 'bg-yellow-200',
      logo: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='30'
          height='30'
          viewBox='0 0 30 30'
          fill='none'>
          <path
            d='M3.00018 22.0001V27.0001H8.00018L22.7468 12.2401L17.7468 7.24006L3.00018 22.0001ZM29.1468 23.4801L23.4802 29.1467L16.5468 22.2134L18.9068 19.8534L20.2402 21.1867L23.5335 17.8801L25.4268 19.7734L23.4802 21.6667L24.8935 23.0001L26.7868 21.1334L29.1468 23.4801ZM7.81352 13.4401L0.853516 6.52006L6.52018 0.853394L8.86685 3.21339L5.57352 6.52006L7.00018 7.93339L10.2802 4.62673L12.1735 6.52006L10.2802 8.40006L11.6135 9.73339L7.81352 13.4401ZM26.6135 8.33339C27.1335 7.81339 27.1335 7.00006 26.6135 6.45339L23.4935 3.38673C23.0002 2.86673 22.1335 2.86673 21.6135 3.38673L19.1602 5.82673L24.1602 10.8267L26.6135 8.33339Z'
            fill='#FBC866'
          />
        </svg>
      ),
    },
    {
      title: 'Backend Development',
      text: 'Creating a secure and structured backend for your projects. ',
      color: 'bg-blue-200',
      logo: (
        <svg
          width='30'
          height='30'
          viewBox='0 0 30 30'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M15.0002 20.25C13.6079 20.25 12.2725 19.6969 11.2879 18.7123C10.3034 17.7277 9.75025 16.3924 9.75025 15C9.75025 13.6076 10.3034 12.2723 11.2879 11.2877C12.2725 10.3031 13.6079 9.75 15.0002 9.75C16.3926 9.75 17.728 10.3031 18.7126 11.2877C19.6971 12.2723 20.2502 13.6076 20.2502 15C20.2502 16.3924 19.6971 17.7277 18.7126 18.7123C17.728 19.6969 16.3926 20.25 15.0002 20.25ZM26.1452 16.455C26.2052 15.975 26.2502 15.495 26.2502 15C26.2502 14.505 26.2052 14.01 26.1452 13.5L29.3102 11.055C29.5952 10.83 29.6702 10.425 29.4902 10.095L26.4902 4.905C26.3102 4.575 25.9052 4.44 25.5752 4.575L21.8402 6.075C21.0602 5.49 20.2502 4.98 19.3052 4.605L18.7502 0.63C18.6902 0.27 18.3752 0 18.0002 0H12.0002C11.6252 0 11.3102 0.27 11.2502 0.63L10.6952 4.605C9.75025 4.98 8.94025 5.49 8.16025 6.075L4.42525 4.575C4.09525 4.44 3.69025 4.575 3.51025 4.905L0.510247 10.095C0.315247 10.425 0.405248 10.83 0.690248 11.055L3.85525 13.5C3.79525 14.01 3.75025 14.505 3.75025 15C3.75025 15.495 3.79525 15.975 3.85525 16.455L0.690248 18.945C0.405248 19.17 0.315247 19.575 0.510247 19.905L3.51025 25.095C3.69025 25.425 4.09525 25.545 4.42525 25.425L8.16025 23.91C8.94025 24.51 9.75025 25.02 10.6952 25.395L11.2502 29.37C11.3102 29.73 11.6252 30 12.0002 30H18.0002C18.3752 30 18.6902 29.73 18.7502 29.37L19.3052 25.395C20.2502 25.005 21.0602 24.51 21.8402 23.91L25.5752 25.425C25.9052 25.545 26.3102 25.425 26.4902 25.095L29.4902 19.905C29.6702 19.575 29.5952 19.17 29.3102 18.945L26.1452 16.455Z'
            fill='#1DAEEB'
          />
        </svg>
      ),
    },
    {
      title: 'Product Support',
      text:
        'Updating, supporting and improving your existing product. Solving issues and bugs ASAP.',
      color: 'bg-green-200',
      logo: (
        <svg
          width='30'
          height='30'
          viewBox='0 0 30 30'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M26.685 20.115C28.11 16.86 28.11 13.125 26.685 9.885L22.575 11.745C23.475 13.815 23.475 16.17 22.59 18.255L26.685 20.115ZM20.13 3.315C16.875 1.89 13.14 1.89 9.885 3.315L11.745 7.41C13.83 6.525 16.185 6.525 18.27 7.425L20.13 3.315ZM3.315 9.87C1.89 13.14 1.89 16.86 3.315 20.13L7.425 18.255C6.525 16.185 6.525 13.815 7.425 11.73L3.315 9.87ZM9.885 26.685C13.14 28.11 16.875 28.11 20.13 26.67L18.27 22.575C16.2 23.475 13.83 23.475 11.76 22.59L9.885 26.685ZM15 0C16.9698 0 18.9204 0.387987 20.7403 1.14181C22.5601 1.89563 24.2137 3.00052 25.6066 4.3934C26.9995 5.78628 28.1044 7.43986 28.8582 9.25975C29.612 11.0796 30 13.0302 30 15C30 18.9782 28.4196 22.7936 25.6066 25.6066C22.7936 28.4196 18.9782 30 15 30C13.0302 30 11.0796 29.612 9.25975 28.8582C7.43986 28.1044 5.78628 26.9995 4.3934 25.6066C1.58035 22.7936 0 18.9782 0 15C0 11.0218 1.58035 7.20644 4.3934 4.3934C7.20644 1.58035 11.0218 0 15 0ZM15 9C13.4087 9 11.8826 9.63214 10.7574 10.7574C9.63214 11.8826 9 13.4087 9 15C9 16.5913 9.63214 18.1174 10.7574 19.2426C11.8826 20.3679 13.4087 21 15 21C16.5913 21 18.1174 20.3679 19.2426 19.2426C20.3679 18.1174 21 16.5913 21 15C21 13.4087 20.3679 11.8826 19.2426 10.7574C18.1174 9.63214 16.5913 9 15 9Z'
            fill='#149248'
          />
        </svg>
      ),
    },
  ]
  const settings = {
    infinite: true,
    speed: 500,
    variableWidth: true,
    swipeToSlide: true,
    rows: 1,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <div className='w-full'>
      <div className='max-h-[600px] max-w-[600px] hidden lg:grid grid-rows-2 grid-cols-2 gap-7 pb-3 px-5'>
        {items.map((s, i) => (
          <div key={i} className=' outline-none'>
            <div className='h-[270px] w-[270px]  p-6 flex flex-col rounded-xl shadow-md bg-white'>
              <div
                className={`h-16 w-16 rounded-lg ${s.color} mb-6 flex justify-center items-center`}>
                {s.logo}
              </div>
              <div className='font-semibold text-lg leading-normal mb-3'>{s.title}</div>
              <div className='font-light opacity-50 leading-snug'>{s.text}</div>
            </div>
          </div>
        ))}
      </div>
      <div className='w-full overflow-hidden lg:hidden'>
        <Slider {...settings}>
          {items.map((s, i) => (
            <div key={i} className='h-full w-full pl-5 pr-5 py-10 outline-none'>
              <div className='h-[270px] w-[270px]  p-6 flex flex-col rounded-xl shadow-md bg-white'>
                <div
                  className={`h-16 w-16 rounded-lg ${s.color} mb-6 flex justify-center items-center`}>
                  {s.logo}
                </div>
                <div className='font-semibold text-lg leading-normal mb-3'>{s.title}</div>
                <div className='font-light opacity-50 leading-snug'>{s.text}</div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}
