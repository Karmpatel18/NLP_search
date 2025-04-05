import React from 'react'
import { FaStar } from "react-icons/fa";
function Card(Props) {
    return (
        <div className='flex font-poppins border-[1px] w-full max-w-[382px] p-2 rounded-xl border-neutral-200 hover:shadow-lg cursor-pointer shadow-orange-100 transition-all duration-300 bg-white hover:scale-[101%]'>
            <div className="flex flex-row w-full gap-3 ">

                <div className='flex min-w-max h-12 w-12 rounded-md bg-neutral-200'>
                    <img className="rounded-md h-12 w-12" src="https://avatars.githubusercontent.com/u/120663033?v=4"/>
                </div>


                <div className='flex flex-col w-full max-w-max '>
                    <div className="flex w-full justify-between">
                        <div className='flex flex-col text-lg  font-medium tracking-tight text-neutral-900'>
                            {Props.name} Karm Patel
                            <span className='text-sm font-normal text-neutral-600 tracking-tight'>Software Engineer</span>
                        </div>
                        <div className='flex  gap-1 text-neutral-900 tracking-tighter h-min items-center text-[14px]'><span className='text-orange-400 flex items-center '><FaStar size={12} /></span>4.5</div>
                    </div>
                    
                    <div className="flex flex-wrap gap-1.5 w-full mt-3 ">
                        <div className="flex text-nowrap tracking-tighter rounded-full bg-neutral-100 dark:bg-neutral-100 text-neutral-900  px-2 py-1 text-[10px]">React.js</div>
                        <div className="flex text-nowrap tracking-tighter rounded-full bg-neutral-100 dark:bg-neutral-100 text-neutral-900  px-2 py-1 text-[10px]">Tailwind css</div>
                        <div className="flex text-nowrap tracking-tighter rounded-full bg-neutral-100 dark:bg-neutral-100 text-neutral-900  px-2 py-1 text-[10px]">Express.js</div>
                        <div className="flex text-nowrap tracking-tighter rounded-full bg-neutral-100 dark:bg-neutral-100 text-neutral-900  px-2 py-1 text-[10px]">Web sockets</div>
                        <div className="flex text-nowrap tracking-tighter rounded-full bg-neutral-100 dark:bg-neutral-100 text-neutral-900  px-2 py-1 text-[10px]">Express.js</div>
                        <div className="flex text-nowrap tracking-tighter rounded-full bg-neutral-100 dark:bg-neutral-100 text-neutral-900  px-2 py-1 text-[10px]">Web sockets</div>
                        


                    </div>
                    <div className='flex w-full items-center mt-3 justify-between'>
                        <div className="text-[14px] text-neutral-700 tracking-tighter font-normal underline decoration-orange-400 decoration-dashed  ">Full-time</div>
                        <div className='rounded-lg bg-neutral-900 text-neutral-50 font-normal tracking-tighter text-[14px] py-1 px-3'>View Profile</div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Card
