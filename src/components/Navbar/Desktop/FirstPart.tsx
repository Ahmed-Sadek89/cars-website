import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const FirstPart = () => {
  return (
    <div className='flex flex-row items-center gap-3'>
      <Image src={'/menuIcon.svg'} alt='menu' width={20} height={20} className='cursor-pointer' />
      <Link href={'/'}>
        <Image src={'/logo.svg'} alt='logo' width={100} height={50} />
      </Link>
      <button className='w-auto flex flex-row items-center gap-2 border-[1px] border-custom-black rounded p-2'>
        <Image src={'/localization.svg'} alt='logo' width={20} height={20} />
        <span className='text-[#3C3C3C]'>English</span>
      </button>
    </div>
  )
}

export default FirstPart