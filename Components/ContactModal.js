import { useState } from 'react'
import { Formik } from 'formik'
import { sendTicket } from '../actions/sendMessage'
import { validationSchema } from '../validators/contactForm'
import { motion, useCycle } from 'framer-motion'
export default function ContactModal({ handleClick, setShowModal }) {
  const [succeed, showSucced] = useState(false)
  return (
    <motion.div
      key='child'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={handleClick}
      className='modal fixed flex justify-center items-center top-0 left-0  w-full h-full bg-black bg-opacity-30 z-50'>
      <div className='p-5 lg:p-12 w-[95vw] lg:w-3/4 max-w-[970px]  bg-gray-50 rounded-lg lg:rounded-xl shadow-md flex flex-wrap justify-between'>
        {!succeed && (
          <>
            <h3 className='w-full text-xl lg:text-4xl font-bold text-black leading-normal'>
              Tell us more about your issues
            </h3>
            <Formik
              initialValues={{ name: '', email: '', text: '' }}
              validationSchema={validationSchema}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                setSubmitting(true)
                sendTicket(values)
                resetForm()
                showSucced(true)
                setSubmitting(false)
              }}>
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
              }) => (
                <form
                  className='w-full h-full flex flex-wrap justify-between '
                  onSubmit={handleSubmit}>
                  <div className='relative mt-8 max-w-[420px] w-full lg:w-1/2 lg:pr-1'>
                    <input
                      id='name'
                      onChange={handleChange}
                      value={values.name}
                      onBlur={handleBlur}
                      className={`${
                        touched.name && errors.name ? 'border-red-600' : ''
                      } w-full h-[60px]  box-border rounded-md border border-gray-300 outline-none text-xl px-5 py-3 font-normal font-lato `}
                      type='text'
                      placeholder='Enter your name'
                    />
                    {errors.name && (
                      <span className=' absolute left-0  -bottom-5   text-xs text-red-600 '>
                        {errors.name}
                      </span>
                    )}
                  </div>
                  <div className='relative mt-8 max-w-[420px] w-full lg:w-1/2 lg:pl-1'>
                    <input
                      id='email'
                      onChange={handleChange}
                      value={values.email}
                      onBlur={handleBlur}
                      className={`${
                        touched.email && errors.email ? 'border-red-600' : ''
                      } w-full h-[60px]  max-w-[420px] box-border rounded-md border border-gray-300 outline-none text-xl px-5 py-3 font-normal font-lato `}
                      type='mail'
                      placeholder='Enter your email address'
                    />
                    {errors.email && (
                      <span className=' absolute left-0 -bottom-5 text-xs text-red-600 lg:px-1'>
                        {errors.email}
                      </span>
                    )}
                  </div>
                  <div className='w-full relative mt-8'>
                    <textarea
                      id='text'
                      onChange={handleChange}
                      value={values.text}
                      onBlur={handleBlur}
                      className={`${
                        touched.text && errors.text ? 'border-red-600' : ''
                      } w-full rounded-md border border-gray-300 outline-none text-xl px-5 py-3 font-normal font-lato `}
                      rows='8'
                      placeholder='How can we help you?'></textarea>
                    {errors.text && (
                      <span className=' absolute left-0  -bottom-3  text-xs text-red-600 '>
                        {errors.text}
                      </span>
                    )}
                  </div>
                  <div className='w-full flex justify-end items-center text-lg font-semibold mt-5 lg:mt-12  '>
                    <button
                      type='button'
                      className='uppercase mr-7 tracking-wide'
                      onClick={() => {
                        setShowModal(false)
                      }}>
                      cancel
                    </button>
                    <button
                      id='submit'
                      type='submit'
                      disabled={isSubmitting}
                      className='uppercase ml-7 px-7 py-4 bg-black rounded-full text-white tracking-wide '>
                      Contact us
                    </button>
                  </div>
                </form>
              )}
            </Formik>
          </>
        )}
        {succeed && (
          <div className='w-full h-full flex flex-col justify-center items-center lg:min-h-[526px]'>
            <div className='my-auto'>
              <h3 className='text-6xl leading-snug text-center'>✉️ 🤝</h3>
              <p className='text-2xl font-bold text-center leading-normal'>
                Thanks for your message
              </p>
              <p className='text-lg lg:text-xl text-center leading-normal'>
                We will review it and contact you soon.{' '}
              </p>
            </div>
            <button
              type='button'
              className='uppercase mt-5 lg:mt-7 tracking-wide text-lg'
              onClick={() => {
                setShowModal(false)
              }}>
              Close
            </button>
          </div>
        )}
      </div>
    </motion.div>
  )
}
