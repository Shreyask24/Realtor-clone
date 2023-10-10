import React from 'react'
import { FcGoogle } from 'react-icons/fc'

const OAuth = () => {
    return (
        <button className='w-full flex justify-center items-center bg-red-700 text-white px-3 py-7 uppercase rounded text-sm font-medium hover:bg-red-800 active:bg-red-900 shadow-sm hover:shadow-md active:shadow-lg transition duration-150 ease-in-out'>
            <FcGoogle className='mr-2 text-2xl bg-white rounded-full' /> Continue With Google
        </button>
    )
}

export default OAuth