import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';
import React, { useRef, useState } from 'react'

const Sky = ({ isRotating }) => {
  const sky = useGLTF('../../assets/3d/black_sky.glb');


  const [rx,setRx] = useState(0);

  const skyRef = useRef();
  useFrame((_,delta) => {
    if (isRotating) {
      skyRef.current.rotation.y += 0.25*delta;
    }

    setRx(0.0002 + rx);
  })

  return (
    // <mesh ref={skyRef} position={[-31,10,-180]} scale={[30,30,30]}>
    <mesh ref={skyRef}>
      <primitive object={sky.scene}
       rotation={[0,0,rx]}
      />
    </mesh>
  )
}

export default Sky