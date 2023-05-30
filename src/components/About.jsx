import React from 'react'
import { tailwind } from '../assets'

const About = () => {
    
    return (
        <>
            <div className='bg-grey dark:bg-gray-900' id='about'>
                <div className="flex flex-col py-10 gap-2 items-center">
                    <div className="flex gap-3">
                        <p className="border-2 w-4 h-1 my-2.5 text-[#D9D9D9]"></p>
                        <p className="text-md font-light text-cinder-light dark:text-gray-100 tracking-widest font-inter">LEARNING PATH</p>
                    </div>
                    <p className="text-cinder-dark dark:text-cinder-dark-mode font-bold text-3xl font-pjs">ABOUT & SKILLS</p>
                </div>

                <div className='flex flex-col md:flex-row md:gap-0 xl:flex-row justify-evenly items-center gap-20 pt-5 pb-20'>
                    <div>
                        <p className='xl:w-96 w-80 font-inter text-cinder-light dark:text-gray-100 leading-8'>
                            Hello👋 and welcome to my portfolio! I'm Divine Edwin, a Frontend developer who is passionate about creating beautiful, interactive, and user-friendly websites.
                            I enjoy researching new design trends and technologies as a creative problem solver. My knowledge of frontend development extends beyond coding. I also create technical content.
                            Thank you for visiting my portfolio! Please feel free to browse through my projects.
                        </p>
                    </div>
                    <div className='grid grid-rows-3 grid-cols-3 gap-x-1 xl:gap-x-16 gap-y-16'>
                        <div className='flex flex-col gap-3 text-cinder-dark dark:text-gray-100 font-pjs items-center'>
                            <i className="fa-brands fa-html5 fa-2xl"></i>
                            <p>HTML</p>
                        </div>
                        <div className='flex flex-col gap-3 text-cinder-dark dark:text-gray-100 font-pjs items-center'>
                            <i className="fa-brands fa-css3 fa-2xl"></i>
                            <p>CSS</p>
                        </div>
                        <div className='flex flex-col gap-3 text-cinder-dark dark:text-gray-100 font-pjs items-center'>
                            <i className="fa-brands fa-js fa-2xl"></i>
                            <p>JAVASCRIPT</p>
                        </div>
                        <div className='flex flex-col gap-3 text-cinder-dark dark:text-gray-100 font-pjs items-center'>
                            <i className="fa-brands fa-react fa-2xl"></i>
                            <p>REACT</p>
                        </div>
                        <div className='flex flex-col gap-3 text-cinder-dark dark:text-gray-100 font-pjs items-center'>
                            <i className="fa-brands fa-git-alt fa-2xl"></i>
                            <p>GIT</p>
                        </div>
                        <div className='flex flex-col gap-3 text-cinder-dark dark:text-gray-100 font-pjs items-center'>
                            <i className="fa-brands fa-sass fa-2xl"></i>
                            <p>SASS</p>
                        </div>
                        <div className='flex flex-col -mt-3 text-cinder-dark dark:text-gray-100 font-pjs items-center'>
                            <img src={tailwind} className='w-10' alt='logo' />
                            <p>TAILWIND</p>
                        </div>
                        <div className='flex flex-col gap-3 text-cinder-dark dark:text-gray-100 font-pjs items-center'>
                            <i className="fa-solid fa-mobile-screen-button fa-2xl"></i>
                            <p>RESPONSIVE</p>
                        </div>
                        <div className='flex flex-col gap-3 text-cinder-dark dark:text-gray-100 font-pjs items-center'>
                            <i className="fa-solid fa-terminal fa-2xl"></i>
                            <p>TERMINAL</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default About