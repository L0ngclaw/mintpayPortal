import React from 'react'
import ci from '../images/contact-img.svg'
import ei from '../images/mobile-phone.svg'
import sb from '../images/speech-bubble.svg'
import qi from '../images/question.svg'
function contactComponent() {
    return (
        <div className='flex bg-white min-h-screen'>
            <div className='grid grid-cols-1 md:grid-cols-2 h-full mt-3'>
                {/* 1st element */}
                <div className='hidden h-56 w-full md:block '></div>
                <div className='hidden h-56 w-full  bg-text-color1 md:block rounded-t-lg rounded-l-none'></div>

                {/* 2nd row */}
                <div className='flex md:order-2 '>
                    <img src={ci} className='bg-text-color1 px-4 py-12 rounded-t-xl md:rounded-t-none   ' alt="" />
                </div>



                <div className='flex '>
                    <div className='px-4   '>
                        <div className='flex flex-col space-y-8    md:order-0  '>
                            <div className='text-text-color1 text-left text-lg w-4/5  font-semibold'>Any question or remarks? Just contact us now...</div>


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



                {/* 3rd row */}
                <div className='hidden h-56 w-full  md:block md:order-3 '></div>
                <div className='hidden h-56 w-full md:block  bg-text-color1 rounded-b-lg rounded-l-none md:order-4'></div>




            </div>
        </div>



    )
}

export default contactComponent