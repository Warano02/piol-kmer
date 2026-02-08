import React from 'react'
import InstantBookinkClient from './InstantBookinkClient'
import Link from 'next/link'

export const metadata = {
    title: "Pick your booking settings - PiolKmer",
    description: "Become a Host and Rent Out Your Room, House or Apartment on PiolKmer",
}

function InstantBooking() {
    return (
        <section id="description-house" className="w-full h-full  overflow-scroll hidden-scroll-bar flex flex-col  items-center">
            <div className="w-2/3 h-full  flex flex-col items-center relative">
                <div aria-label="Description of the section" className="mt-4">
                    <h1 className="text-4xl font-bold">Pick your booking settings</h1>
                    <h4 className="text-gray-700 font-semibold">You can change this at any time. <Link href="/resources/hosting-home/how-to-pick-your-booking-settings" target='_blank' className='underline'>Learn more</Link> </h4>
                </div>
                <InstantBookinkClient />
            </div>
        </section>
    )
}

export default InstantBooking