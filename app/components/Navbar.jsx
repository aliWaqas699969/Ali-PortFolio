'use client';

import Link from 'next/link'
import React, { useState } from 'react'
import NavLinks from './NavLinks'
import MenuOverlay from './MenuOverlay';




const navLinks = [
    {
        title: "About",
        path: '#about'
    },
    {
        title: 'Projects',
        path: '#project'
    },
    {
        title: 'Contact',
        path: '#contact'
    }
]

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    return (
        <nav className='fixed top-0 right-0 left-0 bg-[#121212] bg-opacity-100'>
            <div className='flex flex-wrap items-center justify-between mx-auto p-4'>
                <Link href={`/`} className='text-2xl md:text-5xl font-semibold' >LOGO</Link>
                <div className="mobile-menu block md:hidden">
                    {!navbarOpen ?
                        (
                            <button onClick={() => setNavbarOpen(true)}
                                className='flex items-center px-3 py-2 rounded border border-slate-200 text-slate-200 hover:text-white hover:border-white'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            </button>
                        )
                        :
                        (
                            <button onClick={() => setNavbarOpen(false)} className='flex items-center px-3 py-2 rounded border border-slate-200 text-slate-200 hover:text-white hover:border-white'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>


                            </button>
                        )
                    }
                </div>


                <div className="menu hidden md:block md:w-auto" id="navbar">
                    <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <NavLinks href={link.path} title={link.title} />
                            </li>
                        ))}

                    </ul>
                </div>
            </div>
            {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
        </nav>
    )
}

export default Navbar
