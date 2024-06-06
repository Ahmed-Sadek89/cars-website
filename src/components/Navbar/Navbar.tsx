import React from 'react'
import FirstPart from './Desktop/FirstPart'
import SecondPart from './Desktop/SecondPart'
import ThirdPart from './Desktop/ThirdPart'

const Navbar = () => {
    return (
        <div className='bg-white py-6'>
            <div className='custom-container'>
                <div className='w-full flex flex-row items-center justify-between gap-2'>
                    <FirstPart />
                    <SecondPart />
                    <ThirdPart />
                </div>
            </div>
        </div>
    )
}

export default Navbar