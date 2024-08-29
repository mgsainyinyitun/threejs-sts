import { Html } from '@react-three/drei'
import React from 'react'

export const Loader = () => {
    return (
        <Html>
            {/* <div className='flex justify-center items-center'>
                <div className='w-20 h-20 border-2 border-opacity-20 border-blue-500 border-t-blue-500 rounded-full animate-spin'>
                </div>
            </div> */}
            <div
                class="inline-block h-20 w-20 animate-spin rounded-full border-8 border-blue-700 border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
                role="status">
                <span
                    class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                >Loading...</span
                >
            </div>

        </Html>
    )
}
