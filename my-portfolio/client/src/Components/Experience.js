import React, { useState } from 'react'
import SectionTitle from './SectionTitle'
import { useSelector } from 'react-redux'
import { clickStreamEvent } from '../utils/click-stream'

export const Experience = () => {
  const { portfolioData } = useSelector(state => state.root)
  const { exp } = portfolioData
  // const { url, description_first, description_last, techVerbiage, skills } = exp
  const [selectedItem, setSelectedItem] = useState(0);
  const handleClick = (index, experience) => {
    setSelectedItem(index)
    clickStreamEvent(`${experience}_Experience`, "Click", `${experience}_Experience`)
  }

  return (
    <>
      <div className='py-10 sm:py-5'>
        <SectionTitle title={"Experience"} />
      </div>
      <div className='flex py-10  sm:py-5 gap-10 sm:flex-col'>
        <div className='flex flex-col w-1/3 border-l-1 border-tertiary gap-5 sm:flex-row sm:overflow-auto'>
          {exp.map((exper, index) => (
            <div className='cursor-pointer'>
              {/* {console.log(exper)} */}
              <h1 key={exper.id} onClick={() => handleClick(index, exper.period)} className={`${selectedItem === index ? 'text-tertiary border-tertiary -ml-1 bg-[#165232b5] p-2 xl:border-l-4' : 'text-white'}  px-5 sm:px-2 sm:w-[10vh] w-[20vh] text-xl sm:text-lg`}>{exper.period}</h1>
            </div>
          ))}
        </div>
        <div className='text-white w-full px-3'>
          <div className=''>
            <p className='text-4xl sm:text-xl text-orange-500 font-semibold'>{exp[selectedItem].company}</p>
            <p className='sm:text-lg my-2'><em>{exp[selectedItem].role}</em></p>
            <p className='my-2'>{exp[selectedItem].description}</p>
          </div>
        </div>
      </div>
    </>
  )
}
