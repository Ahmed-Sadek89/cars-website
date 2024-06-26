"use client";
import React, { useState } from 'react'
import CustomTabs from './CustomTabs'
import Image from 'next/image';
import OrderInfo from './OrderInfo';
import OrderOptions from './OrderOptions';

const Orders = () => {
    const [value, setValue] = useState(0);
    const status = ['paid', 'paid', 'cancelled', 'paid', 'paid', 'cancelled'];

    return (
        <>
            <CustomTabs value={value} setValue={setValue} />
            <div className="custom-container1 flex flex-col gap-5 py-10">
                <div className='flex flex-col gap-1'>
                    <h2 className='font-bold text-2xl text-custom-black'>Order History</h2>
                    <p className='text-sm text-custom-gray'>Mange your recent orders and invoices</p>
                </div>
                <div className='flex flex-col gap-10'>
                    {
                        status.map((order, index) => (
                            <div
                                key={index}
                                className='p-5 grid grid-cols-8 items-start w-full gap-1 relative'
                                style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
                            >
                                <Image src={'/item.jpg'} alt='item' width={100} height={100} className='object-cover col-span-1' />
                                <OrderInfo order={order} />
                                <OrderOptions id={index} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Orders
