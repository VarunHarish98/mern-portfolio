import React from 'react'
import SectionTitle from '../../Components/SectionTitle'
import Button from '../../Components/Button'
import { useSelector } from 'react-redux'
import { progLanguages } from '../../utils/prog-lang'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
let Tooltip = require('rc-tooltip');


const About = () => {
    const { portfolioData } = useSelector(state => state.root)
    const { about } = portfolioData
    const { url, description_first, description_last, techVerbiage, skills } = about
    return (
        <div>
            <SectionTitle title={"About Me"} />
            <div className='flex w-full items-center sm:flex-col '>
                <div className='h-[70vh] sm:w-full w-1/2'>
                    <dotlottie-player src={`${url}`} background="transparent" loop autoplay></dotlottie-player>
                </div>
                <div className='flex flex-col gap-5 sm:w-full w-1/2 text-white'>
                    <p>
                        {description_first}
                    </p>
                    <p>
                        {description_last}
                    </p>
                </div>
            </div>
            <div className='py-5'>
                <div className='text-tertiary text-2xl'>
                    {techVerbiage}
                </div >
                <div className='gap-4 flex rounded-lg py-10'>
                    {skills.map((item) => (
                        <div
                            key={item}
                            className="flex justify-center hover:border-0 items-center hover:shadow hover:border-lg relative"
                        >
                            <FontAwesomeIcon
                                title={item}
                                color='white'
                                icon={progLanguages[item.replace(" ", "")]}
                                className="w-10 h-10 mr-2 hover:border-2 rounded-lg cursor-pointer border-white p-2 shadow"
                            />
                            <span className="absolute bg-black px-2 py-1 rounded-md bottom-full left-1/2 transform -translate-x-1/2 opacity-0 transition-opacity ">
                                {item}
                            </span>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default About
