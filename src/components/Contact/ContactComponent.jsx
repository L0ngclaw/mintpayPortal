
import React from 'react'
import ci from '../images/contact-img.svg'
import ei from '../images/mobile-phone.svg'
import sb from '../images/speech-bubble.svg'
import qi from '../images/question.svg'
function contactComponent() {
    return (
        <div className='flex   bg-slate-400  w-screen md:max-h-screen'>
            <div className='flex py-6 md:py-0 md:pb-10 md:px-12 '>
                <div className='flex justify-center bg-white rounded-xl   mx-6'>
                    <div className='grid grid-cols-1 md:grid-cols-2'>
                        <div className='flex md:order-2 '>
                            <img src={ci} className='bg-text-color1 px-4 py-12 md:py-0  rounded-t-xl md:rounded-t-none md:rounded-r-lg  ' alt="" />
                        </div>
                        <div className='px-4 md:py-0 lg:py-32 xl:my-64  '>
                            <div className='flex flex-col space-y-8  lg:px-20 xl:px-36  p-8 md:p-0'>
                                <div className='text-text-color1 text-left text-lg w-4/5  font-semibold'>Any question or remarks?
                                    Just contact us now...</div>
                                <div className='flex flex-row'>
                                    <div className='flex flex-col items-center w-1/4 rounded-lg justify-center  '>
                                        <img src={ei} className='w-10 h-10 ' alt="" />


                                    </div>
                                    <div className='flex flex-col w-full pl-6  '>
                                        <div className='text-text-color4 text-[20px] text-left mb-1  ' >Email us</div>
                                        <div className='text-text-color1 text-[20px]  text-left ' >support@mintpay.lk</div>
                                    </div>
                                </div>
                                <div className='flex flex-row '>
                                    <div className='flex flex-col items-center w-1/4 rounded-lg justify-center   '>
                                        <img src={sb} className='w-10 h-10  ' alt="" />


                                    </div>
                                    <div className='flex flex-col w-full pl-6  '>
                                        <div className='text-text-color4 text-[20px] text-left mb-1  ' >Chat with us</div>
                                        <div className='text-text-color1 text-[20px]  text-left ' > +94767743184</div>
                                    </div>
                                </div>
                                <div className='flex flex-row'>
                                    <div className='flex flex-col items-center w-1/4 rounded-lg justify-center  '>
                                        <img src={qi} className='w-10 h-10 ' alt="" />


                                    </div>
                                    <div className='flex flex-col w-full pl-6  '>

                                        <div className='text-text-color1 text-[20px]  text-left ' >Frequently asked questions</div>
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

export default contactComponent