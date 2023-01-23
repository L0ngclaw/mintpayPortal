import React from 'react'

import { XCircleIcon } from '@heroicons/react/20/solid'

function MobileChange() {
    return (
        <div className='flex items-start justify-center    '>
            <div className='flex z-10 flex-col bg-white rounded-xl w-full'>


                <div className='border-t border-slate-300'></div>

                <div className='flex-grow py-3'>
                    <div className='flex-grow px-6 space-y-4'>
                        <div className='text-text-color1 text-[12px] mr-2 text-left '>mobile number </div>
                        <input
                            type="tel"
                            name="mobile"
                            id="mobile"
                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            placeholder="07XXXXXXXX"
                        />
                        <button className=' bg-text-color1 justify-center text-[16px] w-full rounded  py-3 text-white'>Change phone</button>

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

export default MobileChange