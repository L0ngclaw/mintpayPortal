import React from 'react'
import wallet from "../images/purse.svg"

function AccountSummery() {
    return (

        <div className='flex  '>
            <div className='flex p-5 rounded-lg  w-full xl:py-[18px] bg-white '>
                {/* inner container */}
                <div className='flex flex-col  w-full md:w-full '>
                    {/* item1 */}
                    <div className='flex text-text-color1  text-[20px] font-semibold  w-auto'>Account Summary</div>
                    {/* item2 */}
                    <div className='flex flex-row  justify-center '>
                        <div className='flex  mt-4 md:pl-8 md:w-3/5 xl'>
                            <div className='flex  pl-6  mb-6'>
                                {/* outter circle */}
                                <div className='flex items-center bg-text-color5 rounded-full justify-center w-48 h-48'>
                                    {/* inner circle */}
                                    <div className='flex items-center justify-center bg-white rounded-full w-44 h-44'>
                                        <div>
                                            <h1 className='text-text-color2 text-[20px] font-semibold pt-7 text-center'>Rs. 0.00</h1>
                                            <h2 className='text-text-color4 text-center'>amount due</h2>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className='flex pl-12 lg:pl-36 lg:pt-4 xl:pl-0 '>
                            <div className='hidden md:block  pr-12'>
                                <img src={wallet} className="w-36 h-36 " alt="" />
                            </div>
                        </div>

                    </div>

                    {/* item3 */}
                    <div className='flex-grow '>
                        <div className='flex flex-col    '>

                            <div className='grid grid-cols-1 md:grid-cols-3 md:justify-between'>
                                <div className='flex justify-center lg:justify-start  md:justify-end lg:pl-4'>
                                    <div className='flex-col text-text-color1 text-[16px] font-semibold text-center justify-center w-auto pt-8 '>Feb 18 2023
                                        <div className='flex text-text-color4 text-[16px] font-semibold texy-center items-center justify-center   w-auto '>Next payment date</div>
                                    </div>
                                </div>
                                <div className='flex justify-center md:justify-end lg:justify-center'>
                                    <div className='flex-col text-text-color1 text-[25px] font-semibold text-center justify-center w-auto pt-4'>Rs 0.00
                                        <div className='flex text-text-color4 text-[16px] font-semibold justify-center w-auto '>Next payment </div>
                                    </div>
                                </div>


                                <div className='flex-grow   '>
                                    <div className='flex justify-center md:justify-end lg:pr-6 lg:pt-2'>
                                        <div className='bg-text-color1 px-[25px] mt-4 text-[16px] justify-center rounded-lg py-2 text-white'>Pay now</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>


    )
}

export default AccountSummery
