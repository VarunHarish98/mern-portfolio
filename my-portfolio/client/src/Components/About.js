import React from 'react'
import SectionTitle from './SectionTitle'
import Button from './Button'
import { progLanguages } from '../utils/prog-lang'

const About = () => {
    const { portfolioData } = useSelector(state => state.root)
    const { abouts } = portfolioData
    const { url, description_first, techVerbiage, skills } = abouts
    console.log(skills)
    return (
        <div>
            <SectionTitle title={"About Me"} />
            <div>
                <div className='flex w-50 h-50'>
                    <div className='w-full justify-center items-center flex'>
                        <dotlottie-player src={`${url}`} background="transparent" speed="1" style={{ "width": "50vh", "height": "50vh" }} loop autoplay></dotlottie-player>
                    </div>
                    <div className='w-full text-1xl'>{description_first}</div>
                </div>
                <div className='py-20'>
                    <div className='text-orange-500 text-2xl font-semibold'>
                        {techVerbiage}
                    </div>
                    <div className='gap-4 flex rounded-lg py-10'>
                        {console.log(skills)}
                        {skills = ["Javascript"]}
                        {skills.map((item) => (
                            <div key={item} className="flex items-center">
                                {console.log(item)}
                                <img src={progLanguages[item]} alt={item} className="w-10 h-10 mr-2" />
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
