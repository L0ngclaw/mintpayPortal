import React from 'react'

import { XCircleIcon } from '@heroicons/react/20/solid'

function EmailChange() {
    return (
        <div className='flex items-start justify-center bg-slate-300 min-h-screen  '>
            <div className='flex z-10 flex-col bg-white rounded-xl w-full'>

                <div className='flex-grow'>
                    <div className='flex flex-row px-4 py-4  justify-between'>

                        <div className='text-text-color1 text-[25px] text-left font-semibold'>Email Change</div>
                        <div className='flex '><span>< XCircleIcon className="h-6 w-6 text-text-color1  " /></span></div>

                    </div>
                </div>

                <div className='border-t border-slate-300'></div>

                <div className='flex-grow'>
                    <div className='flex flex-row justify-center px-8 py-8 space-x-2 '>
                        <div className='flex border border-slate-300 rounded w-12 h-14'></div>
                        <div className='flex border border-slate-300 rounded w-12 h-14'></div>
                        <div className='flex border border-slate-300 rounded w-12 h-14'></div>
                        <div className='flex border border-slate-300 rounded w-12 h-14'></div>
                        <div className='flex border border-slate-300 rounded w-12 h-14'></div>
                        <div className='flex border border-slate-300 rounded w-12 h-14'></div>

                    </div>
                </div>

                <div className='border-t border-slate-300'></div>

                <div className='flex-grow '>
                    <div className='flex flex-col px-4 py-6 space-y-3'>
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

export default EmailChange