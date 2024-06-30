import Image from 'next/image'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SortServices from './SortServices';
import CheckIcon from '@mui/icons-material/Check';

const Items = () => {
    return (
        <div className='flex flex-col gap-5'>
            {
                new Array(3).fill(1).map((_, index) => (
                    <div key={index} className='w-full rounded border border-custom-black p-3 grid grid-cols-4 items-start gap-5 text-custom-black'>
                        <Image src={'/category_name/i2.png'} alt='cart' width={200} height={200} className='object-contain w-[200px] h-[200px' />
                        <div className='col-span-3 flex flex-col gap-5'>
                            <div className='flex w-3/4 items-center justify-between'>
                                <h2 className='font-bold text-xl'>NITTO® - NT555 G2 (225/50ZR17XL 98W) </h2>
                                <MoreVertIcon className='text-custom-blue cursor-pointer' />
                            </div>
                            <div className='flex items-center gap-x-10'>
                                <SortServices label='QTY' />
                                <span className='text-lg font-bold'>$154 . 00</span>
                            </div>
                            <div className='rounded border border-custom-blue px-6 py-2 flex items-center w-3/4 gap-2'>
                                <CheckIcon className='text-white rounded-full p-1 bg-custom-blue font-bold' />
                                <h4 className='font-bold flex flex-col'>
                                    <span>Guaranteed Fit</span>
                                    <span>2018 BMW 3-Series 328D </span>
                                </h4>
                            </div>
                            <div className='flex flex-col gap-4'>
                                <div>
                                    <h2 className='font-bold text-lg'>Disclaimer</h2>
                                    <ul className='list-disc text-sm pl-5 text-custom-blue font-bold'>
                                        <li>This product is valid for exchange for 14 days from now</li>
                                    </ul></div>
                                <div>
                                    <h2 className='font-bold text-lg'>Notes</h2>
                                    <ul className='list-disc text-sm pl-5 font-bold w-3/4'>
                                        <li>
                                            The actual Tread Pattern for your specfic Tire may vary slightly from the dis played images based on the size The actual Tread Pattern for your specfic
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Items
