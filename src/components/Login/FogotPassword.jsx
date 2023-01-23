
import React from 'react'



function FogotPassword() {
    return (
        <div className="flex bg-slate-300 items-center justify-center  min-h-screen " >
            <div className='flex flex-col px-4 py-6'>

                <div className='flex items-start justify-center bg-slate-300 min-h-screen  '>
                    <div className='flex z-10 flex-col p-8 bg-white rounded-lg w-auto'>

                        <div className='flex'>
                            <div className='flex-grow justify-center flex-row px-4 py-3  '>

                                <div className='flex text-text-color1 text-[25px] justify-center font-semibold'>Password Reset</div>


                            </div>
                        </div>



                        <div className='flex-grow py-3'>
                            <div className='flex-grow px-6 space-y-4'>
                                <div className='text-text-color1 text-[12px] mr-2  text-left '>Forgotten your password? Please enter email address of your mintpay account below, and we'll email instructions for setting a new one. </div>
                                <button className=' border border-slate-300 justify-center text-[16px] w-full rounded  py-5 text-slate-300'></button>
                                <button className=' bg-text-color1 justify-center text-[16px] w-full rounded  py-3 text-white'>Reset my password</button>

                            </div>
                        </div>



                        <div className='flex-grow '>
                            <div className='flex flex-col px-4 py-3 space-y-3'>
                                <div className='flex flex-row justify-center '>


                                </div>

                            </div>
                        </div>

                    </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 py-3 space-y-3'>
                    <div className='text-text-color1 text-[12px] mr-2 text-center '>© 2022 All Rights Reserved at Mintpay </div>
                    <div className='flex flex-row justify-center '>
                        <div className='text-text-color1 text-[16px] mr-2 text-left '>Terms </div>
                        <div className='border-l border-text-color1'></div>
                        <div className='text-text-color1 text-[16px] ml-2 text-left '>Privacy </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default FogotPassword