"use client"
import React from 'react';
import {  ListItem, ListItemButton } from '@mui/material'
import Image from 'next/image'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { drawerItems } from '@/mocks/drawerItems';
import Link from 'next/link';


const DrawerDepartmentList = ({ toggleDrawer }: { toggleDrawer: (event: React.KeyboardEvent | React.MouseEvent) => void }) => {
    return (
        <div className='mb-10'>
            <ListItem>
                <h3 className='capitalize text-custom-black font-bold text-xl mb-5'>Departments</h3>
            </ListItem>
            {drawerItems.map((link, index) => (
                <ListItem key={index} disablePadding className='mb-3'>
                    <Link href={"#"} className='w-full' onClick={toggleDrawer}>
                        <ListItemButton className='flex flex-row items-center justify-between w-full'>
                            <div className='flex flex-row items-center gap-3'>
                                <Image src={link.image} alt={link.title} width={40} height={40} className='object-contain' />
                                <h4 className='text-custom-black' >{link.title}</h4>
                            </div>
                            <KeyboardArrowRightIcon className='text-[#5C5C5C]' />
                        </ListItemButton>
                    </Link>
                </ListItem>
            ))}
        </div>
    )
}

export default DrawerDepartmentList