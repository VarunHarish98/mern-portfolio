import React from 'react'
import { bodyContent, bodyLineLast, bodyLineStart, getStarted, headerName } from '../utils/constants'

export const Body = () => {
    return (
        <div className='h-[80vh] flex flex-col items-start justify-center gap-4 sm:py-2 py-10'>
            <h3 className='text-white sm:text-lg'>{bodyLineStart}</h3> <br />
            <h1 className='font-semibold sm:text-xl text-7xl text-orange-500'>{headerName}</h1> <br />
            <h1 className='text-7xl sm:text-xl font-semibold text-white'>{bodyLineLast}</h1> <br /> 
            {/* <div className='w-auto'> */}
                <p className='w-2/3 text-2xl sm:text-lg'>{bodyContent}</p> <br />
            {/* </div> */}
            <button className='border-2 p-3 rounded-lg'>{getStarted}</button>
        </div>
    )
}
