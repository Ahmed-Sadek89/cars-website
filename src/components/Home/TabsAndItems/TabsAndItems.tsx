"use client"
import { Divider } from '@mui/material';
import { useState } from 'react';
import CustomTabs from './CustomTabs';
import CustomItemsContainer from './CustomItemsContainer';

export default function TabsAndItems() {
    const [value, setValue] = useState(0);
    return (
        <section className='py-10 flex flex-col gap-10'>
            <div className='custom-container1 '>
                <CustomTabs value={value} setValue={setValue} />
            </div>
            <Divider />
            <CustomItemsContainer value={value} />
        </section>
    );
}
