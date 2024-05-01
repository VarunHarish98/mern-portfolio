import React from 'react'
import { bodyContent, bodyLineLast, bodyLineStart, getStarted, headerName } from '../utils/constants'

export const Body = () => {
    return (
        <div className='p-20 py-10'>
            <h3 className='text-2xl'>{bodyLineStart}</h3> <br />
            <h1 className='font-semibold text-7xl text-orange-500'>{headerName}</h1> <br />
            <h1 className='text-7xl font-semibold text-white'>{bodyLineLast}</h1> <br /> 
            {/* <div className='w-auto'> */}
                <h2 className='text-2xl'>{bodyContent}</h2> <br />
            {/* </div> */}
            <button className='border-2 p-3 rounded-lg'>{getStarted}</button>
        </div>
    )
}
