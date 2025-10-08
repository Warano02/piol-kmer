import React from 'react'
import { BriefcaseBusiness, PartyPopper, ShieldCheck, Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useAppContext } from '@/hooks/useAppContext'
import { Secure } from '../Icons'
function Host() {
    const {AppName}=useAppContext()
    const img = "https://a0.muscache.com/im/pictures/user/User/original/1c9147e8-be36-4b5b-967c-ef7f02a62d06.jpeg?im_w=240"
    return (
        <section className='w-full py-8 border-t border-b'>
            <h1 className='h text-xl'>Meet your host</h1>
            <div className='w-full flex gap-2 mt-8'>
                <div className='w-[25.75em] px-3 '>
                    <Link to={""} className='w-full h-[260px] rounded-2xl bg-white shadow-md flex gap-2 justify-center items-center'>
                        <div className='w-[128px] h-full fle'>
                            <div className='flex relative w-28 h-28  '>
                                <img src={img} alt="profil of the host" className='rounded-full w-full h-full' />
                                <span className='absolute bottom-0 right-2 bg-[#E21B5F] w-7 h-7 rounded-full flex justify-center items-center'>
                                    <ShieldCheck className='w-[18px] h-[18px] text-white text-bold ' />
                                </span>
                            </div>
                            <h1 className='px-2 h text-3xl mt-2'>Cirylle</h1>
                            <h6 className='text-[14px] text-gray-600 h px-6 '>Host</h6>
                        </div>
                        <div className='w-[122px] flex flex-col  px-3'>
                            <div className='w-full h-20 border-b flex flex-col justify-center items-center'>
                                <h1 className='h text-2xl font-medium'>8</h1>
                                <h6 className='text-[12px] text-gray-400'>Reviews</h6>
                            </div>
                            <div className='w-full h-20 border-b flex flex-col justify-center items-center'>
                                <div className='h text-2xl flex justify-center items-center gap-0.5 font-medium'>5.0 <Star className='w-[15px] mt-1 ' /> </div>
                                <h6 className='text-[12px] text-gray-400'>Rating</h6>
                            </div>
                            <div className='w-full h-20  flex flex-col justify-center items-center'>
                                <h1 className='h text-2xl font-medium'>7</h1>
                                <h6 className='text-[12px] text-gray-400'>Months hosting</h6>
                            </div>
                        </div>
                    </Link>
                    {/* Description of the host */}
                    <div className='w-full mt-6'>
                        <div className='flex  gap-1 mb-4 flex-col'>
                            <div className='flex gap-2'> <PartyPopper className='ml-2 w-[18px]' /> <h2 className='text-bold text-black-secondary h'>Born in 80s</h2>  </div>
                            <div className='flex gap-2'> <BriefcaseBusiness className='ml-2 w-[18px]' /><h2 className='text-bold text-black-secondary h'>My work: Web developper</h2>  </div>
                        </div>
                        <p className='text-[14px] text-black-secondary leading-7 p'>
                            My name is Cyrille, a computer developer, passionate about travel. I appreciate quiet, clean and well-organized spaces. Thank you for welcoming me to your space!
                        </p>
                    </div>
                </div>

                <div className='ml-4 flex-1 h-auto'>
                    <h1 className='text-2xl h mb-2'>Host details</h1>
                    <div className='mt-1 flex flex-col gap-1 mb-8'>
                        <h2 className='text-[18px] text-bold text-black-secondary p2 '>Response rate : 100%</h2>
                        <h2 className='text-[18px] text-bold text-black-secondary p2 '>Response within an hour </h2>
                    </div>
                    <Link to={""} className='px-8 py-4 rounded-2xl bg-gray-200 h'>
                        Message host
                    </Link>
                    <div className='w-full mt-8 h-0.5 bg-gray'></div>
                    <div className='w-full flex gap-2 p-2'>
                        <Secure />
                        <p className='text-[14px] p '>To help protect your payment, always use {AppName} to send money and communicate with hosts.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default React.memo(Host)
