import React from 'react'
import Slider from 'react-slick'
import ArrowRight from './icons/ArrowRight'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
export default function CarouselFeedback() {
  const items = [
    {
      author: `Dugan O'Donnell`,
      position: 'CEO at Groundly',
      text: `Incredible experience working with Relightix. Communication was superb. They got all the work done to a very high quality quickly. My team was very impressed. He really understands UX and what UI patterns work. We are very happy with all the work they delivered and love showing it off to people. We can't wait to work with Relightix  again.`,
      color: 'bg-green-400',
    },
    {
      author: `Dugan O'Donnell`,
      position: 'CEO at Groundly',
      text: `Incredible experience working with Relightix. Communication was superb. They got all the work done to a very high quality quickly. My team was very impressed. He really understands UX and what UI patterns work. We are very happy with all the work they delivered and love showing it off to people. We can't wait to work with Relightix  again.`,
      color: 'bg-green-400',
    },
    {
      author: `Dugan O'Donnell`,
      position: 'CEO at Groundly',
      text: `Incredible experience working with Relightix. Communication was superb. They got all the work done to a very high quality quickly. My team was very impressed. He really understands UX and what UI patterns work. We are very happy with all the work they delivered and love showing it off to people. We can't wait to work with Relightix  again.`,
      color: 'bg-green-400',
    },
  ]
  function SampleNextArrow(props) {
    const { className, style, onClick, rotate, right } = props
    return (
      <div
        className={'hidden lg:block'}
        style={{
          transform: `rotate(${rotate}deg)`,
          position: 'absolute',
          top: '70px',
          right: right,
          zIndex: 1,
        }}
        onClick={onClick}>
        <ArrowRight />
      </div>
    )
  }
  const settings = {
    infinite: true,
    speed: 500,
    variableWidth: true,
    swipeToSlide: true,
    rows: 1,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow hidden={true} rotate={0} right={'64px'} />,
    prevArrow: <SampleNextArrow rotate={180} right={'120px'} />,
  }
  return (
    <div className='w-full h-auto lg:h-[540px] lg:w-[600px] overflow-hidden '>
      <Slider {...settings}>
        {items.map((s, i) => (
          <div
            key={i}
            className='h-full lg:h-[500px] pl-5 lg:p-5 pt-5 pb-12  lg:mr-10 outline-none'>
            <div className='relative h-full lg:h-[500px] w-[320px] max-w-[98vw] lg:w-[570px]  p-5 lg:p-12 justify-between  flex flex-col rounded-xl shadow-md lg:shadow-lg bg-white'>
              <div className='hidden absolute lg:flex'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='32'
                  height='22'
                  viewBox='0 0 32 22'
                  fill='none'>
                  <path
                    d='M20.5714 22H27.4286L32 13.2V0H18.2857V13.2H25.1429L20.5714 22ZM2.28571 22H9.14286L13.7143 13.2V0H0V13.2H6.85714L2.28571 22Z'
                    fill='#149248'
                    fillOpacity='0.24'
                  />
                </svg>
              </div>
              <div className='font-light opacity-50 lg:text-xl leading-snug italic my-10'>
                {s.text}
              </div>
              <div className='flex items-center'>
                <div className={`h-10 w-10 rounded-100 ${s.color} mr-5`}></div>
                <div className='flex flex-col'>
                  <div className='font-semibold text-xl leading-normal'>{s.author}</div>
                  <div className='t text-base text-gray-500'>{s.position}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}
