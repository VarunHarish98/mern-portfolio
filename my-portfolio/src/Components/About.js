import React from 'react'
import SectionTitle from './SectionTitle'
import { bodyContent, techVerbage, technologiesList } from '../utils/constants'
import Button from './Button'

const About = () => {
    return (
        <div>
            <SectionTitle title={"About Me"} />
            <div>
                <div className='flex w-50 h-50'>
                    <div className='w-full justify-center items-center flex'>
                        <dotlottie-player src="https://lottie.host/62b91ffd-c5c2-40c9-97da-aa83559217f1/tqIiCWrxrE.json" background="transparent" speed="1" style={{ "width": "50vh", "height": "50vh" }} loop autoplay></dotlottie-player>
                    </div>
                    <div className='w-full text-1xl'>{bodyContent}{bodyContent}{bodyContent}{bodyContent}{bodyContent}{bodyContent}</div>
                </div>
                <div className='py-20'>
                    <div className='text-orange-500 text-2xl font-semibold'>
                        {techVerbage}
                    </div>
                    <div className='gap-4 flex rounded-lg py-10'>
                        {technologiesList.map((item) => 
                            <Button title={item} margin={'mx-4'} padding={'px-4'} height={"h-12"} color={""} type={"rounded-lg"} border={"border-2"} others={"border-tertiary flex"} />
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About