import { tabsAndItems } from '@/mocks/tabsAndItems';
import Image from 'next/image'
import React from 'react'


interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number | string;
}

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index } = props;
    return (
        <div role="tabpanel" hidden={value !== index} className='custom-container1'>
            {
                value === index && children
            }
        </div>
    );
}


const CustomItemsContainer = ({ value }: { value: number }) => {
    return (
        <CustomTabPanel value={value} index={tabsAndItems[value].id - 1}>
            <div className='grid grid-cols-5 gap-10 items-center'>
                {tabsAndItems[value].item.map((item, index) => (
                    <div key={index} className='w-full h-full flex flex-col items-center justify-around cursor-pointer'>
                        <div className='h-[250px] flex'>
                            <Image src={item.image} alt={item.title} width={200} height={200} className='object-contain' />
                        </div>
                        <h6 className='font-bold'>{item.title}</h6>
                    </div>
                ))}
            </div>
        </CustomTabPanel>
    )
}

export default CustomItemsContainer