"use client"
import Image from "next/image"
import { useState } from "react"
import VehicleSelectionModal from "./VehicleSelectionModal"

const VehicleSelectionBtn = () => {
    const [hovered, setIsHovered] = useState(false)
    const [open, setOpen] = useState(false);
    return (
        <>
            <button
                className='bg-custom-blue w-full text-white rounded-md p-4 flex flex-row items-center justify-center gap-2 transition duration-300 hover:bg-[#6F88FF26] hover:text-custom-black'
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => setOpen(true)}
            >
                <div className=' relative'>
                    <Image src={hovered ? '/carBlackIcon.svg' : '/carIcon.svg'} alt={'car'} width={30} height={30} />
                    <span className='text-white absolute w-auto bg-custom-green bottom-[6px] py-[0px] px-[4px] rounded-full text-sm'>
                        {4}
                    </span>
                </div>
                <span className=''>Select your Vehicle</span>
            </button>
            <VehicleSelectionModal open={open} setOpen={setOpen} />
        </>
    )
}

export default VehicleSelectionBtn