import { useGLTF } from '@react-three/drei'
import React from 'react'
import birdScene from '../../assets/3d/bird.glb';

const Bird = () => {
const {scene,animation } = useGLTF(birdScene);

  return (
    <mesh position={[-5,2,-19]} scale={[0.03 ,0.03,0.03]}>
        <primitive object={scene} />
    </mesh>
  )
}

export default Bird