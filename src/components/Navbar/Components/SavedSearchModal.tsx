"use client"
import { CarContext } from '@/app/context/CarContext';
import ClearIcon from '@mui/icons-material/Clear';
import { Backdrop, Fade, Modal, Radio } from '@mui/material'
import Link from 'next/link';
import React, { useContext, useState } from 'react'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import VehicleSelectionModal from './VehicleSelectionModal';

type props = {
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}
const SavedSearchModal = ({ open, setOpen }: props) => {
    const carContext = useContext(CarContext);
    const [openVehicleSelection, setOpenVehicleSelection] = useState(false)
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
                    <div className='absolute top-[50%] w-[85%] lg:w-1/3 left-[50%] border-none outline-none flex flex-col gap-3' style={{ transform: "translate(-50%, -50%)" }}>
                        <div className='bg-white p-6 rounded flex flex-col justify-start items-start gap-3 relative'>
                            <div onClick={() => {
                                setOpen(false);
                            }} className='absolute right-3 top-3 cursor-pointer'>
                                <ClearIcon />
                            </div>
                            <div className="flex w-full items-center justify-between mt-5">
                                <h2 className='text-custom-black text-lg from-black'>My Garage</h2>
                                <button className='text-custom-blue text-sm' onClick={() => carContext?.deleteAllCars()}>Clear all</button>
                            </div>
                            <div className='flex flex-col gap-1 w-full h-[250px] overflow-y-scroll'>
                                {
                                    carContext?.cars.map((item, index) => (
                                        <div key={item.id} className='flex items-center justify-between w-full'>
                                            <Link
                                                href={`/search?car_model=${item.name}&car_year=${item.year}&car_series=${item.series}`}
                                                className='flex items-center gap-0 sm:gap-1'
                                                onClick={() => {
                                                    carContext.updateCarById(item.id)
                                                    setOpen(false)
                                                }}
                                            >
                                                <Radio
                                                    checked={index === 0}
                                                    value={item.name}
                                                    name="cars"
                                                    id={index.toString()}
                                                />
                                                <label
                                                    htmlFor={index.toString()}
                                                    className={`text-sm ${index === 0 ? "font-bold" : ""} hover:underline cursor-pointer`}
                                                >{`${item.year} ${item.name}`}</label>
                                            </Link>
                                            <DeleteForeverIcon
                                                className='cursor-pointer hover:text-red-500'
                                                onClick={() => carContext.deleteCarById(item.id)}
                                            />
                                        </div>
                                    ))
                                }

                            </div>
                            <button
                                className='text-white w-full bg-custom-blue rounded-md p-2 transition duration-300 hover:bg-custom-blue1-hover'
                                onClick={() => {
                                    setOpenVehicleSelection(true)
                                }}
                            >
                                Add vehicles
                            </button>
                            <VehicleSelectionModal open={openVehicleSelection} setOpen={setOpenVehicleSelection} />
                        </div>
                    </div>
                </div>
            </Fade>
        </Modal>
    )
}

export default SavedSearchModal