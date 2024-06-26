"use client"
import { Backdrop, Fade, Modal } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type props = {
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}
const TrackOrderModal = ({ open, setOpen }: props) => {
    return (
        <Modal
            open={open}
            onClose={() => setOpen(false)}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
                backdrop: {
                    timeout: 500,
                },
            }}
        >
            <Fade in={open}>
                <div className='z-[100] border-none outline-none'>
                    <div className='absolute top-[50%] left-[50%] w-[75%] md:w-[50%]  border-none outline-none flex flex-col gap-3' style={{ transform: "translate(-50%, -50%)" }}>
                        <div className='p-10 bg-white rounded flex flex-col justify-start items-start gap-3'
                        >
                            track modal under development
                        </div>
                    </div>
                </div>
            </Fade>
        </Modal>
    )
}

export default TrackOrderModal