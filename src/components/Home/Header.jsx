import React from 'react'
import logo from '../images/logo.svg'
import { ChevronDownIcon } from '@heroicons/react/24/solid'
function Header() {
    return (

        <div>
            <div className="flex bg-slate-200 px-6 py-4 md:px-10">
                <div className="flex flex-row items-center justify-center w-full">
                    <div className='flex w-1/6 md:hidden'>
                        <img src={logo} className="w-10 h-6" alt="" />

                    </div>
                    <div className='flex-grow'>
                        <div className='flex flex-between w-full '>
                            <div className='text-text-color1 text-[20px] md:text-[30px] font-semibold  '>Home</div>
                            <div className='text-text-color1 hiddden md:text-[16px]  items-center justify-center '>Home</div>
                        </div>

                    </div>
                    <div>
                        <img
                            className="inline-block h-10 w-12 rounded-full"
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                        />
                    </div>
                    <div>
                        <span><ChevronDownIcon className="h-5 w-5 mt-1 text-text-color1 " /></span>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Header