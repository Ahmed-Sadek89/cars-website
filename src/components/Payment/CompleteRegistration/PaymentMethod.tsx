import Image from 'next/image'
import React from 'react'

const PaymentMethod = () => {
    return (
        <div className='flex flex-col gap-5 w-full'>
            <h2 className='text-xl font-bold text-custom-black'>Payment methods</h2>
            <div className='flex gap-4 items-center' >
                <div className='flex items-center gap-2'>
                    <input type={'radio'} name='payment' id='p1' />
                    <label htmlFor='p1' className='flex items-center justify-center p-2 bg-[#862E9C33] cursor-pointer'>
                        <Image src={'/payment/p1.png'} alt='payment' width={100} height={50} className='object-cover w-[100px] h-[50px]' />
                    </label>
                </div>
                <div className='flex items-center gap-2'>
                    <input type={'radio'} name='payment' id='p2' />
                    <label htmlFor='p2' className='flex items-center justify-center p-2 bg-[#FF000B33] cursor-pointer'>
                        <Image src={'/payment/p2.png'} alt='payment' width={100} height={50} className='object-cover w-[100px] h-[50px]' />
                    </label>
                </div>
                <div className='flex items-center gap-2'>
                    <input type={'radio'} name='payment' id='p3' />
                    <label htmlFor='p3' className='flex items-center justify-center p-2 cursor-pointer'>
                        <Image src={'/payment/visa.svg'} alt='payment' width={100} height={70} className='object-cover w-[100px] h-[70px]' />
                    </label>
                </div>
            </div>
        </div>
    )
}

export default PaymentMethod
