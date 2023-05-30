import React from 'react'
import { link, crappo, tenzies, rick } from '../assets'

const Works = () => {

    return (
        <>
            <section className='mt-20' id='portfolios'>
                <div className="flex flex-col gap-2 items-center">
                    <div className="flex gap-3">
                        <p className="border-2 w-4 h-1 my-2.5 text-[#D9D9D9]"></p>
                        <p className="text-md font-light text-cinder-light dark:text-white tracking-widest font-inter">MY WORKS</p>
                    </div>
                    <p className="text-cinder-dark dark:text-cinder-dark-mode font-bold text-3xl font-pjs">PORTFOLIOS</p>
                </div>

                <div className='mt-20 flex flex-col gap-20 xl:gap-0 xl:flex-row justify-evenly items-center'>
                    {/* First Portfolio */}
                    <div
                        className="w-80 md:w-96 xl:w-96 h-full border-solid border-1 rounded bg-white overflow-hidden shadow-md">
                        <img className="w-96 h-80 object-cover" src={crappo} alt="item" />
                        <div className="mt-4 ml-10 mb-5 flex flex-col gap-3">
                            <span className="text-xl text-cinder-dark font-semibold">Crappo Landing Page.</span>
                            <div className='flex gap-5 items-center'>
                                <span className="text-sm border text-cinder-light rounded-md p-2">React</span>
                                <a href='https://crappocryptosite.netlify.app/' target="_blank"><img src={link} alt="link-icon" /></a>
                                <a href='https://github.com/Cheeh1/crypto-site' target="_blank"><i class="fa-brands fa-github text-black fa-xl"></i></a>
                            </div>
                        </div>
                    </div>
                    {/* Second Portfolio */}
                    <div
                        className="w-80 md:w-96 xl:w-96 h-full border-solid border-1 rounded bg-white overflow-hidden shadow-md">
                        <img className="w-96 h-80 sm:48 object-cover" src={tenzies} alt="item" />
                        <div className="mt-4 ml-10 mb-5 flex flex-col gap-3">
                            <span className="text-xl text-cinder-dark font-semibold">Tenzies Game.</span>
                            <div className='flex gap-5 items-center'>
                                <span className="text-sm text-cinder-light border rounded-md p-2">React</span>
                                <a href='https://tenzies-web-game.netlify.app/' target="_blank"><img src={link} alt="link-icon" /></a>
                                <a href='https://github.com/Cheeh1/tenzies-game' target="_blank"><i class="fa-brands fa-github text-black fa-xl"></i></a>
                            </div>
                        </div>
                    </div>
                      {/* Third Portfolio */}
                    <div
                        className="w-80 md:w-96 xl:w-96 h-full border-solid border-1 rounded bg-white overflow-hidden shadow-md">
                        <img className="w-96 h-80 sm:48 object-cover" src={rick} alt="item" />
                        <div className="mt-4 ml-10 mb-5 flex flex-col gap-3">
                            <span className="text-xl text-cinder-dark font-semibold">RickandMorty API Website.</span>
                            <div className='flex gap-5 items-center'>
                                <span className="text-sm text-cinder-light border rounded-md p-2">React</span>
                                <a href='https://rickandmortyapipr.netlify.app/' target="_blank"><img src={link} alt="link-icon" /></a>
                                <a href='https://github.com/Cheeh1/rickandmorty-api-project' target="_blank"><i class="fa-brands fa-github text-black fa-xl"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Works