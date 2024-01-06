import React from 'react'



const achivementList = [
    {
        metric: 'Projects',
        value: '50+',
    },
    {
        metric: 'User',
        value: '100+',
    },
    {
        metric: 'Awards',
        value: '5+',

    },
    {
        metric: 'Years',
        value: '3+',
    }
]

const AchivementSection = () => {
    return (
        <div
            className='py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'
        >
            <div className='border-[#33323F] border rounded-md py-8 px-16 flex flex-row items-center justify-between'>
                {
                    achivementList.map((items, index) => (
                        <div key={index}
                            className='flex flex-col items-center justify-center mx-4'>
                            <h2 className='text-4xl font-bold'>{items.value}</h2>
                            <p className='text-base text-[#ADB7BE]'>{items.metric}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default AchivementSection
