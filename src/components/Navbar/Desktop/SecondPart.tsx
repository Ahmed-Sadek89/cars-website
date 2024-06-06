import { InputBase } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import React from 'react'

const SecondPart = () => {
  return (
    <div className='flex-1 bg-transparent border-[1px] border-[#2c2e33] flex flex-row items-center justify-between rounded-md gap-5 py-1 px-2'>
      <InputBase placeholder="search by make model Year , Product Type , Part Number , or Brand" inputProps={{ 'aria-label': 'search' }} className='w-full placeholder:text-[#5C5C5C] text-[#5C5C5C]' />
      <SearchIcon className='text-black cursor-pointer'/>
    </div>
  )
}

export default SecondPart