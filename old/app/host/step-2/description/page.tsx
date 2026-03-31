import React from 'react'
import DescriptionHouseClient from './DescriptionHouseClient'

export const metadata = {
    title: "Describ your place - PiolKmer",
    description: "Describe your windmill to attract guests and make it stand out. Highlight its unique features, ambiance, and any special amenities that set it apart from other listings.",
}

function DescriptionHouse() {
    return (
        <section id="description-house" className="w-full h-full  overflow-scroll hidden-scroll-bar flex flex-col items-center ">
            <div className="w-2/3 h-full  flex flex-col items-center relative">
                <div aria-label="Description of the section" className="mt-4">
                    <h1 className="text-4xl font-bold">Create your description</h1>
                    <h4 className="text-gray font-semibold">Share what makes your place special.</h4>
                    <DescriptionHouseClient />
                </div>
            </div>
        </section>
    )
}

export default DescriptionHouse