import React from 'react'

export default function EndlessText({ text, emoji }) {
  const twice = text + emoji
  return (
    <div id='rssBlock' className='overflow-hidden relative'>
      <p className='w-full  m-auto text-2xl lg:text-7xl text-gray-900 dark:text-gray-50  whitespace-nowrap uppercase font-light'>
        <span className='marqueeStyle py-1 leading-tight px-2'>{twice}</span>
        <span className='marqueeStyle2 py-1 leading-tight px-2'>{twice}</span>
      </p>
    </div>
  )
}
