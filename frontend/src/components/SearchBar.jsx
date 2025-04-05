import React from 'react'

function SearchBar() {
    return (
        <div className='flex w-full max-w-3xl font-poppins '>
            <div className="flex flex-col items-center w-full">
                <div className='flex text-center  text-5xl mt-20 font-semibold tracking-tighter text-neutral-900'>Find the Right Talent, <span className='italic  antialiased font-normal font-spectral px-2 bg-gradient-to-r from-orange-600 to-yellow-600 text-transparent bg-clip-text'>Instantly!</span></div>
                <div className='flex text-center text-md max-w-2xl mt-2 font-normal tracking-tighter text-neutral-600'>Search our alumni network with AI-powered precision. Simply describe the skills and experience you need, and let our intelligent search do the rest.</div>
                
                <input type='text' placeholder='NLP powered search bar' className='outline-none flex w-full  h-min px-5 py-3 bg-white border-[1px] border-neutral-200 mt-4 rounded-full placeholder:font-medium placeholder:text-md placeholder:tracking-tighter' />
                
            </div>
        </div>
    )
}

export default SearchBar
