import React from 'react'

export default function EndlessText() {
  return (
    <div id='rssBlock' className='overflow-hidden'>
      <p className='w-full  m-auto text-2xl whitespace-nowrap uppercase font-light'>
        <span className='marqueeStyle'>
          {` Contact us and we solve your problems... At least, development ones... 🙃  `}
        </span>
        <span className='marqueeStyle2'>
          {` Contact us and we solve your problems... At least, development ones... 🙃  `}
        </span>
      </p>
    </div>
  )
}
