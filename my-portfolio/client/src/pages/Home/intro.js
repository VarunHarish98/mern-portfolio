import React from 'react'
import { bodyContent, bodyLineLast, bodyLineStart, getStarted, headerName, resumeBtnContent } from '../../utils/constants'
import { useSelector } from 'react-redux'
import ReactGA from "react-ga4";
import { clickStreamEvent } from '../../utils/click-stream';


const Intro = () => {
    const {loading, portfolioData} = useSelector(state => state.root)
    const {intros} = portfolioData
    const {welcomeText, firstName, middleName, lastName, introduction, description} = intros

    // const handleClick = (resume_verbiage) => {
    //     window.open(resumeLink, '_blank');
    //     clickStreamEvent(`${resume_verbiage}`, "Click", `${resume_verbiage}`)
    // }
    return (
        <div className='h-[80vh] bg-primary flex flex-col items-start justify-center sm:gap-3 gap-8 py-10'>
            <h1 className='text-white'>{welcomeText}</h1>
            <h1 className='text-secondary text-7xl sm:text-2xl font-semibold'>{`${firstName} ${middleName} ${lastName}`}</h1>
            <h1 className='text-white text-6xl sm:text-2xl font-semibold'>{introduction}</h1>
            <p className='text-white w-2/3'>{description}</p>
            {/* <button onClick={() => handleClick(resumeBtnContent)} className='bg-violet-600 hover:bg-violet-700 text-white sm:mx-3 sm:px-2 sm:text:xl mx-4 px-4 h-12 rounded-lg'>
                {resumeBtnContent}
            </button> */}
            {/* <button onClick={handleClick} className='border-2 sm:border-1 sm:px-2 sm:py-2 text-tertiary border-tertiary px-10 py-3 rounded-lg'>{getStarted}</button> */}
        </div>
    )
}

export default Intro