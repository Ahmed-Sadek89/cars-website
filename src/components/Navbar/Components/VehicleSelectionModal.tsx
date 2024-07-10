"use client"
import MainSectionForm from '@/components/MainSectionForm/MainSectionForm'
import { Backdrop, Fade, Modal } from '@mui/material'
import React from 'react'

type props = {
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}
const VehicleSelectionModal = ({ open, setOpen }: props) => {
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
                    <div className='absolute top-[50%] w-full left-[50%] border-none outline-none flex flex-col gap-3' style={{ transform: "translate(-50%, -50%)" }}>
                        <MainSectionForm setOpen={setOpen}/>
                    </div>
                </div>
            </Fade>
        </Modal>
    )
}

export default VehicleSelectionModal
