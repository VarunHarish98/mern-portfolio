import React from 'react'
import SectionTitle from './SectionTitle'
// import { contact } from '../utils/constants'
import { useSelector } from 'react-redux'

const Contact = () => {

    const { portfolioData } = useSelector(state => state.root)
    const { contact } = portfolioData
    // delete contactid')
    // const contactDetails = {...contact} 
    return (
        <div >
            <SectionTitle title={"Contact"} />
            <div className='flex sm:py-10 py-20 sm:flex-col'>
                <div className='flex flex-col'>
                    <h1 className='text-tertiary'>{'{'}</h1>
                    {Object.keys(contact).map((detail) => (
                        <h1 key={detail} className='text-tertiary ml-5'>
                            <span className=''>{detail}</span> : <span className=''>{contact[detail]} </span>

                        </h1>
                    ))}
                    <h1 className='text-tertiary'>{'}'}</h1>
                </div>
                {/* <div className='h-200 w-200 w-1/3 mx-72 sm:w-full sm:mx-2'>
                <dotlottie-player src="https://lottie.host/566ce8f0-2024-4a55-a25c-ecfe09740eeb/KRxvYwloAQ.json" background="transparent" loop autoplay></dotlottie-player>
                </div> */}
            </div>
        </div>
    )
}

export default Contact