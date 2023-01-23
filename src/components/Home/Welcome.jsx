import React from 'react'
import { InformationCircleIcon } from '@heroicons/react/24/solid'
import p1 from '../images/welcome-img-male.svg'

const Welcome = () => {
    return (

        <div className='flex flex-col bg-slate-200  space-y-6  md:pt-1 '>
            <div>
                {/* card container */}
                <div className='flex w-full md:w-full  justify-center   '>
                    {/* card */}
                    <div className='flex bg-white w-full md:w-full xl:py-[58px] rounded-lg p-4 '>
                        <div className='flex md:flex-row xl:px-12 w-full '>
                            {/* inner container */}

                            <div className='grid grid-cols-1 md:grid-cols-2 lg:gap-64 xl:gap-0 w-full'>
                                <div className='flex lg:w-1/2'>
                                    <div className='flex flex-col w-full items-center px-20 md:items-start md:px-0'>
                                        {/* flex upper */}
                                        <div className='flex text-text-color1 text-center md:text-left w-[173px] md:w-[240px] h-[100px]  '>
                                            <h1 className='font-semibold  text-[25px] md:text-[30px] md:text-left mb-[30px]'>Welcome back, Pubudu</h1>
                                        </div>
                                        <div className='flex '>
                                            <h2 className='text-text-color2 mb-4 text-[18px] md:text-left font-sans'>Est. available to split</h2>
                                        </div>
                                        {/* flex middle */}
                                        <div className='flex'>
                                            <div className='flex flex-row mb-2  '>
                                                <h1 className='flex-none text-text-color1 text-[30px] md:text-left md:text-[35px] font-semibold'>Rs. 5,000.00</h1>
                                                <span><InformationCircleIcon className="h-6 w-6 mt-3 ml-4 text-text-color1 " /></span>
                                            </div>
                                        </div>
                                        {/* buttn */}
                                        <div className='flex left-0'>

                                            <button className='bg-text-color1 px-[25px] mt-4 text-[16px] md:allign-left rounded-lg py-2 text-white'>Shop now</button>
                                        </div>

                                    </div>
                                </div>
                                {/* Image */}
                                <div className='flex-auto hidden sm:block items-center w-80 h-64 justify-self-end'>
                                    <img src={p1} className='  ' alt="" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Welcome
