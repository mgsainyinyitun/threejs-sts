import React, { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Loader } from '../components/Loader'
import { Island } from '../models/Island'
import Bird from '../models/Bird'
import Sky from '../models/Sky'
import Plane from '../models/Plane'
{/* <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
         POPUP
      </div> */}
export const Home = () => {
  const [isRotation, setIsRotation] = useState(false);
  const adjustIslndForScreenSize = () => {
    let screenScale = null, screenPosition = [0, -6.5, -45];
    let rotation = [0.1, 4.7, 0];
    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }
    return [screenScale, screenPosition, rotation];
  }

  const adjustPlaneForScreenSize = () => {
    let screenScale, screenPosition, rotation;
    if (window.innerWidth < 768) {
      screenScale = [5, 5, 5];
      screenPosition = [0, -3.5, -10];
    } else {
      screenScale = [5, 5, 5];
      screenPosition = [0, -3.5, -10];
    }
    rotation = [0.1, 1.4, 0]
    return [screenScale, screenPosition, rotation];
  }

  const [islandScale, islandPosition, islandRotation] = adjustIslndForScreenSize();
  const [planeScale, plaenPoistion, planeRotation] = adjustPlaneForScreenSize();

  return (
    <section className='w-full h-screen relative'>
      <Canvas className='w-full h-screen bg-transparent'
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <hemisphereLight skyColor='#b1e1ff' groundColor='#000000' />
          <Bird />
          <Sky isRotating={isRotation} />

          <Island
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation}
            isRotating={isRotation}
            setIsRotating={setIsRotation}
          />
          <Plane
            isRotation={isRotation}
            scale={planeScale}
            position={plaenPoistion}
            rotation={planeRotation}
          />
        </Suspense>
      </Canvas>
    </section>
  )
}

// download 3D model - sketchfab (free)
