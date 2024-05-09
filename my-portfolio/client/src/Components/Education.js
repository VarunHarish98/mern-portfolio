import React, { useState } from 'react'
import SectionTitle from './SectionTitle'
import { useSelector } from 'react-redux';

const Education = () => {
  const { portfolioData } = useSelector(state => state.root)
  const { education } = portfolioData
  const [selectedItem, setSelectedItem] = useState(0);
  const handleClick = (index) => {
    setSelectedItem(index)
  }
  return (
    <div>
      <div>
        <SectionTitle title={"Education"} />
      </div>
      <div className='flex py-20 sm:py-5 gap-10 sm:flex-col'>
        <div className='flex flex-col border-l-1 border-tertiary gap-5 sm:flex-row sm:overflow-auto sm:scrollbar-hide sm:gap-7'>
          {education.map((exp, index) => (
            <div className='cursor-pointer'>
              <h1 key={exp.id} onClick={() => handleClick(index)} className={`${selectedItem === index ? 'text-tertiary border-tertiary -ml-1 bg-[#165232b5] p-2 xl:border-l-4' : 'text-white'}  px-5 sm:px-2 sm:w-[15vh] w-[20vh] text-xl sm:text-lg`}>{exp.degree}</h1>
            </div>
          ))}
        </div>
        <div className='flex sm:flex-col px-20 sm:px-2 justify-center items-center hover:border-2 hover:rounded-lg hover:border-white hover:p-4'>
          <div className='w-1/3 sm:w-full'>
            <img className={"border-2 rounded-lg sm:h-52 sm:w-72"} src={`${education[selectedItem].image}`} alt={education[selectedItem].title} />
          </div>
          <div className='text-white w-full px-10 sm:w-full sm:px-2 sm:py-4 '>
            <div className=''>
              <p className='text-4xl sm:text-xl text-orange-500 font-semibold'>{education[selectedItem].title}</p>{education[selectedItem].link && <p className='sm:text-lg my-2'><em>Link - {education[selectedItem].link}</em></p>}
              <p className='my-2'>{education[selectedItem].major}</p>
              <p className='my-2'>{education[selectedItem].year}</p>
              {/* <p className='my-2'>{education[selectedItem].courses}</p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education
