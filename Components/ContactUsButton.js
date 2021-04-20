import React, { useState } from 'react'
import ContactModal from './ContactModal'

export default function ContactUsButton({ useDark = true }) {
  const [showModal, setShowModal] = useState(false)
  const handleClick = (event) => {
    const cls = event.target.classList
    if (cls.contains('modal') || cls.contains('contact-button')) setShowModal(!showModal)
  }
  const dark = useDark ? `dark:bg-white dark:text-black` : ``
  return (
    <>
      <button
        onClick={handleClick}
        className={`contact-button h-14 rounded-full w-full sm:w-auto px-8 uppercase bg-black   text-white  text-base ${dark}`}>
        Contact us
      </button>
      {showModal && <ContactModal handleClick={handleClick} setShowModal={setShowModal} />}
    </>
  )
}
