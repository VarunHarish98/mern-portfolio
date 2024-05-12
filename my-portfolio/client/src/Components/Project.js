import React, { useState } from 'react'
import SectionTitle from './SectionTitle'
import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdn, faArrowUpRightFromSquare } from '@fortawesome/free-brands-svg-icons'
import { faAddressBook, faArrowAltCircleRight, faSquare } from '@fortawesome/free-regular-svg-icons'

const Project = () => {
  const { portfolioData } = useSelector(state => state.root)
  const { project } = portfolioData
  const [selectedItem, setSelectedItem] = useState(0);
  const handleClick = (index) => {
    setSelectedItem(index)
  }
  return (
    <div>
      <div>
        <SectionTitle title={"Projects"} />
      </div>
      <div className='flex py-20 sm:py-5 gap-10 sm:flex-col'>
        <div className='flex flex-col border-l-1 border-tertiary gap-5 sm:flex-row sm:overflow-auto sm:scrollbar-hide'>
          {project.map((exp, index) => (
            <div className='cursor-pointer'>
              <h1 key={exp.id} onClick={() => handleClick(index)} className={`${selectedItem === index ? 'text-tertiary border-tertiary -ml-1 bg-[#165232b5] p-2 xl:border-l-4' : 'text-white'}  px-5 sm:px-2 sm:w-[15vh] w-[25vh] text-xl sm:text-lg`}>{exp.title}</h1>
            </div>
          ))}
        </div>
        <div className='flex sm:flex-col px-20 sm:px-2'>
          <div className='w-1/3 sm:w-full justify-center relative'>
            <img className="border-2 rounded-lg sm:h-52 sm:w-72 h-60 w-72 relative" src={project[selectedItem].image} alt={project[selectedItem].title} />
            {/* <div className='absolute bottom-0 left-0 w-full h-10 bg-black opacity-50 flex justify-end gap-3 items-center text-white'><FontAwesomeIcon icon={faAdn} /></div> */}
          </div>

          <div className='text-white w-full px-10 sm:w-full sm:px-2 sm:py-2'>
            <div className='sm:w-full'>
              <span className='text-4xl sm:text-xl text-orange-500 font-semibold'>{project[selectedItem].title}</span>
              <span className='top-10'><FontAwesomeIcon color='white' icon={faArrowAltCircleRight}/></span>
              {project[selectedItem].technologies.length > 0 && <p className='sm:text-lg my-2'><em>Technologies Used - {project[selectedItem].technologies.map((item) => `${item} `)}</em></p>}
              {project[selectedItem].link && <p className='sm:text-lg my-2'><em>Link - {project[selectedItem].link}</em></p>}
              <p className='my-2'>{project[selectedItem].description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project