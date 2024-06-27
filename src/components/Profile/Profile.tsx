"use client"
import React, { useState } from 'react'
import CustomTabs from './CustomTabs'
import { Divider } from '@mui/material'
import ProfileTabs from './ProfileTabs/ProfileTabs'
import OrderConfig from './OrderConfig/OrderConfig'
import AccountSettings from './AccountSettings/AccountSettings'
import Viewed from './Viewed/Viewed'

const Profile = () => {
    const [value, setValue] = useState(0)
    return (
        <>
            <CustomTabs value={value} setValue={setValue} />
            <div className='pt-20 pb-10 flex flex-col gap-10'>
                <div className='custom-container1'>
                    <ProfileTabs />
                </div>
                <Divider />
                <div className='custom-container1'>
                    <OrderConfig />
                </div>
                <Divider />
                <div className='custom-container1'>
                    <AccountSettings />
                </div>
                <Divider />
                <div className='custom-container1'>
                    <Viewed />
                </div>
            </div>
        </>
    )
}

export default Profile
