import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { githubUrl, linkedInUrl } from '../utils/constants'

export const Sidebar = () => {
    const handleIconClick = (icon) => {
        const link = icon === 'Github' ? githubUrl : linkedInUrl
        window.open(link, '_blank');
    }
    return (
        <div className='text-2xl sm:p-0 sm:my-2 flex justify-end gap-4 my-9 mx-2 py-4 space-y-4 flex-col'>
            <div onClick={() => handleIconClick("Github")} className='cursor-pointer'>
                <FontAwesomeIcon icon={faGithub} />
            </div>
            <div onClick={() => handleIconClick("LinkedIn")} className='cursor-pointer'>
                <FontAwesomeIcon icon={faLinkedin} />
            </div>
        </div>
    )
}
