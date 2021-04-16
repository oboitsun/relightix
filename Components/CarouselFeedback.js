import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
export default function Carousel() {
  const items = [
    {
      author: `Dugan O'Donnell`,
      position: 'CEO Groundly',
      text: `Incredible experience working with Relightix. Communication was superb. They got all the work done to a very high quality quickly. My team was very impressed. He really understands UX and what UI patterns work. We are very happy with all the work they delivered and love showing it off to people. We can't wait to work with Relightix  again.`,
      color: 'bg-red-300',
    },
    {
      author: `Dugan O'Donnell`,
      position: 'CEO Groundly',
      text: `Incredible experience working with Relightix. Communication was superb. They got all the work done to a very high quality quickly. My team was very impressed. He really understands UX and what UI patterns work. We are very happy with all the work they delivered and love showing it off to people. We can't wait to work with Relightix  again.`,
      color: 'bg-red-300',
    },
    {
      author: `Dugan O'Donnell`,
      position: 'CEO Groundly',
      text: `Incredible experience working with Relightix. Communication was superb. They got all the work done to a very high quality quickly. My team was very impressed. He really understands UX and what UI patterns work. We are very happy with all the work they delivered and love showing it off to people. We can't wait to work with Relightix  again.`,
      color: 'bg-red-300',
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
    <div className='w-full overflow-hidden '>
      <Slider {...settings}>
        {items.map((s, i) => (
          <div key={i} className='h-full pl-5 pt-5 pb-12 outline-none'>
            <div className='h-full w-[320px] p-5 flex flex-col rounded-xl shadow-md bg-white'>
              <div className='font-light opacity-50 leading-snug my-10'>{s.text}</div>
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
