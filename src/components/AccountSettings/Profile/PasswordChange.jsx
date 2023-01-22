import React from 'react'

import { XCircleIcon } from '@heroicons/react/20/solid'

function PasswordChange() {
    return (
        <div className='flex items-start justify-center bg-slate-300 min-h-screen  '>
            <div className='flex z-10 flex-col bg-white rounded-xl w-full'>

                <div className='flex-grow'>
                    <div className='flex flex-row px-4 py-3  justify-between'>

                        <div className='text-text-color1 text-[20px] text-left font-semibold'>Password Change</div>
                        <div className='flex '><span>< XCircleIcon className="h-6 w-6 text-text-color1  " /></span></div>

                    </div>
                </div>

                <div className='border-t border-slate-300'></div>

                <div className='flex-grow py-3'>
                    <div className='flex-grow px-6 space-y-4'>
                        <div>
                            <div className='text-text-color1 text-[12px] mr-2 pb-2 text-left '>mobile number </div>
                            <button className=' border border-slate-300 justify-center text-[16px] w-full rounded  py-3 text-slate-300'>07x xxxxxxx</button>

                        </div>
                        <div>
                            <div className='text-text-color1 text-[12px] mr-2 text-left pb-2  '>mobile number </div>
                            <button className=' border border-slate-300 justify-center text-[16px] w-full rounded  py-3 text-slate-300'>07x xxxxxxx</button>

                        </div>
                        <div>
                            <div className='text-text-color1 text-[12px] mr-2 text-left pb-2  '>mobile number </div>
                            <button className=' border border-slate-300 justify-center text-[16px] w-full rounded  py-3 text-slate-300'>07x xxxxxxx</button>

                        </div>
                        <button className=' bg-text-color1 justify-center text-[16px] w-full rounded  py-3 text-white'>Change password</button>


                    </div>
                </div>

                <div className='border-t border-slate-300'></div>

                <div className='flex-grow '>
                    <div className='flex flex-col px-4 py-3 space-y-3'>
                        <div className='flex flex-row justify-center '>
                            <div className='text-text-color1 text-[16px] mr-2 text-left '>Terms </div>
                            <div className='border-l border-slate-300'></div>
                            <div className='text-text-color1 text-[16px] ml-2 text-left '>Privacy </div>

                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default PasswordChange