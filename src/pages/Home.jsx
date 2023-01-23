import React from 'react'
import AccountSummery from '../components/Home/AccountSummery'
import Offer from '../components/Home/offer'
import Welcome from '../components/Home/Welcome'
import PendingPayementsComponent from '../components/pendingPayments/PendingPaymentsComponent'

const Home = () => {
    return (
        <div className='flex-auto items-center  justify-center   '>
            <div className='flex flex-col space-y-8 bg-slate-200 px-8 pb-8 '>
                <div className={`flex flex-col space-y-5 xl:space-y-0 xl:flex-row xl:space-x-4 `}>
                    <div className={`xl:-order-2 grow  `}>
                        <Welcome />
                    </div>
                    <div className={`xl:hidden`}><Offer /></div>
                    <div className={`xl:-order-1 grow xl:justify-start`}><AccountSummery /></div>
                </div>
                <div className={`hidden xl:block`}><Offer /></div>



                {/* <div className='flex flex-col bg-slate-200 px-6 space-y-6 pt-2 md:pt-1  w-full xl:hidden '>
                    <div><Welcome /></div>
                    <div><Offer /></div>
                    <div><AccountSummery /></div>
                  
                </div>
                <div className=' flex-col space-y-6 hidden xl:block px-8'>
                    <div className='flex flex-row space-x-4  '>
                        <div className='flex-grow w-1/2'><Welcome /></div>
                        <div className='flex-grow w-1/2'><AccountSummery /></div>
                    </div>
                    <div><Offer /></div>
                
                </div> */}

                <PendingPayementsComponent />
            </div>
        </div>
    )
}

export default Home
