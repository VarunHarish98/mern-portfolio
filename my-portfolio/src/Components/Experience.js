import React, { useState } from 'react'
import SectionTitle from './SectionTitle'
import { experience } from '../utils/constants'

export const Experience = () => {
  const [selectedItem, setSelectedItem] = useState(0);
  const [displayExperience, setDisplayExperiences] = useState({ id: '131d1508-0a12-44b1-a553-df5b6c06f488', period: '2020-2023', company: 'Accenture', role: 'Associate Software Engineer', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing…a qui officia deserunt mollit anim id est laborum' })
  const handleClick = (index) => {
    setSelectedItem(index)
    setDisplayExperiences(experience[index])
  }

  return (
    <>
      <div className='py-10 sm:py-5'>
        <SectionTitle title={"Experience"} />
      </div>
      <div className='flex'>
        <div className='flex flex-col sm:text-lg text-2xl w-1/6 sm:w-2/6 mt-10 mb-20'>
          {experience.map((exp, index) => (
            <div className='px-3 py-1 flex justify-center items-center border-tertiary border-2'>
              {console.log(`${selectedItem, index}------${selectedItem === index ? 'text-white border-tertiary ' : 'text-white '} text-2xl sm:text-xl`)}
              <h1 key={exp.id} onClick={() => handleClick(index)} className={`${selectedItem === index ? 'text-tertiary ' : 'text-white '}text-2xl sm:text-xl`}>{exp.period}</h1>
            </div>
          ))}
        </div>
        <div className='text-white w-full py-1 px-5'>
          <div className='py-1 sm:py-0' key={displayExperience.id}>
            <p className='text-3xl sm:text-xl text-orange-500 font-semibold'>{displayExperience.company}</p>
            <p className='sm:text-lg'><em>{displayExperience.role}</em></p>
            <p>{displayExperience.description}</p>
          </div>
        </div>
      </div>
    </>
  )
}
