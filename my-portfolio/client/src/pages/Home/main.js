import React from 'react'
import Header from '../../Components/Header'
import Intro from './intro'
import About from './About'
import { Experience } from '../../Components/Experience'
import Project from '../../Components/Project'
import Education from '../../Components/Education'
import Contact from '../../Components/Contact'
import Footer from '../../Components/Footer'
import { Sidebar } from '../../Components/Sidebar'
import { useSelector } from 'react-redux'
import ReactGA from "react-ga4";


const Home = () => {
  const { portfolioData } = useSelector(state => state.root)
  ReactGA.send({ hitType: "pageview", page: "/", title: "Home Screen" });

  return (
    <div>
      <Header />
      {portfolioData && (<div className='bg-primary px-40 sm:px-5'>
        <Intro />
        <About />
        <Experience />
        <Project />
        <Education />
        <Contact />
        <Footer />
        <Sidebar />
      </div>)}
    </div>
  )
}

export default Home