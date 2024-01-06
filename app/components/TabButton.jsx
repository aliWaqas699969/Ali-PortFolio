import React from 'react'

const TabButton = ({ active, selectTab, children }) => {
    const buttonClasses = active ? 'border-b border-blue-500' : 'text-[#ADB7BE]'
    return (
        <span onClick={selectTab}>
            <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
                {children}
            </p>
        </span>

    )
}

export default TabButton
