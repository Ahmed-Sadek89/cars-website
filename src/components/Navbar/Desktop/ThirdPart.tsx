import Image from 'next/image'
import VehicleSelectionBtn from './VehicleSelectionBtn'

const ThirdPart = () => {
  return (
    <div className='flex flex-row items-center gap-2'>
      <VehicleSelectionBtn />
      <Image src={'/userIcon.svg'} alt='user' width={30} height={30} className='cursor-pointer' />
      <div className='relative cursor-pointer'>
        <Image src={'/cartIcon.svg'} alt={'car'} width={30} height={30} />
        <span className='text-center text-white absolute w-[56%] h-[56%] bg-custom-green top-[-5px] right-[-4px] py-[0px] px-[5px] rounded-full text-sm'>
          {1}
        </span>
      </div>
    </div>
  )
}

export default ThirdPart