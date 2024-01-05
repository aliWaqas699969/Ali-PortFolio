'use client';

import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';


const HeroSection = () => {
    return (
        <section>
            <div className='grid grid-cols-1 sm:grid-cols-12'>
                <div className='col-span-7 place-self-center text-center sm:text-left'>
                    <h1 className='mb-4 text-4xl sm:text-5xl lg:text-6xl font-semibold'>
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-800'> Hello,I am {" "}</span>
                        <br></br>
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'Ali waqas',
                                1000, // wait 1s before replacing "Mice" with "Hamsters"
                                'Web Developer',
                                1000,
                            ]}
                            wrapper="span"
                            speed={30}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className='text-lg lg:text-sm mb-6'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ducimus quo hic quos consequuntur in. Itaque et doloremque rerum, debitis veritatis ea mollitia? Assumenda harum eius ut maxime dolores ipsa, impedit excepturi.
                    </p>
                    <div>
                        <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-blue-800  hover:bg-slate-200 text-white'>Hire me</button>
                        <button className='px-1 py-1 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-blue-800 hover:bg-slate-800 text-white mt-3'>
                            <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                                Download CV
                            </span>
                        </button>
                    </div>
                </div>
                <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
                    <div className='rounded-full  bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative'>
                        <Image
                            alt='asimg'
                            src="/Ali.jpg"
                            width={300}
                            className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/3 lg:top-40 left-1/2 mix-blend-lighten'
                            height={300}
                        />
                    </div>

                </div>
            </div>
        </section>
    )
}

export default HeroSection

