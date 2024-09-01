import React, { act, useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import girlScene from '../../public/assets/3d/character.glb';

const  Girl = ({currentAnimation,...props}) => {
    const group = useRef()
    const { nodes, materials, animations } = useGLTF(girlScene)
    const { actions } = useAnimations(animations, group)

    useEffect(() => {
       console.log(currentAnimation,':',actions)
       Object.values(actions).forEach(action=>action.stop());

        if(actions[currentAnimation]){
            actions[currentAnimation].play();
        }

    }, [actions,currentAnimation]);

    return (
        <group ref={group} {...props} dispose={null}>
            <group name="Sketchfab_Scene">
                <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
                    <group
                        name="602119d407e84b63a65dec04bb9b3f9bfbx"
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={0.01}>
                        <group name="Object_2">
                            <group name="RootNode">
                                <group name="gurarig" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                                    <group name="Object_5">
                                        <primitive object={nodes._rootJoint} />
                                        <skinnedMesh
                                            name="Object_54"
                                            geometry={nodes.Object_54.geometry}
                                            material={materials.SmolGura}
                                            skeleton={nodes.Object_54.skeleton}
                                            morphTargetDictionary={nodes.Object_54.morphTargetDictionary}
                                            morphTargetInfluences={nodes.Object_54.morphTargetInfluences}
                                        />
                                        <skinnedMesh
                                            name="Object_55"
                                            geometry={nodes.Object_55.geometry}
                                            material={materials.SmolguraOutline}
                                            skeleton={nodes.Object_55.skeleton}
                                            morphTargetDictionary={nodes.Object_55.morphTargetDictionary}
                                            morphTargetInfluences={nodes.Object_55.morphTargetInfluences}
                                        />
                                        <skinnedMesh
                                            name="Object_56"
                                            geometry={nodes.Object_56.geometry}
                                            material={materials.SmolguraHead}
                                            skeleton={nodes.Object_56.skeleton}
                                            morphTargetDictionary={nodes.Object_56.morphTargetDictionary}
                                            morphTargetInfluences={nodes.Object_56.morphTargetInfluences}
                                        />
                                        <skinnedMesh
                                            name="Object_57"
                                            geometry={nodes.Object_57.geometry}
                                            material={materials.SmolguraEye}
                                            skeleton={nodes.Object_57.skeleton}
                                            morphTargetDictionary={nodes.Object_57.morphTargetDictionary}
                                            morphTargetInfluences={nodes.Object_57.morphTargetInfluences}
                                        />
                                        <group name="Object_53" rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                                    </group>
                                </group>
                                <group name="smolguramesh" rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                            </group>
                        </group>
                    </group>
                </group>
            </group>
        </group>
    )
}

export default Girl