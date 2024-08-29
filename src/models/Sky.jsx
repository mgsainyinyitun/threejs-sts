import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';
import React, { useRef } from 'react'

const Sky = ({ isRotating }) => {
  const sky = useGLTF('../../assets/3d/fancy_sky.glb');


  const skyRef = useRef();
  useFrame((_,delta) => {
    if (isRotating) {
      skyRef.current.rotation.y += 0.25*delta;
    }
  })

  return (
    <mesh ref={skyRef} position={[-31,10,-180]} scale={[30,30,30]}>
      <primitive object={sky.scene} />
    </mesh>
  )
}

export default Sky