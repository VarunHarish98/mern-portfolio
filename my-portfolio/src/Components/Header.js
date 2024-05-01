import React from 'react'
import { headerName, resumeLink } from '../utils/constants'

const Header = () => {
    const handleButtonClick = () => {
        window.open(resumeLink, '_blank');
    }
    return (
        <header className='flex justify-between justify-center	items-center h-20'>
            <div className='w-auto text-4xl text-white p-5 font-display'>{headerName}</div>
            <button onClick={handleButtonClick} className='bg-violet-600 hover:bg-violet-700 text-white mx-4 px-4 h-12 rounded-lg'>My Resume</button>
        </header>
    )
}

export default Header