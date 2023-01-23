import React from 'react'
import ci from '../images/contact-img.svg'
import ei from '../images/mobile-phone.svg'
import sb from '../images/speech-bubble.svg'
import qi from '../images/question.svg'

function contactComponent() {
    return (
        <div className={`bg-slate-200 h-screen overflow-y-hidden`}>
            <div className="flex flex-col-reverse md:grid md:grid-cols-12  m-auto pt-10 p-20 ">
                <div className=" md:col-span-5 md:mt-0 md:py-20 my-auto bg-white h-full rounded-b-xl md:rounded-b-none md:rounded-l-2xl md:rounded-bl-2xl shadow-xl">
                    <h3 className="text-lg font-medium text-gray-900 p-2 pt-5">
                        Any question or remarks?
                        <br/>
                        Just contact us now...
                    </h3>
                    <div className={`grid grid-cols-4 grid-rows-3 pt-4 pb-20 md:pb-0`}>
                        <div className={`grid place-items-center`}>
                            <img src={ei} className='w-10 h-10 ' alt=""/>
                        </div>
                        <div className='flex flex-col w-full pl-6  col-span-3'>
                            <div className='text-text-color4 text-[20px] text-left mb-1  '>Email us</div>
                            <div className='text-text-color1 text-[15px]  text-left '>support@mintpay.lk</div>
                        </div>

                        <div className={`grid place-items-center`}>
                            <img src={sb} className='w-10 h-10  ' alt=""/>
                        </div>
                        <div className='flex flex-col w-full pl-6  col-span-3'>
                            <div className='text-text-color4 text-[20px] text-left mb-1  '>Chat with us</div>
                            <div className='text-text-color1 text-[15px]  text-left '> +94767743184</div>
                        </div>
                        <div className={`grid place-items-center`}>
                            <img src={qi} className='w-10 h-10 ' alt=""/>
                        </div>
                        <div className='flex flex-col w-full pl-6  col-span-3'>

                            <div className='text-text-color1 text-[20px] relative top-2 text-left '>Frequently asked questions
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:col-span-7 bg-blue-900 md:py-48 rounded-t-xl md:rounded-t-none md:rounded-r-2xl">
                    <div
                        className="aspect-w-2 aspect-h-1 overflow-hidden rounded-lg  sm:aspect-w-5 sm:aspect-h-2">
                        <img src={ci} alt={'a'} className="object-cover object-center"/>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default contactComponent