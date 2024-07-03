"use client"
import Image from 'next/image'
import VehicleSelectionBtn from './VehicleSelectionBtn'
import CustomDropDown from './CustomDropDown/CustomDropDown'
import { usePathname } from 'next/navigation'
import { checkIsNotAuthPages } from '../../../global/isNotAuthPages'
import LockIcon from '@mui/icons-material/Lock';
import Link from 'next/link'

const ThirdPart = () => {
  const path = usePathname()
  const isNotAuthPage = checkIsNotAuthPages(path)
  return (
    <>
      {
        isNotAuthPage ?
          <div className='hidden md:flex flex-row items-center gap-2'>
            <VehicleSelectionBtn />
            <CustomDropDown
              link='profile'
              content={
                <Image src={'/userIcon.svg'} alt='user' width={30} height={30} className='cursor-pointer' />
              }
            />
            <CustomDropDown
              link='cart'
              content={
                <div className='relative cursor-pointer'>
                  <Image src={'/cartIcon.svg'} alt={'car'} width={30} height={30} />
                  <span className='text-center text-white absolute w-[56%] h-[56%] bg-custom-green top-[-5px] right-[-4px] py-[0px] px-[5px] rounded-full text-sm'>
                    {1}
                  </span>
                </div>
              }
            />

          </div>
          :
          <Link href={'#'} className='flex flex-row items-center gap-5 text-custom-black font-bold capitalize'>
            <h4>secure {path.split('/')[1]}</h4>
            <LockIcon className='w-[35px] h-[35px] p-2 rounded-full border border-black' />
          </Link>
      }
    </>
  )
}

export default ThirdPart