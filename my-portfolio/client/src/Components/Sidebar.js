import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { useSelector } from 'react-redux'
import { clickStreamEvent } from '../utils/click-stream'

export const Sidebar = () => {
    const { portfolioData } = useSelector(state => state.root)
    const { others } = portfolioData
    const { linkedinUrl, githubUrl, email } = others
    const handleIconClick = (icon) => {
        const link = icon === 'Github' ? githubUrl : (icon === 'Email' ? email : linkedinUrl);
        clickStreamEvent(`${icon}_Sidebar`, 'Click', `${icon}_Sidebar`)
        window.open(link, '_blank');
    }
    return (
        <div className='fixed bottom-0 left-0 px-2 sm:static'>
            <div className='text-2xl flex gap-4 flex-col sm:flex-row sm:justify-center sm:py-2'>
                <div onClick={() => handleIconClick("Email")} className='cursor-pointer hover:text-4xl'>
                    <FontAwesomeIcon color="white" icon={faEnvelope} />
                </div>
                <div onClick={() => handleIconClick("Github")} className='cursor-pointer hover:text-4xl'>
                    <FontAwesomeIcon color="white" icon={faGithub} />
                </div>
                <div onClick={() => handleIconClick("LinkedIn")} className='cursor-pointer hover:text-4xl'>
                    <FontAwesomeIcon color="white" icon={faLinkedin} />
                </div>
            </div>
            <div className='w-[1px] bg-white h-32 mx-2 sm:hidden'>
            </div>
        </div>
    )
}
