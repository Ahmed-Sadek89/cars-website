import { Divider } from '@mui/material'
import React from 'react'

const TrackOrderDetails = () => {
    return (
        <div className='flex w-full items-start justify-between mt-10'>
            <div className='flex flex-col gap-5'>
                <h2 className='text-black text-xl font-bold'>Order Details</h2>
                <div className='flex flex-col gap-1 text-sm'>
                    <span>July 10,204</span>
                    <span>Order Id : #H3l54S</span>
                </div>
                <span className='text-sm'>Order Status: New Order</span>
                <span className='text-sm'>Packages in this Order: 1</span>
                <span className='text-sm'>Total Items: 4</span>
            </div>
            <div className='flex flex-col gap-7'>
                <div className='flex flex-col gap-1'>
                    <h4 className='font-bold'>Ship to:</h4>
                    <p className='text-sm'>Egypt Road ,Sheikhupura</p>
                </div>
                <div className='flex flex-col gap-1'>
                    <h4 className='font-bold'>Payment Information:</h4>
                    <p className='text-sm'>Credit Card No:2522 2322 5455 2566</p>
                </div>
            </div>
            <div className='flex flex-col gap-5'>
                <h4  className='font-bold'>Order Summary</h4>
                <span className='text-lg'>Subtotal: 120$</span>
                <span className='text-lg'>Shipping: 20$</span>
                <span className='text-lg'>Sales Tax: 0$</span>
                <Divider className='bg-black' />
                <div className='w-full flex items-center justify-between'>
                    <span className='text-lg'>Total</span><span className='text-lg'>140$</span>
                </div>
            </div>
        </div>
    )
}

export default TrackOrderDetails
