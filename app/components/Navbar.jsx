import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <nav>
            <div className='flex flex-wrap items-center justify-between mx-auto p-8'>
                <Link href={`/`} className='text-5xl' >LOGO</Link>
                <div className="menu hidden md:block md:w-auto " id="navbar">
                    <ul>
                        <li><Link className='block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white ' rel="stylesheet" href="#about" />About</li>
                    </ul>

                </div>
            </div>
        </nav>
    )
}

export default Navbar
