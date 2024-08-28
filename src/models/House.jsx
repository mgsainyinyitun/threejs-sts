import React, { useEffect, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { a } from '@react-spring/three';
import houseScene from '../../assets/3d/tiny_house.glb';
import { useFrame, useThree } from '@react-three/fiber';

export const House = ({isRotating, setIsRotating, ...props }) => {
    const { nodes, materials } = useGLTF(houseScene);
    const islandRef = useRef();
    const { gl, viewport } = useThree();
    const lastX = useRef(0);
    const rotationSpeed = useRef(0);
    const dampingFactor = 0.95;
    const handlePointerDown = e => {
        e.stopPropagation;
        e.preventDeault;
        setIsRotating(true);
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        lastX.current = clientX;
    }
    const handlePointerUp = e => {
        e.stopPropagation;
        e.preventDeault;
        setIsRotating(false);
    }

    const handlePointerMove = e => {
        e.stopPropagation;
        e.preventDeault;
        if (isRotating) {
            const clientX = e.touches ? e.touches[0].clientX : e.clientX;
            const delta = (clientX - lastX.current) / viewport.width;
            islandRef.current.rotation.y += delta * 0.01 * Math.PI;

            lastX.current = clientX;
            rotationSpeed.current = delta * 0.01 * Math.PI;
        }
    }

    const handleKeyDown = (e) => {
        if (e.key === 'ArrowLeft') {
            if (!isRotating) {
                setIsRotating(true);
                islandRef.current.rotation.y += 0.01 * Math.PI;
            }
        } else if (e.key === 'ArrowRight') {
            if (!isRotating) {
                setIsRotating(true);
                islandRef.current.rotation.y -= 0.01 * Math.PI;
            }
        }
    }

    const handleKeyUp = e => {
        if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
            setIsRotating(false);
        }
    }

    useFrame(() => {
        // If not rotating, apply damping to slow down the rotation (smoothly)
        if (!isRotating) {
            // Apply damping factor
            rotationSpeed.current *= dampingFactor;

            // Stop rotation when speed is very small
            if (Math.abs(rotationSpeed.current) < 0.001) {
                rotationSpeed.current = 0;
            }

            islandRef.current.rotation.y += rotationSpeed.current;
        } else {
            // When rotating, determine the current stage based on island's orientation
            const rotation = islandRef.current.rotation.y;

            const normalizedRotation =
                ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

            // Set the current stage based on the island's orientation
            switch (true) {
                case normalizedRotation >= 5.45 && normalizedRotation <= 5.85:
                    // setCurrentStage(4);
                    break;
                case normalizedRotation >= 0.85 && normalizedRotation <= 1.3:
                    // setCurrentStage(3);
                    break;
                case normalizedRotation >= 2.4 && normalizedRotation <= 2.6:
                    // setCurrentStage(2);
                    break;
                case normalizedRotation >= 4.25 && normalizedRotation <= 4.75:
                    // setCurrentStage(1);
                    break;
                default:
                // setCurrentStage(null);
            }
        }
    });

    useEffect(() => {
        const canvas = gl.domElement;
        canvas.addEventListener('pointerdown', handlePointerDown);
        canvas.addEventListener('pointerup', handlePointerUp);
        canvas.addEventListener('pointermove', handlePointerMove);
        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('keyup', handleKeyUp);

        return () => {
            canvas.removeEventListener('pointerdown', handlePointerDown);
            canvas.removeEventListener('pointerup', handlePointerUp);
            canvas.removeEventListener('pointermove', handlePointerMove);
            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('keyup', handleKeyUp);
        }

    }, [gl, handlePointerDown, handlePointerDown, handlePointerMove])


    return (
        <a.group {...props} ref={islandRef}>
            <group scale={0.01}>
                <group position={[-14.573, 5.877, -40.992]} rotation={[-Math.PI / 2, 0, 0]}>
                    <mesh
                        geometry={nodes.Base_Toiture_0.geometry}
                        material={materials.Toiture}
                    />
                    <mesh
                        geometry={nodes.Base_devant_0.geometry}
                        material={materials.devant}
                    />
                    <mesh
                        
                        geometry={nodes.Base_P4_0.geometry}
                        material={materials.material}
                    />
                    <mesh
                        
                        geometry={nodes.Base_chatp_copy_0.geometry}
                        material={materials.chatp_copy}
                    />
                    <mesh
                        
                        geometry={nodes.Base_Charp_0.geometry}
                        material={materials.Charp}
                    />
                    <mesh
                        
                        geometry={nodes.Base_Stoneadd_0.geometry}
                        material={materials.Stoneadd}
                    />
                    <mesh
                        
                        geometry={nodes.Base_Floor_2_0.geometry}
                        material={materials.Floor_2}
                    />
                    <mesh
                        
                        geometry={nodes['Base_09_-_Default_0'].geometry}
                        material={materials['09_-_Default']}
                    />
                    <mesh
                        
                        geometry={nodes['Base_Barri��re_0'].geometry}
                        material={materials.Barrire}
                    />
                    <mesh
                        
                        geometry={nodes.Base_Herbe_0.geometry}
                        material={materials.Herbe}
                    />
                    <mesh
                        
                        geometry={nodes.Base_T1_0.geometry}
                        material={materials.material_11}
                    />
                    <mesh
                        
                        geometry={nodes.Base_Floor_1_0.geometry}
                        material={materials.Floor_1}
                    />
                    <mesh
                        
                        geometry={nodes.Base_Hache_0.geometry}
                        material={materials.Hache}
                    />
                    <mesh
                        
                        geometry={nodes.Base_Panneau_0.geometry}
                        material={materials.Panneau}
                    />
                    <mesh
                        
                        geometry={nodes.Base_pot_0.geometry}
                        material={materials.material_15}
                    />
                    <mesh
                        
                        geometry={nodes.Base_pierref_0.geometry}
                        material={materials.pierref}
                    />
                    <mesh
                        
                        geometry={nodes['Base_15_-_Default_0'].geometry}
                        material={materials['15_-_Default']}
                    />
                    <mesh
                        
                        geometry={nodes.Base_Souche_0.geometry}
                        material={materials.Souche}
                    />
                    <mesh
                        
                        geometry={nodes.Base_citrou_0.geometry}
                        material={materials.citrou}
                    />
                    <mesh
                        
                        geometry={nodes.Base_traitdecoupe_0.geometry}
                        material={materials.traitdecoupe}
                    />
                    <mesh
                        
                        geometry={nodes.Base_Tree_0.geometry}
                        material={materials.Tree}
                    />
                    <mesh
                        
                        geometry={nodes.Base_Web_0.geometry}
                        material={materials.material_22}
                    />
                    <mesh
                        
                        geometry={nodes.Base_wal_0.geometry}
                        material={materials.material_23}
                    />
                    <mesh
                        
                        geometry={nodes.Base__0.geometry}
                        material={materials.Base__0}
                    />
                </group>
            </group>
        </a.group>
    )
}
