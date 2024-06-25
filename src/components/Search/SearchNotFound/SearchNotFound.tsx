import Image from 'next/image'
import React from 'react'

const SearchNotFound = () => {
  return (
    <div className='custom-container2'>
      <div className='py-10 flex flex-col items-center justify-center text-center relative gap-5'>
        <Image src={'/search/not-found.svg'} alt='not-found' width={300} height={300} className='object-cover' />
        <h2 className='font-bold text-4xl text-custom-black'>This product is not available now</h2>
      </div>
      <div></div>
    </div>
  )
}

export default SearchNotFound