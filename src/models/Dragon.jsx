import { useAnimations, useGLTF } from '@react-three/drei'
import React, { useEffect, useRef } from 'react'
import dragonScene from '../../public/assets/3d/dragon.glb';
import { useFrame } from '@react-three/fiber';

const Dragon = () => {
    const { scene, animations } = useGLTF(dragonScene);
    const dragonRef = useRef();
    const { actions } = useAnimations(animations, dragonRef);

    useEffect(() => {
        actions["Take 001"].play();
    }, []);


    useFrame(({ clock, camera }) => {
        dragonRef.current.position.y = Math.sin(clock.elapsedTime) * 1 + 2;

        if (dragonRef.current.position.x > camera.position.x + 10) {
            dragonRef.current.rotation.y = -1*Math.PI;
        } else if (dragonRef.current.position.x < camera.position.x - 10) {
            dragonRef.current.rotation.y = 0;
        }

        if (dragonRef.current.rotation.y === 180) {
            dragonRef.current.position.x += 0.01;
            dragonRef.current.position.z += 0.01;
        } else {
            dragonRef.current.position.x -= 0.01;
            dragonRef.current.position.z -= 0.01;
        }
    });


    return (
        <mesh
            ref={dragonRef}
             position={[1,1.5,3]}
            //position={[0, 0, 0]}
            rotation={[0.2, 3, 0]}

        >
            <primitive object={scene} />
        </mesh>
    )
}

export default Dragon