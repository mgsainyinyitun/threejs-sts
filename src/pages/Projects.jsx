import React from 'react'
import { projects } from '../constants'
import { Link } from 'react-router-dom'
import { arrow } from '../../assets/icons'
import CTA from '../components/CTA'

export const Projects = () => {
  return (
    <section className='my-container container mx-auto pt-20 pb-20'>
      <h1 className='text-2xl'>
        My <span className='font-bold blue-text-gradient'>Projects</span>
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
          I believe the best and efficient way to learning programming is by doing projects. So, whenever I learn something new I always try to implement it in a project. Here are some of the projects that I like to showcase.
        </p>
      </div>

      <div className='flex flex-wrap my-20 gap-16'>

        {
          projects.map(project => (
            <div className='lg:w-[400px] w-full' key={project.name}>
              <div className='block-container w-12 h-12'>
                <div className={`btn-back rounded-xl ${project.theme} btn-back-red`} />
                <div className='btn-front rounded-xl flex justify-center items-center'>
                  <img
                    src={project.iconUrl}
                    alt='project-icon'
                    className='w-1/2 h-1/2 object-contain'
                  />
                </div>
              </div>
              <div className='flex flex-col'>
                <h3 className='font-semibold text-2xl'>{project.name}</h3>
                <p className='mt-2 text-slate-500'>
                  {project.description}
                </p>
                <div className='mt-5 flex items-center gap-2'>
                  <Link
                    to={project.link}
                    target='_blank'
                    rel='noreferrer noopenner'
                    className='font-semibold text-blue-600'
                  >
                    Live Demo
                  </Link>

                  <img src={arrow} alt='arrow' className='w-4 h-4 object-contain ml-2' />
                </div>
              </div>
            </div>
          ))
        }

      </div>
      <hr className='border-slate-200' />
      <CTA />
    </section>
  )
}
