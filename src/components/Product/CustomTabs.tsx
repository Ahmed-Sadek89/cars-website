"use client"
import React from 'react'
import { Tab, Tabs } from '@mui/material';
import { tabsAndItems } from '@/mocks/tabsAndItems'

type props = {
    value: number,
    setValue: React.Dispatch<React.SetStateAction<number>>
}
const CustomTabs = ({ value, setValue }: props) => {
    return (
        <Tabs
            value={value}
            onChange={(_, index) => setValue(index)}
            TabIndicatorProps={{
                sx: {
                    color: "black",
                    backgroundColor: 'black',
                },
            }}
            sx={{
                '.Mui-selected': {
                    color: "black",
                    borderBottom: '2px solid black',
                },
            }}
        >
            {
                tabsAndItems.map((tab) => (
                    <Tab key={tab.id} label={tab.tab} className='text-black flex-1 font-bold text-lg capitalize' sx={{
                        '&.Mui-selected': {
                            color: 'black',
                        },
                    }} />
                ))
            }
        </Tabs>
    )
}

export default CustomTabs