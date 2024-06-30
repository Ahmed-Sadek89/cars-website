"use client"
import { useCallback, useState } from 'react'
import { Divider } from '@mui/material'
import PersonalDetails from './PersonalDetails'
import PaymentMethod from './PaymentMethod'
import CardDetails from './CardDetails'
import CompleteRegistrationModal from './CompleteRegistrationModal/CompleteRegistrationModal'

const CompleteRegistration = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = useCallback(() => {
        setOpen(prev => !prev)
    }, [])
    return (
        <section className='col-span-2 rounded border border-custom-black p-5 flex flex-col gap-10'>
            <h2 className='text-3xl font-bold text-custom-black'>Complete registration payment</h2>
            <div className='flex flex-col gap-2'>
                <h6 className='w-2/3 flex items-center justify-between'>
                    <span>Subtotal</span><span>$565.16</span>
                </h6>
                <Divider className='w-2/3 bg-custom-black h-[2px]' />
            </div>
            <PersonalDetails />
            <PaymentMethod />
            <CardDetails />
            <button className='w-full rounded bg-custom-blue text-white py-2' onClick={handleOpen}>Complete</button>
            <CompleteRegistrationModal open={open} setOpen={handleOpen} />
        </section>
    )
}

export default CompleteRegistration
