import React from 'react'
import { bodyContent } from '../utils/constants'

const SectionTitle = ({ title }) => {
    return (
        <div>
            <div className='flex gap-10 items-center'>
                <div className='text-3xl text-secondary sm:text-xl'>{title} </div>
                <div className='w-60 h-[1px] px-10 bg-white'></div>
            </div>

        </div>
    )
}

export default SectionTitle