import emailjs from '@emailjs/browser';
import { Canvas } from '@react-three/fiber';
import React, { Suspense, useRef, useState } from 'react'
import Girl from '../models/Girl';
import { Loader } from '../components/Loader';
import useAlert from '../hooks/useAlert';
import Alert from '../components/Alert';

export const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [currentAnimation, setCurrentAnimation] = useState('idle');

  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  };

  const {alert,showAlert,hideAlert} = useAlert();


  const handleFocus = () => setCurrentAnimation('ParadeWalk');
  const handleBlur = () => setCurrentAnimation('idle');

  const handlSubmit = (e) => {
    setCurrentAnimation('smolguraAnimationsRESOURCE')
    e.preventDefault();
    setLoading(true);
    // Email js
    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        form_name: form.name,
        to_name: 'Sai Nyi',
        from_email: form.email,
        to_email: 'sainyi@protonmail.com',
        message: form.message,
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    ).then(() => {
      setLoading(false);
      // alert('Thank you. I will get back to you as soon as possible.');
      showAlert({show:true,msg:'Thank you. I will get back to you as soon as possible.',type:'success'});
      setForm({
        name: '',
        email: '',
        message: '',
      });

      setTimeout(() => {
        setCurrentAnimation('idle');
      }, 10000)

    }).catch(error => {
      showAlert({show:true,msg:'Something went wrong. Please try again.',type:'danger'});
      setLoading(false);
      console.log(error);
      setTimeout(() => {
        setCurrentAnimation('idle');
      }, 10000)
    })
  }

  return (
    <section className='relative flex lg:flex-row flex-col max-continer w-full h-[100vh] pt-20'>

    {alert.show && <Alert {...alert} /> }
      <div className='flex-1 items-center min-w-[50%] flex flex-col'>
        <h1 className='text-lg font-bold text-center'>
          Get in Touch
        </h1>

        <div className='w-full flex justify-center items-center pl-5 pr-5 pb-5 md:pl-24 md:pr-24'>
          <form onSubmit={handlSubmit} className='bg-blue-300 rounded-xl w-full min-w-[50%] flex flex-col gap-7 mt-14 p-5'>
            <div className='flex flex-col gap-2'>
              <label className='text-black-500 font-semibold'>Name</label>
              <input name='name' type="text" className='p-3' placeholder='John' value={form.name} required onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} />
            </div>

            <div className='flex flex-col gap-2'>
              <label className='text-black-500 font-semibold'>E-mail</label>
              <input name='email' type="email" className='p-3' placeholder='E-mail' value={form.emaill} required onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} />
            </div>

            <div className='flex flex-col gap-2'>
              <label className='text-black-500 font-semibold'>Message</label>
              <textarea name='message' rows={4} className='p-3' placeholder='Your message' value={form.message} required onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} />
            </div>

            <button type='submit' className='bg-blue-500 text-white p-3 rounded-lg font-semibold'>
              {loading ? 'SENDING....' : 'SEND'}
            </button>
          </form>
        </div>
      </div>

      <div className='lg:w-1/2 w-full lg:h-auto md:h-[350px] h-[250px]'>
        <Canvas
          camera={{ position: [0, 0, 5] }}
        >
          <directionalLight intensity={2.5} position={[0, 0, 5]} />
          <Suspense fallback={<Loader />}>
            <Girl
              position={[0, -2, 0]}
              rotation={[0, -0.5, 0]}
              scale={1.5}
              currentAnimation={currentAnimation}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  )
}
