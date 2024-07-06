"use client"
import { checkIsNotAuthPages } from '@/global/isNotAuthPages'
import SecondPart from './components/SecondPart'
import ThirdPart from './components/ThirdPart'
import { Divider } from '@mui/material'
import { usePathname } from 'next/navigation'

const Footer = () => {
  const path = usePathname()
  const isNotAuthPage = checkIsNotAuthPages(path)
  return (
    <>
      {
        isNotAuthPage &&
        <footer className='bg-custom-black text-white w-full overflow-hidden'>
          {/* <FirstPart />
          <Divider className='bg-gray-600' /> */}
          <SecondPart />
          <Divider className='bg-white' />
          <ThirdPart />
        </footer>
      }
    </>
  )
}

export default Footer