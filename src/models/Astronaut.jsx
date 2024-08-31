import React, { useEffect, useRef } from 'react'
import astronaut from '../../assets/3d/astronaut.glb';
import { useAnimations, useGLTF } from '@react-three/drei';

const Astronaut = (props) => {
    const astronautRef = useRef();
    const { scene, animations } = useGLTF(astronaut);
    const { actions } = useAnimations(animations, astronautRef);

    useEffect(() => {
        console.log(actions);
        actions['Animation'].play();
    }, [actions])

    return (
        <mesh {...props} ref={astronautRef}>
            <primitive object={scene} />
        </mesh>
    )
}

export default Astronaut