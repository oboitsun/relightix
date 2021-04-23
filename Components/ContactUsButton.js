import React, { useState } from 'react'
import ContactModal from './ContactModal'

export default function ContactUsButton({ useDark = true }) {
  const colors = ['bg-green-500', 'bg-yellow-500', 'bg-blue-500', 'bg-purple-700', 'bg-yellow-400']
  const [showModal, setShowModal] = useState(false)
  const [color, setColor] = useState('bg-black')
  const handleClick = (event) => {
    const cls = event.target.classList
    if (cls.contains('modal') || cls.contains('contact-button')) setShowModal(!showModal)
  }
  const dark = useDark ? `` : ``
  return (
    <>
      <button
        onMouseLeave={() => {
          setColor('bg-black')
        }}
        onMouseEnter={() => {
          setColor(colors[Math.floor(Math.random() * colors.length)])
        }}
        onClick={handleClick}
        className={`contact-button h-14 rounded-full w-full sm:w-auto px-8 uppercase transition-all duration-300 hover:shadow-lg  ${color}  text-white  text-base ${dark}`}>
        Contact us
      </button>
      {showModal && <ContactModal handleClick={handleClick} setShowModal={setShowModal} />}
    </>
  )
}
