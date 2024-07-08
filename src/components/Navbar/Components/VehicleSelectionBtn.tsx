"use client"
import Image from "next/image"
import { useContext, useState } from "react"
import VehicleSelectionModal from "./VehicleSelectionModal"
import { CarContext } from "@/app/context/CarContext"
import SavedSearchModal from "./SavedSearchModal"

const VehicleSelectionBtn = () => {
    const [hovered, setIsHovered] = useState(false)
    const [openCarSearchForm, setOpenCarSearchForm] = useState(false);
    const [openSavedSearch, setOpenSavedSearch] = useState(false);
    const carContext = useContext(CarContext);
    return (
        <>
            <button
                className={`
                    ${carContext?.cars.length === 0 ? "bg-custom-blue text-white " : "bg-[#6F88FF26] text-custom-blue "}
                    w-full rounded-md p-4 font-bold flex flex-row items-center justify-center gap-2 transition duration-300 hover:bg-[#6F88FF26] hover:text-custom-black`
                }
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => carContext?.cars.length === 0 ? setOpenCarSearchForm(true) : setOpenSavedSearch(true)}
            >
                <div className=' relative'>
                    {carContext?.cars.length === 0 ?
                        <Image src={hovered ? '/carBlackIcon.svg' : '/carIcon.svg'} alt={'car'} width={30} height={30} /> :
                        <Image src={'/carBlackIcon.svg'} alt={'car'} width={30} height={30} />
                    }
                    <span className='text-white absolute w-auto bg-custom-green bottom-[6px] py-[0px] px-[4px] rounded-full text-sm'>
                        {carContext?.cars.length}
                    </span>
                </div>
                <span className=''>
                    {carContext?.cars.length === 0 ?
                        "Select your Vehicle"
                        :
                        `${carContext?.cars[0].year} ${carContext?.cars[0].name} | Change`
                    }
                </span>
            </button>
            <SavedSearchModal open={openSavedSearch} setOpen={setOpenSavedSearch} />
            <VehicleSelectionModal open={openCarSearchForm} setOpen={setOpenCarSearchForm} />
        </>
    )
}

export default VehicleSelectionBtn