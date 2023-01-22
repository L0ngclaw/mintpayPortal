import React from 'react'

const people = [
    { Date: 'feb 18 2023', email: '01', OrderNo: '202109', Merchant: 'Samsung', DueAmount: 'Rs.400.00', payment: '1/3', status: 'Pending', action: 'button' },
    { Date: 'feb 18 2023', OrderNo: '202109', email: '02', Merchant: 'Samsung', DueAmount: 'Rs.500.00', payment: '2/3', status: 'Pending', action: 'button' }

]
function PendingPayements() {
    return (

        <div className=" flex-col justify-start lg:justify-center">

            <div className='flex-col bg-white rounded-lg h-full p-2'>
                <div className=' text-text-color1 hidden md:block text-[25px] font-semibold justify-start pb-4 w-auto '>Orders </div>
                <div className='border-b border hidden md:block border-text-color4 mb-2'></div>
                <div className="   md:block overflow-hidden  ring-opacity-5   md:rounded-lg">
                    <table className="min-w-full hidden md:block divide-y divide-gray-300">
                        <thead className="bg-gray-50  ">
                            <tr className=' '>
                                <th scope="col" className="py-3.5 lg:pl-12 xl:pl-16 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                                    Date
                                </th>
                                <th
                                    scope="col"
                                    className=" px-6 py-3.5 text-left xl:pl-16 lg:pl-12 text-sm font-semibold text-gray-900 sm:table-cell"
                                >
                                    OrderNo
                                </th>
                                <th
                                    scope="col"
                                    className=" px-6 py-3.5 text-left xl:pl-16 xl:pr-16 lg:pl-12 text-sm font-semibold text-gray-900 lg:table-cell"
                                >
                                    Merchant
                                </th>
                                <th scope="col" className="px-6 py-3.5 xl:pl-16 xl:pr-16 lg:pl-12 text-left text-sm font-semibold text-gray-900">
                                    DueAmount
                                </th>
                                <th scope="col" className="px-6 py-3.5 xl:pl-16 xl:pr-16 lg:pl-12 text-left text-sm font-semibold text-gray-900">
                                    payment
                                </th>
                                <th scope="col" className="px-6 py-3.5 xl:pl-16 xl:pr-16 lg:pl-12 text-left text-sm font-semibold text-gray-900">
                                    status
                                </th>
                                <th scope="col" className="px-6 py-3.5  xl:pl-16 xl:pr-16 lg:pl-16 text-left text-sm font-semibold text-gray-900">
                                    action
                                </th>

                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 bg-white">
                            {people.map((person) => (
                                <tr key={person.email}>
                                    <td className="whitespace-nowrap lg:pl-12 xl:pl-16 xl:pr-16 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                        {person.Date}
                                    </td>
                                    <td className=" whitespace-nowrap lg:pl-12 xl:pl-16 xl:pr-16 px-6 py-4 text-sm text-gray-500 sm:table-cell">
                                        {person.OrderNo}
                                    </td>
                                    <td className=" whitespace-nowrap lg:pl-12 xl:pl-16 xl:pr-16 px-6 py-4 text-sm text-gray-500 lg:table-cell">
                                        {person.Merchant}
                                    </td>
                                    <td className="whitespace-nowrap px-6 lg:pl-12 xl:pl-18 xl:pr-18 py-4 text-sm text-gray-500">
                                        {person.DueAmount}
                                    </td>
                                    <td className="whitespace-nowrap px-6 lg:pl-12 xl:pl-18 xl:pr-18 py-4 text-sm text-gray-500">
                                        {person.payment}
                                    </td>
                                    <td className="whitespace-nowrap px-6 lg:pl-12 xl:pl-18 xl:pr-18 py-4 text-sm text-gray-500">
                                        {person.status}
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-4 xl:pl-16 lg:pl-18 xl:pr-18 text-sm text-gray-500">
                                        {person.action}
                                    </td>

                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className='flex-grow flex-col md:hidden p-4 w-auto  bg-white rounded-lg'>
                    <div className='flex text-text-color1 text-[25px] font-semibold justify-start pb-4 w-auto '>Orders </div>
                    {people.map((person) => (
                        <div className='flex flex-row p-2 bg-yellow-200  rounded-lg mb-2'>
                            <div className='flex items-center justify-center px-12 text-text-color1 text-[20px]  text-right font-semibold '>
                                {person.payment}
                            </div>
                            <div className='flex flex-col  w-full px-4 '>
                                <div className=' text-text-color1 text-[20px]  text-right font-semibold'>
                                    {person.DueAmount}
                                </div>
                                <div className='  text-text-color4 text-right text-4 font-semibold'>
                                    {person.Date}
                                </div>
                            </div>
                        </div>


                    ))}



                </div>

            </div>
        </div>



    )
}

export default PendingPayements
