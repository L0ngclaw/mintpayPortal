import React from 'react'
import lA from '../images/login-artwork (2).svg'
import fb from '../images/fb.jfif'
import insta from '../images/in.jpg'
import int from '../images/insta.png'
import ll from '../images/loginlogo.png'

function loginForm() {
    return (
        <div className='flex items-center  bg-slate-400 lg:max-h-screen '>
            <div className='flex   '>
                <div className='flex w-full justify-center bg-white    '>
                    <div className='grid grid-cols-1 lg:grid-cols-2 lg:min-h-screen  '>
                        {/* e1 */}
                        <div className='flex-grow md:order bg-text-color1 px-4 pt-20 lg:pt-0'>
                            <div className='flex mx-12 lg:mx-0'>
                                <img src={lA} className='flex-grow  lg:ml-24 lg:mt-24 xl:ml-36  ' alt="" />
                            </div>
                        </div>
                        {/* e2 */}
                        <div className='flex py-12 px-[15px] lg:items-center lg:pt-48 lg:px-16 xl:px-36 xl:py-64'>
                            <div className='flex-grow px-4 justify-center'>

                                <div className='flex grow justify-center'>
                                    <img src={ll} className='flex h-12 w-36' alt="" />
                                </div>

                                <div className='flex-grow text-text-color1 text-center text-[40px] font-semibold mb-6'>Welcome Back</div>

                                <div className='flex-grow  '>
                                    <div className='flex justify-between mb-4'>
                                        <div className='border-t mt-3  border-slate-300 w-1/4 pr-4'></div>
                                        <div className='flex-grow text-center font-semibold tracking-widest'>LOGIN WITH EMAIL</div>
                                        <div className='border-t mt-3 border-slate-300 w-1/4 pl-4 '></div>
                                    </div>
                                </div>
                                <div className='flex-grow text-red-600 text-sm text-center mb-4'>please login to see the page</div>
                                <div className='flex-grow'>
                                    <div>
                                        <div className='text-text-color1 text-[16px] mr-2 text-left pb-2  '>Email Address </div>
                                        <button className=' border border-slate-300 justify-center text-[16px] w-full rounded  py-3 pl-4 text-left text-text-color2'>pubuduweerasinghe0605@gmail.com</button>

                                    </div>
                                    <div>
                                        <div className='text-text-color1 text-[16px] mr-2 text-left pb-2 mt-2 '>Password </div>
                                        <button className=' border border-slate-300 justify-center text-[16px] w-full rounded  py-3 pl-4 text-left text-text-color2'>..........</button>

                                    </div>
                                    <div className='text-text-color1 text-[16px] mr-2 text-right pb-2 mt-2 '>Forgot password? </div>
                                    <button className=' bg-text-color1 justify-center text-[16px] w-full rounded  py-5 mt-6 text-white'>Log in</button>

                                </div>

                                <div className='flex-grow'>
                                    <div className='border-t   border-slate-300 mb-8 mt-8 pr-4'></div>
                                </div>
                                <div className='flex-grow px-2 '>
                                    <div className='flex flex-row justify-center'>
                                        <div className='flex text-center text-text-color4 font-semibold tracking-wider'>Dont have an accont yet?</div>
                                        <div className='flex text-center font-semibold text-text-color2 tracking-wider'>Sign up</div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* e3 */}
                        <div className='grid grid-cols-1 md:grid-cols-3 lg:bg-text-color1 px-4 lg:items-end' >
                            <div className='flex justify-center'>
                                <div className='flex grow px-28 md:px-14 md:pt-3 '>
                                    <div className='flex grow flex-row justify-between '>

                                        <img src={fb} className='h-5 w-5 m text-text-color1 lg:text-white' alt="" />
                                        <img src={insta} className='h-6 w-6 justify-end text-text-color1 lg:text-white' alt="" />
                                        <img src={int} className='h-6 w-6 justify-end text-text-color1 lg:text-white' alt="" />

                                    </div>
                                </div>
                            </div>
                            <div className='flex-grow lg:flex-0 '>
                                <div className='flex flex-col px-4 py-3 space-y-3  lg:py-0 '>
                                    <div className='flex flex-row justify-center '>
                                        <div className='text-text-color1 text-[16px] mr-2 text-left lg:text-white '>Terms </div>
                                        <div className='border-l border-slate-300'></div>
                                        <div className='text-text-color1 text-[16px] ml-2 text-left lg:text-white '>Privacy </div>

                                    </div>

                                </div>
                            </div>
                            <div className='flex-grow  hidden md:block  '>
                                <div className='flex py-2 text-text-color1 justify-end pr-4 text-[16px] lg:text-white text-right'>Mintpay 2022</div>
                            </div>

                        </div>


                    </div>

                </div>
            </div>

        </div>
    )
}

export default loginForm
