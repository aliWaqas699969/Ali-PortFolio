'use client';

import React, { useRef } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'

const ProjectSection = () => {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true })

    const cardComponent = {
        initial: { x: 0, opacity: 0 },
        animate: { x: 2, opacity: 50 }
    }


    return (
        <div id="project" className='mt-6 '>
            <div>
                <h1 id="project" className="mt-2 mb-3 text-3xl font-semibold tracking-tight text-center lg:leading-snug text-brand-primary lg:text-4xl ">
                    Projects</h1>
                <div className="text-center mb-6">
                    <p className="text-lg">Web Projects done by me.</p>
                </div>
                <div>
                    <motion.div ref={ref}
                        variants={cardComponent}
                        initial='initial'
                        animate={isInView ? 'animate' : "initial"}
                        transition={{ duration: 0.5, delay: 0.5 }}

                        className='flex  justify-center flex-wrap gap-6'>
                        <div>
                            <div
                                className='h-52 w-64 md:h-64 md:w-80 rounded-t-xl relative group '
                                style={{ backgroundImage: `url('/tapandeat.png')`, backgroundSize: 'cover' }}
                            >
                                <div className="overlay items-center justify-center rounded-t-xl absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
                                    <Link
                                        href="https://dev.admin.tapandeat.co/"
                                        className='h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link'
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 cursor-pointer text-[#ADB7BE]  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover/link:text-white ">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        </svg>


                                    </Link>
                                </div>
                            </div>
                            <div className="rounded-b-xl bg-[#181818] py-6 px-4">
                                <h5 className='text-xl font-semibold mb-2'>Tap and Eat </h5>
                                <p className='text-[#ADB7BE]'>A E-commerce Application</p>
                            </div>
                        </div>
                        <div>
                            <div
                                className='h-52 w-64 md:h-64 md:w-80 rounded-t-xl relative group '
                                style={{ backgroundImage: `url('/YbTech.png')`, backgroundSize: 'cover' }}
                            >
                                <div className="overlay items-center justify-center rounded-t-xl absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
                                    <Link
                                        href="https://ybsoft.tech/"
                                        className='h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link'
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 cursor-pointer text-[#ADB7BE]  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover/link:text-white ">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        </svg>


                                    </Link>
                                </div>
                            </div>
                            <div className="rounded-b-xl bg-[#181818] py-6 px-4">
                                <h5 className='text-xl font-semibold mb-2'>Yb Tech</h5>
                                <p className='text-[#ADB7BE]'>A Software Application</p>
                            </div>
                        </div>
                        <div>
                            <div
                                className='h-52 w-64 md:h-64 md:w-80 rounded-t-xl relative group '
                                style={{ backgroundImage: `url('/mrAgain.png')`, backgroundSize: 'cover' }}
                            >
                                <div className="overlay items-center justify-center rounded-t-xl absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
                                    <Link
                                        href="https://www.mragain.nl/"
                                        className='h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link'
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 cursor-pointer text-[#ADB7BE]  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover/link:text-white ">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        </svg>


                                    </Link>
                                </div>
                            </div>
                            <div className="rounded-b-xl bg-[#181818] py-6 px-4">
                                <h5 className='text-xl font-semibold mb-2'>Mr Again</h5>
                                <p className='text-[#ADB7BE]'>A Mobile Repair Application</p>
                            </div>
                        </div>
                    </motion.div>

                </div>
                <div className="mx-auto prose text-center dark:prose-invert mt-14 max-w-screen-sm">
                    <p>I provide real-time connectivity to enable software providers and financial institutions to build integrated products for their small business customers.</p><br />
                    <p>Our API infrastructure is leveraged by clients ranging from lenders to corporate card providers and business forecasting tools, with use cases including automatic reconciliation, business dashboarding, and loan decisioning.</p><br />
                </div>









                <div className="border-b-2 mt-4"></div>
                <div className="mt-8">
                    <h1 className="mt-2 mb-3 text-3xl font-semibold tracking-tight text-center lg:leading-snug text-brand-primary lg:text-4xl ">
                        Skills</h1>
                    <div className="text-center mb-6">
                        <p className="text-lg">Technologies work on.</p>
                    </div>
                    <div className="flex flex-row justify-center flex-wrap gap-6 ">
                        <figure className="relative max-w-xs transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
                            <img className="rounded-lg w-full h-full -z-10" src="https://media.licdn.com/dms/image/D4D12AQHlkQTsee8LhQ/article-cover_image-shrink_720_1280/0/1680955149569?e=2147483647&v=beta&t=z5zrqWSKr74zJOnKDQQc6V9dW8XzLtB45u0zFizghUQ" alt="image description" />
                            <figcaption className="absolute px-4 text-lg text-white bottom-6">
                                <p>Html CSS, Javascript</p>
                            </figcaption>
                        </figure>
                        <figure className="relative max-w-xs transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
                            <img className="rounded-lg w-full h-full -z-10" src="https://freeprojectscodes.com/wp-content/uploads/2022/06/React-js-projects-for-beginners-with-source-code.png" alt="image description" />
                            <figcaption className="absolute px-4 text-lg text-white bottom-6">
                                <p>React js </p>
                            </figcaption>
                        </figure>
                        <figure className="relative max-w-xs transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
                            <img className="rounded-lg w-full h-full -z-10" src="https://cdn.sanity.io/images/3do82whm/next/4b1f008289a88f4438a1c983fb32cf1a636d9d0e-1000x667.png?w=720&h=480&fit=clip&auto=format" alt="image description" />
                            <figcaption className="absolute px-4 text-lg text-white bottom-6">
                                <p>Next js </p>
                            </figcaption>
                        </figure>
                    </div>

                    <div className="mx-auto prose text-center dark:prose-invert mt-14 max-w-screen-sm -z-10">
                        <p>
                            Frontend web development in React and Next.js involves creating dynamic and interactive user interfaces for web applications. React, a JavaScript library, provides a component-based architecture that simplifies the development process, enabling the creation of reusable UI elements.</p><br />
                        <p>
                            Next.js, built on top of React, enhances the development experience by offering server-side rendering, automatic code splitting, and simplified routing. This combination empowers developers to build performant and SEO-friendly web applications with ease. React and Next.js are widely adopted in the industry, offering a powerful and efficient toolkit for crafting modern and responsive user interfaces.
                        </p><br />

                    </div>
                </div>

                <div className="border-b-2"></div>
            </div>
        </div >
    )
}

export default ProjectSection
