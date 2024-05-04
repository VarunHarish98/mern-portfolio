import React from 'react'
import SectionTitle from '../../Components/SectionTitle'
import Button from '../../Components/Button'
import { useSelector } from 'react-redux'

const About = () => {
    const { portfolioData } = useSelector(state => state.root)
    const {about} = portfolioData
    const {url, description_first, description_last, techVerbiage, skills} = about
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
                <div className='flex flex-wrap gap-4 mt-5'>
                    {skills.map((item, index) =>
                        <Button key={index} title={item} margin={'mx-4 sm:mx-2'} padding={'sm:px-3 px-4'} height={"h-12"} color={"text-tertiary"} type={"rounded-lg"} border={"border-2"} others={"border-tertiary"} />
                    )}
                </div>
            </div>
        </div>
    )
}

export default About