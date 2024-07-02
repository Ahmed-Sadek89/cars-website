"use client"
import { Backdrop, Fade, Modal } from '@mui/material'
import React, { useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

type props = {
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}
const LangChangeModal = ({ open, setOpen }: props) => {
    const [displayLangSelection, setDisplayLangSelection] = useState(false)
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
                    <div className='absolute top-[50%] h-[55vh] md:h-[46vh] lg:h-[65vh] left-[50%] w-[75%] md:w-[50%]  border-none outline-none flex flex-col gap-3' style={{ transform: "translate(-50%, -50%)" }}>
                        <div className='bg-white p-6 rounded flex flex-col justify-start items-start gap-3'>
                            <h2 className="text-xl font-bold ">Display settings</h2>
                            <p className='font-light mb-1'>Change your language</p>
                            <div
                                className='flex flex-row justify-between items-center w-full border-[1px] border-custom-input-bg rounded-lg py-2 px-3 cursor-pointer'
                                onClick={() => setDisplayLangSelection(prev => !prev)}
                            >
                                <div>
                                    <h4>Language</h4>
                                    <h3 className='font-semibold'>English</h3>
                                </div>
                                <KeyboardArrowDownIcon />
                            </div>
                            <button
                                className='text-white w-full bg-custom-blue rounded-md p-2 transition duration-300 hover:bg-custom-blue1-hover'
                                onClick={() => setOpen(false)}
                            >
                                Save
                            </button>
                        </div>
                        {
                            displayLangSelection &&
                            <ul className=' bg-gray-100 overflow-hidden border-none outline-none rounded flex flex-col justify-start items-start'>
                                <li
                                    className='w-full cursor-pointer px-6 py-3 transition duration-300 hover:bg-gray-200'
                                    onClick={() => {
                                        setDisplayLangSelection(false)
                                    }}
                                >Arabic</li>
                                <li
                                    className='w-full cursor-pointer px-6 py-3 transition duration-300 hover:bg-gray-200'
                                    onClick={() => {
                                        setDisplayLangSelection(false)
                                    }}
                                >English</li>
                            </ul>
                        }
                    </div>
                </div>
            </Fade>
        </Modal>
    )
}

export default LangChangeModal