import Image from 'next/image'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const FirstSection = () => {
    return (
        <div className='flex flex-col gap-2'>
            <div className='flex items-start gap-4 w-full'>
                <FavoriteBorderIcon className='text-white text-4xl cursor-pointer bg-[#B1B1B1] p-1 rounded transition duration-300 hover:bg-custom-blue' />
                <div className='text-sm sm:text-3xl font-bold text-custom-black'>
                    <h2>NITTO® 213990 - NT555 G2</h2>
                    <h2>G2 (225/50ZR17XL 98W)</h2>
                </div>
            </div>
            <div className="flex items-center gap-10 lg:gap-4">
                <Image src={'/category_name/four.svg'} alt='four' width={100} height={50} className='object-contain' />
                <p className='text-sm text-custom-black'><span className='text-custom-blue'>2 reviews</span>  |  Item # 9619560</p>
            </div>
            <div className='text-xl font-bold text-custom-blue lg:text-custom-black flex items-center gap-5'>
                <h2>$ 180.00 ea</h2>
                <h2>$ 515.00 set</h2>
            </div>
            <p className='text-custom-black text-sm'>In Stock (18) - Ships within 24 hrs</p>
        </div>
    )
}

export default FirstSection
