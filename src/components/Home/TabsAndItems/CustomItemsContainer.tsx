import { tabsAndItems } from '@/mocks/tabsAndItems';
import Image from 'next/image'
import React from 'react'
import CustomTabPanel from './CustomTabPanel';
import Link from 'next/link';

const CustomItemsContainer = ({ value }: { value: number }) => {
    return (
        <CustomTabPanel value={value} index={tabsAndItems[value].id - 1}>
            <div className='grid grid-cols-5 gap-10 items-center'>
                {tabsAndItems[value].item.map((item, index) => (
                    <Link href={"#"} key={index} className='w-full h-full flex flex-col items-center justify-around '>
                        <div className='h-[200px] flex'>
                            <Image src={item.image} alt={item.title} width={150} height={150} className='object-contain' />
                        </div>
                        <h6 className='font-bold'>{item.title}</h6>
                    </Link>
                ))}
            </div>
        </CustomTabPanel>
    )
}

export default CustomItemsContainer