import React from 'react'
import ll from '../components/images/loginlogo.png'
function SignupStep1() {
    return (
        <div className="flex bg-slate-300 items-center justify-center  min-h-screen " >
            <div className='flex flex-col px-4 py-6'>
                {/* 1 */}
                <div className='flex justify-center mb-12'>
                    <img src={ll} className='flex w-28 h-10 md:
                       ' alt="" />
                </div>
                {/* 2 */}
                <div className='flex justify-center'>
                    <h1 className='flex text-[25px]  md:text-left mb-[30px] md:text-[40px] md:font-semibold'>Create Account : Step 01</h1>
                </div>
                {/* 3 */}
                <div className='flex flex-row justify-center mb-12 '>
                    <div className='flex w-10 h-10 border-2 items-center justify-center bg-text-color2 border-text-color2 rounded-full'>
                        <div className='flex text-white bg-text-color2 font-semibold'> 01</div>
                    </div>
                    <div className=' border-0 w-10 border-t-2 mt-5 border-text-color2'></div>

                    <div className='flex w-10 h-10 border-2 items-center justify-center border-text-color2 rounded-full'>
                        <div className='flex text-text-color2 font-semibold'> 02</div>
                    </div>
                    <div className=' border-0 w-10 border-t-2 mt-5 border-text-color2'></div>

                    <div className='flex w-10 h-10 border-2 items-center justify-center border-text-color2 rounded-full'>
                        <div className='flex text-text-color2 font-semibold'> 03</div>
                    </div>
                    <div className=' border-0 w-10 border-t-2 mt-5 border-text-color2'></div>

                    <div className='flex w-10 h-10 border-2 items-center justify-center border-text-color2 rounded-full'>
                        <div className='flex text-text-color2 font-semibold'> 04</div>
                    </div>
                    <div className=' border-0 w-10 border-t-2 mt-5 border-text-color2'></div>

                    <div className='flex w-10 h-10 border-2 items-center justify-center border-text-color2 rounded-full'>
                        <div className='flex text-text-color2 font-semibold'> 05</div>
                    </div>


                </div>

                {/* 4 */}
                <div className='flex z-10 flex-col p-8 bg-white rounded-lg md:px-8 w-full'>

                    <div className='flex-grow'>
                        <div className='flex flex-row px-4 py-3  justify-center'>

                            <div className='text-text-color1 text-[20px] text-left font-semibold'>Mobile Registration</div>


                        </div>
                    </div>

                    <div className='flex-grow py-3'>
                        <div className='flex-grow px-6 space-y-4'>
                            <div className='text-text-color1 text-[12px] mr-2 text-center '>Please enter a valid Sri Lankan mobile number below and we'll send you a verification code </div>
                            <div className='flex flex-col md:px-10'>
                                <button className=' border border-slate-300 justify-center text-[16px] w-full rounded  py-3 text-slate-300'>07x xxxxxxx</button>
                                <button className=' bg-text-color1 justify-center text-[16px] w-full rounded  py-3 text-white'>Send</button>
                            </div>

                        </div>
                    </div>

                </div>
                {/* 5 */}

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

export default SignupStep1 
