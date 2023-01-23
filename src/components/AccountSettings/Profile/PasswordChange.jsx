import React from 'react'

import {XCircleIcon} from '@heroicons/react/20/solid'

function PasswordChange() {
    return (
        <div className='flex items-start justify-center   '>
            <div className='flex z-10 flex-col bg-white rounded-xl w-full'>

                <div className='border-t border-slate-300'></div>

                <div className='flex-grow py-3'>
                    <div className='flex-grow px-6 space-y-4'>
                        <div>
                            <div className='text-text-color1 text-[12px] mr-2 pb-2 text-left '>Old Password</div>
                            <input
                                type="password"
                                name="password old"
                                id="password-old"
                                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                placeholder="●●●●●●●●"
                            />

                        </div>
                        <div>
                            <div className='text-text-color1 text-[12px] mr-2 text-left pb-2  '>New Password</div>
                            <input
                                type="password"
                                name="password "
                                id="password"
                                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                placeholder="●●●●●●●●"
                            />

                        </div>
                        <div>
                            <div className='text-text-color1 text-[12px] mr-2 text-left pb-2  '>New Password
                                confirmation
                            </div>
                            <input
                                type="password"
                                name="password confirmation"
                                id="password-confirmation"
                                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                placeholder="●●●●●●●●"
                            />

                        </div>
                        <button
                            className=' bg-text-color1 justify-center text-[16px] w-full rounded  py-3 text-white'>Change
                            password
                        </button>


                    </div>
                </div>

                <div className='border-t border-slate-300'></div>

                <div className='flex-grow '>
                    <div className='flex flex-col px-4 py-3 space-y-3'>
                        <div className='flex flex-row justify-center '>
                            <div className='text-text-color1 text-[16px] mr-2 text-left '>Terms</div>
                            <div className='border-l border-slate-300'></div>
                            <div className='text-text-color1 text-[16px] ml-2 text-left '>Privacy</div>

                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default PasswordChange