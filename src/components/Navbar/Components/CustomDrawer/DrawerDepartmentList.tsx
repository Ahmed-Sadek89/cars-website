"use client"
import React from 'react';
import { Divider, ListItem } from '@mui/material'
import { drawerItems } from '@/mocks/drawerItems';
import { drawerContact } from '@/mocks/drawerConatct';
import { drawerUserInfo } from '@/mocks/drawerUserInfo';
import DrawerAccordionList from './DrawerAccordionList';
import DrawerUserInfoList from './DrawerUserInfoList';
import DrawerContactList from './DrawerContactList';

const DrawerDepartmentList = ({ toggleDrawer }: { toggleDrawer: (event: React.KeyboardEvent | React.MouseEvent) => void }) => {
    const [expanded, setExpanded] = React.useState<string | false>(false);

    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false);
        };
    return (
        <div className='mb-10'>
            <ListItem>
                <h3 className='capitalize text-custom-black font-bold text-xl mb-5'>Departments</h3>
            </ListItem>
            {
                drawerItems.map((link, index) => (
                    <DrawerAccordionList expanded={expanded} handleChange={handleChange} key={index} index={index} link={link} toggleDrawer={toggleDrawer} />
                ))
            }
            <Divider className='my-10' />
            {
                drawerUserInfo.map((link, index) => (<DrawerUserInfoList key={index} link={link} toggleDrawer={toggleDrawer} />))
            }
            <Divider className='mb-10' />
            {
                drawerContact.map((link, index) => (<DrawerContactList key={index} link={link} toggleDrawer={toggleDrawer} />))
            }
        </div>
    )
}

export default DrawerDepartmentList