import React from 'react'

const AdminButton = ({onClick, apiName}) => {
    return (
        <div className='flex justify-end'>
            <button className='px-8 py-3 bg-blue-500 text-white border-2 rounded-lg mx-2'>SUBMIT</button>
            {/* <button className='px-8 py-3 bg-black text-white border-2 rounded-lg'>RESET</button> */}
        </div>
    )
}

export default AdminButton