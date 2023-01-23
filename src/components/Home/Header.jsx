import React from 'react'
import logo from '../images/logo.svg'
import { ChevronDownIcon } from '@heroicons/react/24/solid'
function Header() {
    return (

        <div>
            <div className="flex bg-slate-200 px-6 py-4 md:px-10">
                <div className="flex flex-row items-center justify-between w-full">
                    <div className='flex w-1/6 '>
                        <img src={logo} className="w-10 md:hidden h-6" alt="" />
                        <div className='flex text-text-color1 w-5/6 text-[20px] font-semibold '>Home</div>
                        <div></div>
                    </div>

                    <div className='flex flex-row'>
                        <div className=' text-text-color1 w-5/6 hidden md:block text-[12px] items-center pt-3 justify-center font-semibold '>Hi Pubudu</div>

                        <div>
                            <img
                                className="inline-block h-10 w-14 rounded-full"
                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt=""
                            />
                        </div>
                        <span><ChevronDownIcon className="h-5 w-5 mt-1 text-text-color1 " /></span>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Header