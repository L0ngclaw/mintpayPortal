import React from 'react'
import { QuestionMarkCircleIcon } from '@heroicons/react/20/solid'
import visa from '../components/images/visa.svg'
import master from '../components/images/mastercard.svg'
import seylan from '../components/images/seylan-logo.png'
import masterc from '../src/components/images/master-card-secure-logo.png'

function AddCard() {
    return (
        <div className='flex items-center justify-center bg-gray-400 w-screen h-screen'>
            <div className='flex-col bg-white rounded-lg border border-slate-700 m-4'>
                <div className='flex flex-col px-4 py-6 space-y-3'>
                    <div className='flex flex-row  '>
                        <div className='text-text-color1 text-[16px] mr-2 text-left'>Card Number</div>
                        <div className='flex items-center mr-2'> <img src={visa} className='flex w-8 h-3  ' alt="" /></div>
                        <div className='flex items-center'> <img src={master} className='flex w-8 h-5  ' alt="" /></div>

                    </div>
                    <div className='felx rounded bg bg-slate-200 py-2 w-5/6 text-text-color4 text-bass px-4'>xxxx-xxxx-xxxx-xxxx</div>
                </div>
                <div className='flex flex-col px-4 py-4 space-y-3'>
                    <div className='flex flex-row  '>
                        <div className='text-text-color1 text-[16px] mr-2 text-left'>Card holders name</div>

                    </div>
                    <div className='felx rounded bg bg-slate-200 py-2 w-5/6 text-text-color4 text-bass px-4'>John Smith</div>
                </div>

                <div className='flex flex-col px-4 py-4 space-y-3'>
                    <div className='flex flex-row  '>
                        <div className='text-text-color1 text-[16px] mr-2 text-left'>Expiry date </div>

                    </div >
                    <div className='flex flex-row'>
                        <div className='felx rounded bg bg-slate-200 py-2 w-2/5 text-text-color4 text-bass px-4'>John Smith</div>
                        <div className='felx rounded bg py-2 w-1/5 text-text-color4 text-center text-lg px-4'>/</div>
                        <div className='felx rounded bg bg-slate-200 py-2 w-2/5 text-text-color4 text-bass px-4'>John Smith</div>
                    </div>
                </div>

                <div className='flex flex-col px-4 py-4 space-y-3'>
                    <div className='flex flex-row  '>
                        <div className='text-text-color1 text-[16px] mr-2 text-left'>CVV</div>
                        <span>< QuestionMarkCircleIcon className="h-6 w-6 text-text-color1  " /></span>

                    </div>
                    <div className='felx rounded bg bg-slate-200 py-2 w-5/6 text-text-color4 text-bass px-4'>John Smith</div>
                </div>
                <div className='flex px-4 '>

                </div>
                <div className='flex flex-col px-4 py-4 space-y-3'>
                    <div className='flex flex-row justify-center '>
                        <div className='flex text-text-color1 text-[16px] '>Powered by </div>

                    </div >
                </div>
                <div className='flex flex-col px-4 py-4 space-y-3'>
                    <div className='flex flex-row justify-center '>

                        <div className='flex items-center mr-2'> <img src={seylan} className='flex w-18 h-8 pl-2  ' alt="" /></div>
                        <div className='flex items-center'> <img src={masterc} className='flex w-20 h-8  ' alt="" /></div>

                    </div >
                </div>

            </div>

        </div>
    )
}

export default AddCard