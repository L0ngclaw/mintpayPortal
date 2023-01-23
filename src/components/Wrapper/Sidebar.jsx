/* This example requires Tailwind CSS v2.0+ */
import React, { Fragment, useEffect, useState } from 'react'
import { Dialog, Transition, Menu } from '@headlessui/react'
import {
    CalendarIcon,
    ChartBarIcon,
    FolderIcon,
    HomeIcon,
    Bars3CenterLeftIcon,
    // MenuIcon,
    UsersIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../images/logo.svg";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const navigationData = [
    { name: 'Home', href: '/', icon: HomeIcon, current: false },
    { name: 'Pending payments', href: '/pendingpayements', icon: UsersIcon, current: false },
    { name: 'Account Settings', href: '/accountsettings', icon: FolderIcon, current: false },
    { name: 'In-Store', href: '#', icon: CalendarIcon, current: false },
    { name: 'Contact', href: '/contact', icon: ChartBarIcon, current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


export function icon(item, goToPage, withText) {
    return <div
        onClick={() => goToPage(item.href)}
        key={item.name}
        // href={item.href}
        className={` 
        ${withText ? 'group flex  px-2 py-2 text-sm font-medium rounded-md' : 'relative left-2'}
        flex justify-items-start w-full items-center
        `}
    >
        <div className={`
        ${item.current ? 'bg-light-icon' : 'bg-dark-icon-bg '}
        bg-white mr-4 rounded-full p-1.5`}>
            <item.icon
                className={
                    `${item.current ? 'text-dark-icon' : 'text-light-icon'} flex-shrink-0 h-8 w-8 m-1 `}
                aria-hidden="true"
            />
        </div>
        <div className={`${withText &&
            `${item.current ? 'text-light-icon' : 'text-gray-400'}  text-xl
        `
            }`}>
            {withText && item.name}
        </div>
    </div>
}

function Sidebar({ children }) {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const [iconClicked, setIconClicked] = useState(false)
    const [navigation, setNavigation] = useState(navigationData)

    const navigate = useNavigate();
    const location = useLocation()

    const goToPage = (pageLink) => {
        navigate(pageLink)
    }

    const [pageName, setPageName] = useState('Home')

    useEffect(() => {
        const path = location.pathname
        const newNavigation = navigation.map((item) => {
            if (item.href === path) {
                setPageName(item.name)
                return { ...item, current: true }
            } else {
                return { ...item, current: false }
            }
        })
        setNavigation(newNavigation)
    }, [location])

    const [showSlider, setShowSlider] = useState(true)
    useEffect(() => {
        const path = location.pathname
        if (path === '/login') {
            setShowSlider(false)
        }
    }, [location])

    return (
        <>
            {showSlider ? <>
                <div className='h-full overflow-hidden'>
                    <div className='h-full'>
                        <Transition.Root show={sidebarOpen} as={Fragment}>
                            <Dialog as="div" className="fixed inset-0 flex z-40 md:hidden" onClose={setSidebarOpen}>
                                <Transition.Child
                                    as={Fragment}
                                    enter="transition-opacity ease-linear duration-300"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="transition-opacity ease-linear duration-300"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <Dialog.Overlay className="fixed inset-0 bg-dark-icon bg-opacity-75" />
                                </Transition.Child>
                                <Transition.Child
                                    as={Fragment}
                                    enter="transition ease-in-out duration-300 transform"
                                    enterFrom="-translate-x-full"
                                    enterTo="translate-x-0"
                                    leave="transition ease-in-out duration-300 transform"
                                    leaveFrom="translate-x-0"
                                    leaveTo="-translate-x-full"
                                >
                                    <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white">
                                        <Transition.Child
                                            as={Fragment}
                                            enter="ease-in-out duration-300"
                                            enterFrom="opacity-0"
                                            enterTo="opacity-100"
                                            leave="ease-in-out duration-300"
                                            leaveFrom="opacity-100"
                                            leaveTo="opacity-0"
                                        >
                                            <div className="absolute top-0 right-0 -mr-12 pt-2">
                                            </div>
                                        </Transition.Child>
                                        <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto bg-text-color2">
                                            <div
                                                className="flex-shrink-0 grid place-items-center ">
                                                <img
                                                    className="h-12"
                                                    src="https://mintpay.lk/Mintpay-Secondary-Logo-RGB.png"
                                                    alt="Workflow"
                                                />
                                            </div>
                                            <nav className="mt-5 px-2 space-y-1">
                                                {navigation.map((item) => (
                                                    icon(item, goToPage, true)
                                                ))}
                                            </nav>
                                        </div>

                                    </div>
                                </Transition.Child>
                                <div className="flex-shrink-0 w-14">{/* Force sidebar to shrink to fit close icon */}</div>
                            </Dialog>
                        </Transition.Root>

                        {/* Static sidebar for desktop */}
                        <div className="hidden md:flex  md:flex-col md:fixed md:inset-y-0">
                            {/* Sidebar component, swap this element with another sidebar if you like */}
                            <div className="flex-1 flex flex-col min-h-0   bg-text-color2">
                                <div className="flex-1 flex flex-col pt-5 pb-4 overflow-hidden">
                                    <div
                                        onClick={() => {
                                            setIconClicked(!iconClicked)
                                        }}
                                        className="flex items-center flex-shrink-0 relative left-2">
                                        <img
                                            className="h-8 w-auto relative top-6    "
                                            src="https://static.mintpay.lk/static/customer/img/feather-logo.svg"
                                            alt="Workflow"
                                        />
                                    </div>
                                    <nav className="mt-20  px-2 bg-text-color2 space-y-10 grid grid-cols-1 place-items-center">
                                        {navigation.map((item) => (
                                            icon(item, goToPage)
                                        ))}
                                    </nav>
                                </div>

                            </div>
                        </div>

                        {/* Desktop Panel */}
                        <Transition.Root show={iconClicked} as={Fragment}>
                            <Dialog as="div" className="fixed inset-0 flex z-40 " onClose={setIconClicked}>
                                <Transition.Child
                                    as={Fragment}
                                    enter="transition-opacity ease-linear duration-300"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="transition-opacity ease-linear duration-300"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <Dialog.Overlay className="fixed inset-0 " />
                                </Transition.Child>
                                <Transition.Child
                                    as={Fragment}
                                    enter="transition ease-in-out duration-300 transform"
                                    enterFrom="-translate-x-full opacity-0"
                                    enterTo="translate-x-0"
                                    leave="transition ease-in-out duration-300 transform"
                                    leaveFrom="translate-x-0 opacity-100"
                                    leaveTo="-translate-x-full"
                                >
                                    <div className="relative flex-1 flex flex-col max-w-xs w-full bg-text-color2">
                                        <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                                            <div
                                                onClick={() => {
                                                    setIconClicked(!iconClicked)
                                                }}
                                                className="flex-shrink-0 grid place-items-center w-full  ">
                                                <img
                                                    className="w-auto"
                                                    src="https://mintpay.lk/Mintpay-Secondary-Logo-RGB.png"
                                                    alt="Workflow"
                                                />
                                            </div>
                                            <nav
                                                className="mt-8 px-2 bg-text-color2 space-y-5 grid grid-cols-1 place-items-center">
                                                {navigation.map((item) => (
                                                    icon(item, goToPage, true)
                                                ))}
                                            </nav>
                                        </div>

                                    </div>
                                </Transition.Child>
                                <div className="flex-shrink-0 w-14">{/* Force sidebar to shrink to fit close icon */}</div>
                            </Dialog>
                        </Transition.Root>

                        <div className="md:pl-20 flex flex-col flex-1 ">
                            <div className="flex flex-row items-center justify-center w-full bg-slate-200 px-10  py-5">
                                <div className={`md:hidden`}>
                                    <button
                                        type="button"
                                        className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none"
                                        onClick={() => setSidebarOpen(true)}
                                    >
                                        <span className="sr-only">Open sidebar</span>
                                        <img
                                            className="h-6 w-auto"
                                            src="https://static.mintpay.lk/static/customer/img/feather-logo.svg"
                                            alt="Workflow"
                                        />
                                    </button>
                                </div>
                                <div className='flex-grow ml-3'>
                                    <div className='flex flex-between w-full '>
                                        <div className='text-text-color1 text-[20px] md:text-[40px] font-semibold  '>
                                            {pageName}
                                        </div>
                                    </div>
                                </div>
                                <div className={`mr-3 hidden md:block text-[10px] md:text-[20px]`}>
                                    Hi Pubudu
                                </div>
                                <Menu as="div" className="relative inline-block text-left">
                                    <Menu.Button className="flex rounded-full  text-sm focus:outline-none ">
                                        <span className="sr-only">Open user menu</span>
                                        {/*<img className="h-8 w-8 rounded-full" src={user.imageUrl} alt="" />*/}
                                        <div className={`border-2 border-blue-900 rounded-full`}>
                                            <img
                                                className="inline-block h-6 md:h-12 w-6 md:w-12 rounded-full"
                                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                alt=""
                                            />
                                        </div>
                                        <div className={`ml-3  relative md:top-2`}>
                                            <span><ChevronDownIcon className="h-5 w-5 mt-1 text-text-color1 " /></span>
                                        </div>
                                    </Menu.Button>

                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >

                                        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            <div className="py-1">
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <div
                                                            // href=""
                                                            className={classNames(
                                                                active ? 'bg-gray-100' : '',
                                                                'block px-4 py-2 text-sm text-gray-700'
                                                            )}
                                                        >
                                                            Sign Out
                                                        </div>
                                                    )}
                                                </Menu.Item>
                                            </div>
                                        </Menu.Items>
                                    </Transition>
                                </Menu>

                            </div>
                            <main className="flex-1 overflow-x-hidden">
                                {children}
                            </main>
                        </div>
                    </div>
                </div>
            </> : <>
                {children}
            </>}
        </>

    )
}

export default Sidebar