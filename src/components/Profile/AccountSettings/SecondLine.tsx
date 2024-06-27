import Image from 'next/image'
import React from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const SecondLine = () => {
    return (
        <div className='grid grid-cols-2 items-start gap-16'>
            <div>
                <div className='flex flex-col gap-1 w-auto mb-10 mt-5 rounded-md border border-custom-black p-3 text-custom-black bg-transparent transition duration-300 hover:bg-[#405FF226] hover:border-[#405FF226]'>
                    <h3 className='font-bold text-xl'>Wish Lists</h3>
                    <p className='text-xs'>Create Wish Lists and share them with your friends</p>
                </div>
                <div className='w-full border border-custom-black p-5 rounded flex flex-col gap-3'>
                    <div className='w-full flex items-center gap-2'>
                        <Image src={'/profile/save.svg'} alt='save' width={20} height={20} />
                        <span className='text-custom-gray text-sm font-semibold'> Save products, photos, project ideas</span>
                    </div>
                    <div className='w-full flex items-center gap-2'>
                        <Image src={'/profile/organize.svg'} alt='organize' width={20} height={20} />
                        <span className='text-custom-gray text-sm font-semibold'>Organize by vehicle or job Type</span>
                    </div>
                    <div className='w-full flex items-center gap-2'>
                        <Image src={'/profile/share.svg'} alt='share' width={20} height={20} />
                        <span className='text-custom-gray text-sm font-semibold'>Share Wish Lists and ideas with your friends</span>
                    </div>
                    <button className='mt-5 rounded py-3 text-white bg-custom-blue'>ADD TO CART</button>
                </div>
            </div>
            <div className='w-full'>
                <div className='flex flex-col gap-1 w-auto mb-10 mt-5 rounded-md border border-custom-black p-3 text-custom-black bg-transparent transition duration-300 hover:bg-[#405FF226] hover:border-[#405FF226]'>
                    <h3 className='font-bold text-xl'>Garage</h3>
                    <p className='text-xs'>Add your vehicles & find parts easily</p>
                </div>
                <div className='w-full border border-custom-black py-4 px-8 rounded flex flex-col gap-2'>
                    <div className='w-full flex items-center justify-between'>
                        <div className='flex items-center gap-3'>
                            <input type="radio" name="cars" value="2018 BMW 3-Series" />
                            <label htmlFor="2018 BMW 3-Series" className='text-custom-black'>2018 BMW 3-Series</label>
                        </div>
                        <DeleteOutlineIcon className='cursor-pointer text-custom-gray' />
                    </div>
                    <div className='w-full flex items-center justify-between'>
                        <div className='flex items-center gap-3'>
                            <input type="radio" name="cars" value="2018 Ram 2500" />
                            <label htmlFor="2018 Ram 2500" className='text-[#525252]'>2018 Ram 2500</label>
                        </div>
                        <DeleteOutlineIcon className='cursor-pointer text-custom-gray' />
                    </div>
                    <div className='flex items-center justify-center w-full'>
                        <button className='w-3/4 mt-14 rounded py-3 border border-custom-black font-bold'>Add Vehicle</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SecondLine
