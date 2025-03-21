import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Items = ({ gridColsNumber }: { gridColsNumber: number }) => {
    return (
        <div className={`hidden lg:grid grid-cols-${gridColsNumber} items-center gap-5`}>
            {
                new Array(12).fill(1).map((_, index) => (
                    <div key={index} className={`overflow-hidden rounded border border-custom-black flex ${gridColsNumber === 3 ? "flex-col p-0" : "flex-row p-4 gap-3"} items-center`}>
                        <div className={`${gridColsNumber === 3 ? "h-[40vh] bg-[#F3F3F3] w-full flex" : "h-auto bg-transparent block"} items-center justify-center`}>
                            <Image src={'/category_name/i2.png'} alt='item' width={200} height={200} className='object-contain h-[200px] w-[200px]' />
                        </div>
                        <div className={`${gridColsNumber === 3 ? "w-full p-5" : "w-[55%] p-0"} text-custom-black`}>
                            <h2 className='font-bold flex flex-col '>
                                <span>IRONMAN®</span>
                                <span>IMOVE GEN2 AS</span>
                            </h2>
                            <div className='flex items-center gap-5 my-2'>
                                <Image src={'/category_name/five.svg'} alt='five' width={100} height={100} />
                                <span className='text-sm text-[#A4A4A4]'>5 #8030098</span>
                            </div>
                            {
                                gridColsNumber === 1 &&
                                <>
                                    <p className='text-[#525252] text-sm my-2'>
                                        IMOVE GEN2 AS Tires by IRONMAN®. Season: All Season. Type: Fuel Efficient. From overall handling to enhanced traction, the iMove Gen2 tires boast multiple intelligent design features that deliver dynamic highway performance and can...
                                    </p>
                                    <ul className='list-disc pl-5 text-[#525252] text-sm'>
                                        <li>Built to deliver an optimal balance of quality and aesthetics more details on</li>
                                        <li>M+S rating ensures all-season performance and a peace-of-mind more details</li>
                                    </ul>
                                </>
                            }
                            {
                                gridColsNumber === 3 &&
                                <>
                                    <h6 className='font-bold'>$165.09 - $276 .29</h6>
                                    <p className='text-[#A4A4A4] line-through'>$165.09 - $276 .29</p>
                                </>
                            }
                        </div>
                        <div className='flex flex-col gap-1 justify-end items-end my-5'>
                            {
                                gridColsNumber === 1 &&
                                <>
                                    <h4 className='text-custom-gray'>$ 124.00 - $ 148.00 each</h4>
                                    <h5><span className='text-custom-green font-bold text-4xl'>.</span> <span className='text-sm'> In Stock ( 12425 )</span></h5>
                                </>
                            }
                            <Link
                                href={`/product/${index + 1}`}
                                className='text-custom-black border rounded border-custom-black py-2 px-6 transition duration-300 hover:text-white hover:bg-custom-blue hover:border-custom-blue'
                            >
                                View Details</Link>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Items
