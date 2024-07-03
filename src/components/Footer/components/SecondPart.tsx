import { footerLinks } from '@/mocks/footerLinks'
import Link from 'next/link'
import React from 'react'
import PlatformLink from './PlatformLink';
import Image from 'next/image';

const SecondPart = () => {
  return (
    <div className='custom-container2 py-10'>
      <div className='flex flex-row flex-wrap gap-10 md:gap-0 items-start w-full justify-between'>
        {
          footerLinks.map((list, index) => (
            <div key={index} className='flex flex-col gap-4'>
              <h3 className='font-bold text-md'>{list.category}</h3>
              <div className='flex flex-col gap-3 md:gap-6'>
                {list.links.map((link, i) => (
                  <Link key={i} href={link.href} className='font-[200] text-sm'>{link.name}</Link>
                ))}
              </div>
            </div>
          ))
        }
        <div className='flex flex-col gap-7'>
          <h3 className='font-bold text-md'>Our Mobile App</h3>
          <PlatformLink text1="Download on the" text2="Apple Store" imagePath={'/apple.svg'} />
          <PlatformLink text1="Get in on" text2="Google Play" imagePath={'/googlePlay.svg'} />
          <h3 className='font-bold text-md'>Connect With Us</h3>
          <div className='flex flex-row items-center w-full justify-between'>
            <Link href={'#'}>
              <Image src={'/facebook.svg'} alt='facebook' width={15} height={20} />
            </Link>
            <Link href={'#'}>
              <Image src={'/twetter.svg'} alt='twetter' width={20} height={20} />
            </Link>
            <Link href={'#'}>
              <Image src={'/instagram.svg'} alt='instagram' width={20} height={20} />
            </Link>
            <Link href={'#'}>
              <Image src={'/linkedIn.svg'} alt='linkedIn' width={20} height={20} />
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}

export default SecondPart