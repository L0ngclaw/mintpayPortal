import React, {Fragment, useState} from 'react'
import {
    CheckCircleIcon,
    CheckIcon,
    ChevronUpDownIcon,
    CreditCardIcon,
    DocumentDuplicateIcon,
    PencilSquareIcon,
    PlusIcon,
    TagIcon,
    UserCircleIcon
} from '@heroicons/react/20/solid'
import {Listbox, Tab, Transition} from '@headlessui/react'
import wa from '../images/WA.png'
import vc from '../images/visacard.png'
import message from '../images/message.svg'
import messenger from '../images/messenger.svg'
import ModalWrapper from "./ModalWrapper";
import EmailChange from "./Profile/Emailchange";
import MobileChange from "./Profile/Mobilechange";
import PasswordChange from "./Profile/PasswordChange";


const Province = [
    {name: 'Central'},
    {name: 'Western'},
    {name: 'Southern'},
    {name: 'North'},
    {name: 'North Central'},
    {name: 'South Eastern'},
    {name: 'North Western'},
    {name: 'Eestern'},
    {name: 'Uva'},
    {name: 'Sabaragamuwa'},
]

function Account() {
    const [selected, setSelected] = useState(Province[0])
    return (
        <div className='flex items-start justify-center bg-slate-300 min-h-screen  '>
            <div className='flex-auto items-center  justify-center   '></div>
            <div className='flex flex-col bg-white w-full mx-6 mt-4 mb-6 md:mx-12 rounded-lg '>
                <Tab.Group>
                    <Tab.List className='flex flex-row w-auto  h-12 space-x-[1px]'>
                        <Tab
                            className='flex flex-row bg-text-color4 hover:bg-text-color1  hover:text-white rounded rounded-left-lg md:rounded-left-0 items-center  p-5 space-x-4'>
                            <span><UserCircleIcon className="h-6 w-6 text-text-color1  "/></span>
                            <div className='hidden md:block text-text-color1  text-[20px] font-semibold'>Profile</div>
                        </Tab>
                        <Tab className='flex flex-row items-center bg-text-color4 p-5 space-x-4'>
                            <span><CreditCardIcon className="h-6 w-6  text-text-color1 "/></span>
                            <div className='hidden md:block text-text-color1  text-[20px] font-semibold'>Billing</div>
                        </Tab>
                        <Tab className='flex flex-row items-center bg-text-color4 p-5 space-x-4'>
                            <span><TagIcon className="h-6 w-6  text-text-color1 "/></span>
                            <div className='hidden md:block text-text-color1  text-[20px] font-semibold'>Promotions
                            </div>
                        </Tab>

                    </Tab.List>
                    <div className="border-t border-slate-300"></div>
                    <Tab.Panels>
                        <Tab.Panel className='flex-grow md:my-6 md:mx-4   '>

                            <div
                                className="grid grid-cols-1 md:col-span-1 my-4  md:grid-cols-2 md:w-5/6 md:space-y-6 px-4">
                                {/* 1 */}
                                <div
                                    className='flex-grow  text-left  text-text-color1 text-[20px] font-semibold mb-4 '> Profile
                                </div>
                                <div></div>
                                {/* 2 */}
                                <div className='flex-grow  text-text-color1 text-4  '>ID verification</div>
                                <div className='flex-grow '>
                                    <div className='flex space-x-4 '>
                                        <div className='flex text-gray-500 text-4 '>Verified</div>
                                        <CheckCircleIcon className="h-6 w-6   text-green-500 "/>
                                    </div>
                                </div>
                                {/* 3 */}
                                <div className='flex text-text-color1 text-4 pt-4 md:pt-0 pr-14'>Contact email address
                                </div>
                                <div className='flex flex-row space-x-4 '>
                                    <div className='flex text-gray-500 text-4 '>pubuduweerasinghe0605@gmail.com</div>
                                    <span><ModalWrapper
                                        topic={'Change email address'}
                                    >
                                        <EmailChange/>
                                    </ModalWrapper>
                                    </span>
                                </div>
                                {/* 4 */}
                                <div className='flex text-text-color1 text-4 pt-4 md:pt-0'>First name</div>
                                <div className='flex text-gray-500 text-4 '>Pubudu</div>

                                {/* 42 */}
                                <div className='flex text-text-color1 text-4 pt-4 md:pt-0'>Middle name(s)</div>
                                <div className='flex text-gray-500 text-4 '>Nimesh</div>

                                {/* 5 */}
                                <div className='flex text-text-color1 text-4 pt-4 md:pt-0'>Last name</div>
                                <div className='flex flex-row space-x-4 '>
                                    <div className='flex text-gray-500 text-4 '>Weerasinghe</div>

                                </div>

                                {/* 6 */}
                                <div className='flex text-text-color1 text-4 pt-4 md:pt-0 pr-14'>Contact mobile number
                                </div>
                                <div className='flex flex-row space-x-4 '>
                                    <div className='flex text-gray-500 text-4 '>+94713970979</div>
                                    <span>
                                        <ModalWrapper topic={`Mobile Change`}>
                                        <MobileChange/>
                                    </ModalWrapper>
                                    </span>
                                </div>
                                {/* 7 */}
                                <div className='flex text-text-color1 text-4 pt-4 md:pt-0'>Address</div>

                                <input
                                    type="text"
                                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    placeholder="No 2-A,School Road,Ambagamuwa,Udabulathgama"
                                />

                                {/* 8 */}
                                <div className='pt-6  md:pt-0'></div>
                                <div className='flex space-x-2 flex-row'>
                                    <input
                                        type="text"
                                        className="block w-1/2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        placeholder="Nawalapitiya"
                                    />
                                    <div className="w-full">
                                        <Listbox value={selected} onChange={setSelected}>
                                            <div className="relative mt-1">
                                                <Listbox.Button
                                                    className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                                                    <span className="block truncate">{selected.name}</span>
                                                    <span
                                                        className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
              />
            </span>
                                                </Listbox.Button>
                                                <Transition
                                                    as={Fragment}
                                                    leave="transition ease-in duration-100"
                                                    leaveFrom="opacity-100"
                                                    leaveTo="opacity-0"
                                                >
                                                    <Listbox.Options
                                                        className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                        {Province.map((person, personIdx) => (
                                                            <Listbox.Option
                                                                key={personIdx}
                                                                className={({active}) =>
                                                                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                                                        active ? 'bg-blue-100 text-blue-900' : 'text-gray-900'
                                                                    }`
                                                                }
                                                                value={person}
                                                            >
                                                                {({selected}) => (
                                                                    <>
                                                                        <span
                                                                            className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>{person.name}
                                                                        </span>
                                                                        {selected ? (
                                                                            <span
                                                                                className="absolute inset-y-0 left-0 flex items-center pl-3 text-blue-600">
                                                                                <CheckIcon className="h-5 w-5"
                                                                                           aria-hidden="true"/>
                                                                            </span>
                                                                        ) : null}
                                                                    </>
                                                                )}
                                                            </Listbox.Option>
                                                        ))}
                                                    </Listbox.Options>
                                                </Transition>
                                            </div>
                                        </Listbox>
                                    </div>
                                </div>

                                {/* 9 */}
                                <div className='pt-4 md:pt-0 '></div>
                                <div>
                                    <button
                                        className='bg-text-color1 px-[25px]  text-[16px] md:allign-left rounded-lg py-2 text-white'>Update
                                    </button>
                                </div>
                                {/* 10 */}
                                <div>
                                    <div className='flex flex-col text-text-color1 text-4 pt-4 md:pt-0 '>Password</div>
                                </div>
                                <div className='flex flex-row '>
                                    <div className='flex text-gray-500 items-start text-2xl pb-2'> ●●●●●●●●</div>
                                    <span className={`relative top-1.5 left-2`}>
                                        <ModalWrapper topic={'Password Change'}>
                                            <PasswordChange/>
                                        </ModalWrapper>
                                    </span>
                                </div>

                            </div>
                        </Tab.Panel>
                        <Tab.Panel className='md:my-6 md:mx-4 md:pb-80 lg:pb-80'>
                            < div className='grid grid-cols-1 md:col-span-1  md:grid-cols-2   md:space-y-6 px-4'>

                                <div
                                    className='flex-grow  text-left   text-text-color1 text-[20px] font-semibold mb-4 md:mb-0'> Billing
                                </div>
                                <div
                                    className='flex flex-row bg-text-color1   text-[16px] text-center px-16 justify-between rounded-lg py-2 text-white'>Add
                                    payement method
                                    <span><PlusIcon className="h-6 w-6 items-end text-white ml-2 "/></span>
                                </div>
                                {/* <div className="grid grid-cols-1 w-64 h-36 bg-text-color1 rounded-lg shadow-lg mx-4 ">
                                    <div className='flex items-start'>
                                        <span><XMarkIcon className="h-6 w-6 items-end mt-2 ml-2 text-white  " /></span>
                                    </div>
                                    <div></div>
                                    <div></div>
                                </div> */}
                                <div>
                                    <img src={vc} alt=""/>
                                </div>


                            </div>
                        </Tab.Panel>
                        <Tab.Panel className='py-8   md:mx-4 lg:pb-64 md:pb-56 '>
                            <div className=" px-4 space-y-10">
                                {/* 1 */}
                                <div
                                    className='flex-grow  text-left  text-text-color1 text-[20px] font-semibold mb-4 '> Promotions
                                </div>
                                <div>
                                    <div className='flex text-black mt-6 text-4 tracking-tighter '>Copy the below link
                                        and share it with a friend. When your friend signs up, you and your friend will
                                        get 20% off upto Rs. 1,000.00 on your next Mintpay purchase.
                                    </div>
                                </div>
                                <div>

                                    <div className="mt-1 relative  flex items-center">
                                        <input
                                            type="text"
                                            name="search"
                                            id="search"
                                            placeholder='https://app.mintpay.lk/referrals/2Tk75ZxjuTknBpMkdOMvIFoFkkpIwpzqY2ueNMIk/'
                                            className="shadow-sm focus:ring-indigo-500 border py-3 border-blue-200 block w-full pr-12 sm:text-sm  rounded-md"
                                        />
                                        <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
                                            <kbd
                                                className="inline-flex items-center  rounded px-2 text-sm font-sans font-medium text-gray-400">
                                                <span><DocumentDuplicateIcon className="h-6 w-6 items-end  "/></span>
                                            </kbd>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex  flex-col items-center'>
                                    <div
                                        className='flex items-center text-center text-text-color1 text-[20px] font-semibold mb-4 '> Share
                                        on
                                    </div>
                                    <div className='flex flex-row items-center justify-center space-x-4'>
                                        <div
                                            className='flex flex-col items-center bg-text-color4  border border-slate-500 py-4 rounded-lg justify-center mx-2 '>
                                            <img src={wa} className='w-12 h-12 rounded-full' alt=""/>
                                            <div
                                                className=' text-text-color1 text-center mx-4 font-semibold '>WhatsApp
                                            </div>

                                        </div>
                                        <div
                                            className='flex flex-col items-center bg-text-color4  border border-slate-500 py-4 rounded-lg justify-center mx-2 '>
                                            <img src={message} className='w-12 h-12 rounded-full' alt=""/>
                                            <div className=' text-text-color1 text-center mx-6 font-semibold '>Message
                                            </div>

                                        </div>
                                        <div
                                            className='flex flex-col items-center bg-text-color4  border border-slate-500 py-4 rounded-lg justify-center mx-2 '>
                                            <img src={messenger} className='w-12 h-12 rounded-full' alt=""/>
                                            <div
                                                className=' text-text-color1 text-center  mx-4 font-semibold '>Messenger
                                            </div>

                                        </div>
                                    </div>

                                </div>

                            </div>
                        </Tab.Panel>
                    </Tab.Panels>
                </Tab.Group>
            </div>
        </div>

    )
}

export default Account
