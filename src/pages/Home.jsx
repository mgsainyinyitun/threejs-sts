import React, { Suspense, useEffect, useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Loader } from '../components/Loader'
import { Island } from '../models/Island'
import Bird from '../models/Bird'
import Sky from '../models/Sky'
import Plane from '../models/Plane'
import { House } from '../models/House'
import { WorkPlace } from '../models/WorkPlace'
import Dragon from '../models/Dragon'
import HomeInfo from '../components/HomeInfo'
import sakura from '../../public/assets/sakura.mp3';
import { soundoff, soundon } from '../../public/assets/icons'
import Astronaut from '../models/Astronaut'

export const Home = () => {
  const audioRef = useRef(new Audio(sakura));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;

  const [isPlaying, setIsPlaying] = useState(false);
  const [isRotation, setIsRotation] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  const adjustIslndForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -6.5, -45];
    //let screenPosition = [3,2,-20];
    let rotation = [0.09, 4.7, 0];
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


  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    }

    return () => {
      audioRef.current.pause();
    }

  }, [isPlaying]);

  return (
    <section className='w-full h-screen relative'>


      <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>

      <Canvas className='w-full h-screen bg-black'
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={0.1} />
          <ambientLight intensity={0.005} />
          <hemisphereLight skyColor='#b1e1ff' groundColor='#000000' />
          <Bird />
          <Dragon />
          <Sky isRotating={isRotation} />

          <Island
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation}
            isRotating={isRotation}
            setIsRotating={setIsRotation}
            currentStage={currentStage}
            setCurrentStage={setCurrentStage}
          />

          <Plane
            isRotation={isRotation}
            scale={planeScale}
            position={plaenPoistion}
            rotation={planeRotation}
          />
        </Suspense>
        {/* <OrbitControls/> */}
      </Canvas>

      <div className='absolute bottom-2 left-2 flex'>
        <img src={!isPlaying ? soundoff : soundon} alt="sound" className='w-10 h-10 cursor-pointer object-contain' onClick={() => setIsPlaying(!isPlaying)} />
      </div>
    </section>
  )
}

// download 3D model - sketchfab (free)
