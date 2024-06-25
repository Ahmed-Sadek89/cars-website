"use client"
import { usePathname } from 'next/navigation'
import FirstPart from './Desktop/FirstPart'
import SecondPart from './Desktop/SecondPart'
import ThirdPart from './Desktop/ThirdPart'
import { checkIsNotAuthPages } from './Desktop/isNotAuthPages'

const Navbar = () => {
    const path = usePathname()
    const isNotAuthPage = checkIsNotAuthPages(path)
    return (
        <header className={`bg-white py-6 ${!isNotAuthPage ? "border-b border-[#A4A4A4]" : ""}`}>
            <div className='custom-container1'>
                <div className='w-full flex flex-row items-center justify-between gap-2'>
                    <FirstPart />
                    <SecondPart />
                    <ThirdPart />
                </div>
            </div>
        </header>
    )
}

export default Navbar