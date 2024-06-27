import Image from 'next/image'
import React from 'react'

const ConfirmedOrders = () => {
    return (
        <div
            className='col-span-2 p-5 border border-[#A4A4A4] rounded flex flex-col gap-5 h-[885px]'
            style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
        >
            <h2 className='text-xl font-bold text-custom-black'>Confirmed Orders</h2>
            <div className='grid grid-cols-3 items-center gap-x-3 gap-y-5'>
                {
                    [1, 2, 3, 4, 5, 6].map((index) => (
                        <div
                            key={index}
                            className='p-5 rounded relative flex flex-col gap-5 text-custom-black h-[340px]'
                            style={{ boxShadow: "0px 2px 5px 0px #00000040" }}
                        >
                            <div className='flex items-center justify-center'>
                                <Image src={'/item.jpg'} alt='item' width={200} height={200} className='object-cover' />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <h4>Side Folding Mirror Motor W5</h4>
                                <p className='font-bold'>$199</p>
                            </div>
                        </div>
                    ))
                }

            </div>
            <div className='flex items-end justify-end w-full'>
                <span className='cursor-pointer text-custom-blue'>View All Orders</span>
            </div>
        </div>
    )
}

export default ConfirmedOrders
