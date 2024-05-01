import React from 'react'
import { Body } from "./Body";
import { Footer } from "./Footer";
import Header from "./Header";
import { Sidebar } from "./Sidebar";
import { Experience } from './Experience';
import Project from './Project';
import { Education } from './Education';

export const Main = () => {
    return (
        <div className='h-full '>
            <Header />
            <div className='flex flex-1 border-solid border-amber-400'>
                <Sidebar className='h-full' />
                <div className='border-solid border-amber-400 flex flex-col flex-1 mx-5'>
                    <Body />
                    <Experience />
                    <Project />
                    <Education />
                    <Footer />
                </div>
            </div>
        </div>
    )
}
