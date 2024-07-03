"use client"
import React, { useState } from 'react'
import CustomTabs from './CustomTabs'
import { Divider } from '@mui/material'
import ProfileTabsAndOrders from './ProfileTabs/ProfileTabsAndOrders'
import OrderConfig from './OrderConfig/OrderConfig'
import AccountSettings from './AccountSettings/AccountSettings'
import Viewed from './Viewed/Viewed'

const Profile = () => {
    const [value, setValue] = useState(0)
    return (
        <>
            <CustomTabs value={value} setValue={setValue} />
            <Divider />
            <div className='pt-20 pb-10 flex flex-col gap-10'>
                <div className='custom-container1'>
                    <ProfileTabsAndOrders />
                </div>
                <Divider />
                <div className='custom-container2'>
                    <OrderConfig />
                </div>
                <Divider />
                <div className='custom-container2'>
                    <AccountSettings />
                </div>
                <Divider />
                <div className='custom-container2'>
                    <Viewed />
                </div>
            </div>
        </>
    )
}

export default Profile
