"use client"
import * as React from 'react';
import { Drawer } from '@mui/material';
import Image from 'next/image';
import DrawerLists from './DrawerLists';
import { toggleDrawer } from './toggleDrawer';


export default function CustomDrawer() {
    const [open, setOpen] = React.useState(false);
    return (
        <div>
            <Image src={'/menuIcon.svg'} alt='menu' width={20} height={20} className='cursor-pointer' onClick={toggleDrawer(setOpen)} />
            <Drawer
                anchor={'left'}
                open={open}
                onClose={toggleDrawer(setOpen)}
            >
                <DrawerLists toggleDrawer={toggleDrawer(setOpen)} />
            </Drawer>
        </div>
    );
}
