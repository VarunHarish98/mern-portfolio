import React from 'react'

const Loader = () => {
  return (
    <div className='h-screen flex items-center justify-center fixed inset-0 font-semibold bg-primary text-6xl sm:text-3xl gap-5 z-[100]'>
        <div className='flex '></div>
            <h1 className='text-secondary v'>V</h1>
            <h1 className='text-white h'>H</h1>
            <h1 className='text-tertiary l'>H</h1>
    </div>
  )
}

export default Loader