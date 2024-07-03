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
        <div className="custom-container1">
            <div className='w-full flex justify-center items-center overflow-hidden'>

                <div className='w-screen overflow-x-scroll lg:overflow-x-auto overflow-y-hidden'>
                    <Tabs
                        value={value}
                        onChange={(_, index) => setValue(index)}
                        TabIndicatorProps={{
                            sx: {
                                color: "black",
                                backgroundColor: 'black',
                                width: "auto"
                            },
                        }}
                        sx={{
                            '.Mui-selected': {
                                color: "black",
                                borderBottom: '2px solid black',
                            },
                            display: { xs: '-webkit-inline-box', lg: "block" },
                        }}
                    >
                        {
                            tabsAndItems.map((tab) => (
                                <Tab
                                    key={tab.id}
                                    label={tab.tab}
                                    className='text-black flex-1 font-bold text-xs lg:text-lg capitalize'
                                    sx={{
                                        '&.Mui-selected': {
                                            color: 'black',
                                        },
                                        // Make sure each Tab has enough width to cause overflow
                                        minWidth: '120px'
                                    }}
                                />
                            ))
                        }
                    </Tabs>
                </div>
            </div>
        </div>
    )
}

export default CustomTabs