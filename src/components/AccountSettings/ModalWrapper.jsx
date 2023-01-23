import {Dialog, Transition} from '@headlessui/react'
import {Fragment, useState} from 'react'
import {PencilSquareIcon, XCircleIcon} from '@heroicons/react/20/solid'

export default function ModalWrapper({topic, children}) {
    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    return (
        <>
            <div className=" inset-0 flex items-center justify-center">
                <button
                    type="button"
                    onClick={openModal}
                    className="rounded-md  text-sm font-medium text-text-color1 "
                >
                    <PencilSquareIcon className="h-6 w-6  text-text-color1 "/>
                </button>
            </div>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25"/>
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel
                                    className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-text-color1 text-[25px] text-left font-semibold relative bottom-2"
                                    >
                                        {topic}
                                    </Dialog.Title>
                                    <div className="absolute top-0 right-0 hidden pt-4 pr-4 sm:block">
                                        <button
                                            type="button"
                                            className=" bg-white text-gray-400 hover:text-gray-500 focus:outline-none "
                                            onClick={closeModal}
                                        >
                                            <span className="sr-only">Close</span>
                                            <XCircleIcon className="h-6 w-6 scale-110 text-text-color1" aria-hidden="true"/>
                                        </button>
                                    </div>
                                    <div className="mt-2">
                                        {children}
                                    </div>

                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
