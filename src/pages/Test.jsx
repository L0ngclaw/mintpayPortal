
import React from 'react'
import wa from '../components/images/WA.png'
import ci from '../components/images/contact-img.svg'
import ei from '../components/images/mobile-phone.svg'
import sb from '../components/images/speech-bubble.svg'
import qi from '../components/images/question.svg'
function contactComponent() {
    return (
        <div className='flex items-center  bg-slate-400 w-screen mt-20'>
            <div className='flex py-12   '>
                <div className='flex justify-center bg-white rounded-xl   mx-6'>
                    <div className='grid grid-cols-1 md:grid-cols-2'>
                        <div className='flex md:order-2 '>
                            <img src={ci} className='bg-text-color1 px-4 py-12 rounded-t-xl md:rounded-t-none md:rounded-r-lg  ' alt="" />
                        </div>
                        <div className='px-4 md:py-20 lg:py-32 xl:my-64  '>
                            <div className='flex flex-col space-y-8  lg:px-20 xl:px-36  md:order-1 p-8 '>
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
                                        <img src={wa} className='w-10 h-10 rounded-full' alt="" />


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