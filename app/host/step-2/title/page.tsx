import React from 'react'
import TitleClient from './TitleClient'

function Title() {
    return (
        <section id="photos-house" className="w-full h-full  overflow-scroll hidden-scroll-bar flex flex-col items-center">
            <div className="w-2/3 h-full  flex flex-col items-center relative">
                <div aria-label="Description of the section" className="mt-4">
                    <h1 className="text-2xl font-bold">Now, let's give your windmill a title</h1>
                    <h4 className="text-gray font-semibold">Short titles work best. Have fun with it—you can always change it later.</h4>
                    <TitleClient />
                </div>
            </div>
        </section>
    )
}

export default Title