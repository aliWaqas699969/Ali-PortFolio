import React from 'react'

const FooterSection = () => {
    return (
        <section className='border border-t-[#33353] border-l-0 border-r-0 border-b-0'>
            <div className='flex flex-row justify-between px-16 py-8 '>
                <div>
                    <h1 className='text-xl md:text-3xl font-semibold'>Logo</h1>
                </div>
                <div>
                    <p>All right reserved</p>
                </div>
            </div>
        </section>
    )
}

export default FooterSection;