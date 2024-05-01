import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faCode, faHouse, faUserGraduate } from '@fortawesome/free-solid-svg-icons'

export const Sidebar = () => {
  return (
    <div className='text-2xl flex justify-start my-9  py-4 space-y-4 flex-col '>
        <FontAwesomeIcon color="#F97316" icon={faHouse} />
        <FontAwesomeIcon color="#F97316" icon={faUserGraduate} />
        <FontAwesomeIcon color="#F97316" icon={faCode} />
        <FontAwesomeIcon color="#F97316" icon={faBriefcase} />
    </div>
  )
}
