"use client"
import { usePathname } from 'next/navigation'
import FirstPart from './Components/FirstPart'
import SecondPart from './Components/SecondPart'
import ThirdPart from './Components/ThirdPart'
import { checkIsNotAuthPages } from '../../global/isNotAuthPages'
import VehicleSelectionBtn from './Components/VehicleSelectionBtn'

const Navbar = () => {
    const path = usePathname()
    const isNotAuthPage = checkIsNotAuthPages(path)
    return (
        <header className={`bg-white py-3 ${!isNotAuthPage ? "border-b border-[#A4A4A4]" : ""}`}>
            <div className='custom-container1'>
                <div className='w-full flex flex-row items-center justify-between gap-5'>
                    <FirstPart />
                    <SecondPart />
                    <ThirdPart />
                </div>
            </div>
            <div className="custom-container1 py-5 block md:hidden">
                <VehicleSelectionBtn />
            </div>
        </header>
    )
}

export default Navbar