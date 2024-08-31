import React, { Suspense } from 'react'
import { experiences, skills } from '../constants'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css';
import CTA from '../components/CTA';
import { Canvas } from '@react-three/fiber';
import { Loader } from '../components/Loader';
import Astronaut from '../models/Astronaut';
import { OrbitControls } from '@react-three/drei';

export const About = () => {
  return (
    <div className='w-full h-full magicpattern'>
      <div className=' w-1/4 md:w-1/6 h-1/2 top-20 right-0 absolute'>
        <Canvas camera={{ position: [0, 0, 5] }}>
          <directionalLight intensity={0.8} color="#FFFFE0" position={[0, 10, 4]} />
          <ambientLight intensity={4} />
          <Suspense fallback={<Loader />}>
            <Astronaut
              position={[0, -2, 0]}
              rotation={[0, -1, 0]}
              scale={[1, 1, 1]}
            />
          </Suspense>
          <OrbitControls
            enableZoom={false} // Disables zooming
            enableRotate={true} // Enables rotation
            enablePan={true} // Enables panning
          />
        </Canvas>
      </div>
      <section className='my-container container mx-auto pt-20 pb-20'>

        <h1 className='text-2xl text-white'>
          Hi, I'm <span className='font-bold blue-text-gradient'>Sai Nyi</span>
        </h1>

        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>
            I am a Software Engineering base in Myanmar, specialize in building (and occasionally designing) exceptional websites, applications, and everything in between.
          </p>

          <div className='py-10 flex flex-col'>
            <h3 className='text-whtie font-semibold text-xl'>MY SKILLS</h3>
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
          <div className='flex flex-col'>
            <h3 className='text-white font-semibold text-xl'>WORK EXPERIENCES</h3>
          </div>
          <div className='mt-12 flex'>
            <VerticalTimeline>
              {
                experiences.map(experience => (
                  <VerticalTimelineElement
                    key={experience.company_name}
                    date={experience.date}
                    icon={<div className='flex justify-center items-center w-full h-full'>
                      <img
                        src={experience.icon}
                        alt={experience.company_name}
                        className='w-[60%] h-[60%] object-contain'
                      />
                    </div>}
                    iconStyle={{ background: experience.iconBg }}
                    contentStyle={{
                      borderBottom: '8px',
                      borderStyle: 'solid',
                      borderBottomColor: experience.iconBg,
                      boxShadow: 'none',
                      background: 'rgba(100,116,139,0.2)',
                    }}
                  >
                    <div>
                      <h3 className='text-slate-400 text-xl font-semibold font-poppins'>{experience.title}</h3>

                      <p className='text-black-500 font-medium font-base' style={{ margin: 0 }}>{experience.company_name}</p>
                    </div>

                    <ul className='my-5 list-disc ml-5 space-y-2'>
                      {
                        experience.points.map((point, index) => (
                          <li key={`experience-point-${index}`} className='text-black-500 font-normal font-base pl-1 tracking-wider'>
                            {point}
                          </li>
                        ))
                      }
                    </ul>
                  </VerticalTimelineElement>
                ))
              }
            </VerticalTimeline>
          </div>
        </div>

        <hr className='border-slate-200' />
        <CTA />
      </section>
    </div>
  )
}
