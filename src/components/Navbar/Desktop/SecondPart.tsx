"use client"
import { InputBase } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import { checkIsNotAuthPages } from './isNotAuthPages';
import { usePathname } from 'next/navigation';

const SecondPart = () => {
  const path = usePathname()
  const isNotAuthPage = checkIsNotAuthPages(path)
  return (
    <>
      {
        isNotAuthPage &&
        <div className='flex-1 bg-transparent border-[1px] border-[#929292] flex flex-row items-center justify-between rounded-md gap-5 py-1 px-2'>
          <InputBase placeholder="search by make model Year , Product Type , Part Number , or Brand" inputProps={{ 'aria-label': 'search' }} className='w-full placeholder:text-[#5C5C5C] text-[#5C5C5C]' />
          <SearchIcon className='text-black cursor-pointer' />
        </div>
      }
    </>
  )
}

export default SecondPart