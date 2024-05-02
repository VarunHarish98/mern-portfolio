import React from 'react'
import Header from '../../Components/Header'
import Intro from './intro'
import About from './About'

const Home = () => {
  return (
    <div>
      <Header />
      <div className='bg-primary px-40 sm:px-5'>
        <Intro />
        <About />
      </div>
    </div>
  )
}

export default Home