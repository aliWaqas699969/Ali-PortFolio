import React from 'react'
import Image from 'next/image'


const HeroSection = () => {
    return (
        <section>
            <div className='grid grid-cols-1 sm:grid-cols-12'>
                <div className='col-span-7 place-self-center text-center sm:text-left'>
                    <h1 className='mb-4 text-4xl sm:text-5xl lg:text-6xl font-semibold'>Hello,I am Ali</h1>
                    <p className='text-lg lg:text-sm mb-6'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ducimus quo hic quos consequuntur in. Itaque et doloremque rerum, debitis veritatis ea mollitia? Assumenda harum eius ut maxime dolores ipsa, impedit excepturi.
                    </p>
                    <div>
                        <button className='px-6 py-3 rounded-full mr-4 bg-white hover:bg-slate-200 text-black'>Hire me</button>
                        <button className='px-6 py-3 rounded-full mr-4 bg-transparent hover:bg-slate-800 text-white border border-white mt-3'>Download CV</button>
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

