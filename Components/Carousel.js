import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
export default function Carousel() {
  const items = [
    {
      title: 'Frontend Development',
      text:
        'We help you to relight your idea or transform existing business by providing more value for it.',
      color: 'bg-red-300',
    },
    {
      title: 'UI/UX Design',
      text:
        'We help you to relight your idea or transform existing business by providing more value for it.',
      color: 'bg-blue-300',
    },
    {
      title: 'Backend Development',
      text:
        'We help you to relight your idea or transform existing business by providing more value for it.',
      color: 'bg-green-300',
    },
    {
      title: 'Product Support',
      text:
        'We help you to relight your idea or transform existing business by providing more value for it.',
      color: 'bg-yellow-300',
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
    <div className='w-full overflow-hidden'>
      <Slider {...settings}>
        {items.map((s, i) => (
          <div key={i} className='h-full w-full pl-5 pr-5 py-10 outline-none'>
            <div className='h-[270px] w-[270px]  p-6 flex flex-col rounded-xl shadow-md bg-white'>
              <div className={`h-16 w-16 rounded-lg ${s.color} mb-6`}></div>
              <div className='font-semibold text-lg leading-normal mb-3'>{s.title}</div>
              <div className='font-light opacity-50 leading-snug'>{s.text}</div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}
