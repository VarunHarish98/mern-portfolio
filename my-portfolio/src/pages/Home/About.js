import React from 'react'
import SectionTitle from '../../Components/SectionTitle'
import { bodyContent, techVerbage, technologiesList } from '../../utils/constants'
import Button from '../../Components/Button'

const About = () => {
    return (
        <div>
            <SectionTitle title={"About Me"} />
            <div className='flex w-full items-center sm:flex-col '>
                <div className='h-[70vh] sm:w-full w-1/2'>
                    <dotlottie-player src="https://lottie.host/62b91ffd-c5c2-40c9-97da-aa83559217f1/tqIiCWrxrE.json" background="transparent" loop autoplay></dotlottie-player>
                </div>
                <div className='flex flex-col gap-5 sm:w-full w-1/2 text-white'>
                    <p>
                        {bodyContent} {bodyContent}
                    </p>
                    <p>
                        {bodyContent} {bodyContent}
                    </p>
                </div>
            </div>
            <div className='py-5'>
                <div className='text-tertiary text-2xl'>
                    {techVerbage}
                </div >
                <div className='flex flex-wrap gap-4 mt-5'>
                    {technologiesList.map((item, index) =>
                        <Button key={index} title={item} margin={'mx-4 sm:mx-2'} padding={'sm:px-3 px-4'} height={"h-12"} color={"text-tertiary"} type={"rounded-lg"} border={"border-2"} others={"border-tertiary"} />
                    )}
                </div>
            </div>
        </div>
    )
}

export default About