import React, { useEffect, useRef } from 'react'
import mail from '../../assets/3d/mailbox.glb';
import { useAnimations, useGLTF } from '@react-three/drei';

const MailBox = () => {
    const { scene, animations } = useGLTF(mail);
    const mailRef = useRef();
    const { actions } = useAnimations(animations, mailRef);

    useEffect(() => {
        actions["Armature|Play"].play();
        console.log(actions);
    }, []);

    return (
        <mesh
            position={[-10, -2.5, -10]}
            rotation={[0, -0.4, 0]}
            scale={[0.005, 0.005, 0.005]}
            ref={mailRef}

        >
            <primitive object={scene} />
        </mesh>
    )
}

export default MailBox