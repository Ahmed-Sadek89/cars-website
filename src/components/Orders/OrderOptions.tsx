"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import CancelOrderModal from './Modals/CancelOrderModal'
import TrackOrderModal from './Modals/TrackOrderModal/TrackOrderModal'

const OrderOptions = ({ id }: { id: number }) => {
    const [trackOpen, setTrackOpen] = useState(false)
    const [cancelledOpen, setCancelledOpen] = useState(false)
    return (
        <div className='col-span-3 flex w-full flex-row items-center gap-3'>
            <Link
                href={`/orders/${id + 1}`}
                className='py-2 text-center w-1/3 rounded border border-black'
            >View Order Details</Link>
            <Link
                href={`/orders/?track=${id + 1}`}
                className='py-2 text-center w-1/3 rounded bg-custom-blue text-white'
                onClick={() => setTrackOpen(true)}
            >Track Order</Link>
            <Link
                href={`/orders/?cancel=${id + 1}`}
                className='py-2 text-center w-1/3 rounded bg-[#C60000] text-white'
                onClick={() => setCancelledOpen(true)}
            >Cancel</Link>

            <TrackOrderModal open={trackOpen} setOpen={setTrackOpen} />
            <CancelOrderModal open={cancelledOpen} setOpen={setCancelledOpen} />
        </div>
    )
}

export default OrderOptions
