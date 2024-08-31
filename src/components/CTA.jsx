import React from 'react'
import { Link } from 'react-router-dom'

const CTA = () => {
  return (
    <section className='text-center mt-10'>
      <p className='text-2xl text-white'>Have a project or idea? Let's collaborate and bring your vision to life! Feel free to contact me .</p>
      <div className='mt-10'>
        <Link to='/contact' className='bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded '>Contact Me</Link>
      </div>
    </section>
  )
}

export default CTA