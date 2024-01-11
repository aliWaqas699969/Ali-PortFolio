'use client';

import Image from 'next/image'
import React, { useTransition, useState } from 'react'
import TabButton from './TabButton';



const tabData = [

    {
        title: 'Skills',
        id: 'Skills',
        content: (
            <ul className='list-disc pl-2'>
                <li>REACT JS</li>
                <li>NEXT JS</li>
            </ul>
        )

    },
    {
        title: 'Education',
        id: 'Education',
        content: (
            <ul className='list-disc pl-2'>
                <li>Bachelour Degree in Software Enginnering</li>
                <li>Capital university of science and technology Islamabad</li>
            </ul>
        )

    },
    {
        title: 'Experience',
        id: 'Experience',
        content: (
            <ul className='list-disc pl-2'>
                <li>Frontend Web Development</li>
                <li>3 year of Experience</li>
            </ul>
        )

    }
]

const AboutSection = () => {
    const [tab, setTab] = useState("Skills")
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        })
    }

    return (
        <section id="about">
            <div className='md:grid md:grid-cols-2 gap-8 items-center py-16 xl:gap-16 sm:py-16 xl:px-16'>
                <Image
                    src="/aboutme.jpg"
                    alt="img"
                    width={500}
                    height={700}
                />

                <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                    <h2 className='text-4xl font-bold mb-4'>About me</h2>
                    <p className='text-base lg:text-lg'>
                        🚀 Greetings! I am Ali waqas, a passionate frontend web developer with a keen eye for design and a commitment to delivering pixel-perfect, user-friendly experiences. 🌐✨ 🎨Turn your vision into reality with captivating and modern website designs. I specialize in creating visually appealing layouts that align with your brand identity. 💻Ensure your website looks flawless on every device. I wll expertly code your design into responsive HTML and CSS, Javascript(reactjs/nextjs)🚀
                    </p>
                    <div className="flex flex-row mt-8 cursor-pointer">
                        <TabButton
                            selectTab={() => handleTabChange('Skills')}
                            active={tab === 'Skills'}
                        >
                            Skills
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange('Education')}
                            active={tab === 'Education'}
                        >
                            Education
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange('Experience')}
                            active={tab === 'Experience'}
                        >
                            Experience
                        </TabButton>

                    </div>
                    <div className='mt-8'>{tabData.find((t) => t.id === tab)?.content}</div>
                </div>
            </div>
            <div className="border-b-2"></div>
        </section>
    )
}

export default AboutSection
