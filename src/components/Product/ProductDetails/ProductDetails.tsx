"use client"
import { productImage } from '@/mocks/productImage'
import Image from 'next/image'
import { useState } from 'react'
import Details from './Details/Details';

const ProductDetails = () => {
    const [selectedImage, setSelectedImage] = useState(0)
    return (
        <section className='grid grid-cols-5 items-start gap-10'>
            <div className='col-span-2 w-full grid grid-cols-2 items-center gap-5'>
                {
                    productImage.map((item, index) => (
                        <div
                            key={index}
                            className={`border-2 ${selectedImage === index ? "border-custom-blue" : "border-transparent"} cursor-pointer flex items-center justify-center`}
                            onClick={() => setSelectedImage(index)}
                        >
                            <Image src={item} alt={item} width={200} height={200} className='object-cover w-full h-[200px]' />
                        </div>
                    ))
                }
            </div>
            <div className='relative'>
                <Image src={productImage[selectedImage]} alt={'main'} width={400} height={400} className='object-contain w-full' />
            </div>
            <Details />
        </section>
    )
}

export default ProductDetails
