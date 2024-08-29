import React from 'react'
import { skills } from '../constants'

export const About = () => {
  return (
    <section className='container mx-auto pt-20'>

      <h1 className='text-2xl'>
        Hi, I'm <span className='font-bold blue-text-gradient'>Sai Nyi</span>
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
          I am a Software Engineering base in Myanmar, specialize in building (and occasionally designing) exceptional websites, applications, and everything in between.
        </p>

        <div className='py-10 flex flex-col'>
          <h3 className='text-black font-semibold'>My Skills</h3>


          <div className='mt-16 flex flex-wrap gap-12'>
            {
              skills.map(skill => (
                <div className='block-container w-20 h-20'>
                  <div className='btn-back rounded-xl' />
                  <div className='btn-front roundex-xl flex justify-center items-center'>
                    <img src={skill.imageUrl} alt={skill.name} className='w-1/2 h-1/2 object-contain' />
                  </div>
                </div>
              ))
            }
          </div>
        </div>


        <div className='pb-10 flex flex-col'>
          <h3 className='text-black font-semibold'>My Projects</h3>
        </div>

      </div>
    </section>
  )
}
