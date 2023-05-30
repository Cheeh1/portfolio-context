import React from "react";
import { picture } from '../assets'

const Header = () => {

    return (
        <>
            <section className="flex gap-20 flex-col xl:flex-row md:flex-row my-28 justify-around items-center">
                <div className="flex flex-col gap-5 mx-20 xl:mx-0">
                    <div className="flex gap-3">
                        <p className="border-2 w-4 h-1 my-2 text-[#D9D9D9]"></p>
                        <p className="text-sm font-light text-cinder-light dark:text-white tracking-widest font-inter">MY NAME IS</p>
                    </div>
                    <h1 className="text-cinder-dark dark:text-cinder-dark-mode text-5xl font-bold font-pjs xl:text-6xl">Divine <span className="text-purplelight">Edwin.</span></h1>
                    <p className="text-md w-80 xl:w-96 leading-8 font-inter">
                        Creative frontend developer, who specializes in designing visually appealing and intuitive user interfaces that improve user experience.
                        Proficient in Html, Tailwind Css, Javascript and React.
                    </p>
                    <div className="flex items-center gap-5">
                        <a href="https://github.com/Cheeh1" target='_blank'><i class="fa-brands fa-github fa-xl"></i></a>
                        <a href="https://twitter.com/iamcheeh" target='_blank'><i class="fa-brands fa-twitter fa-xl"></i></a>
                        <a href="https://www.linkedin.com/in/divineedwin/" target='_blank'><i class="fa-brands fa-linkedin-in fa-xl"></i></a>
                        <a href="https://cheehdevworkshop.hashnode.dev/" target="_blank"><i className="fa-brands fa-blogger fa-xl"></i></a>
                    </div>
                </div>
                <div className="xl:w-96">
                    <img data-aos="flip-right" src={picture}alt="Picture" />
                </div>
            </section>
        </>
    )
}
export default Header