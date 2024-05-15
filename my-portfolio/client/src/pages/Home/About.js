import React from 'react'
import SectionTitle from '../../Components/SectionTitle'
import { useSelector } from 'react-redux'
import { progLanguages } from '../../utils/prog-lang'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const About = () => {
    const { portfolioData } = useSelector(state => state.root)
    const { about } = portfolioData
    const { url, description_first, description_last, techVerbiage, skills } = about
    return (
        <div>
            <SectionTitle title={"About Me"} />
            <div className='flex px-5 mx-5 gap-10 items-center sm:flex-row sm:items-start'>
                <div className='h-[70vh] sm:w-full w-full flex justify-center items-center'>
                    {/* <dotlottie-player src={`${url}`} background="transparent" loop autoplay></dotlottie-player> */}
                    <img className='border-2 rounded-3xl max-w-full max-h-full' src={`${url}`} alt='About'></img>
                </div>
                <div className='flex flex-col gap-5 sm:w-full w-full text-white'>
                    <p>{description_first}</p>
                    <p>{description_last}</p>
                </div>
            </div>

            <div className='py-5'>
                <div className='text-tertiary text-2xl'>
                    {techVerbiage}
                </div >
                <div className='gap-4 flex rounded-lg sm:grid sm:grid-cols-4 py-10'>
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
