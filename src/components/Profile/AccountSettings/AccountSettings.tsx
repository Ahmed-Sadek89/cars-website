import React from 'react'
import FirstLine from './FirstLine'
import SecondLine from './SecondLine'

const AccountSettings = () => {
    return (
        <div className='hidden lg:flex flex-col gap-20'>
            <FirstLine />
            <SecondLine />
        </div>
    )
}

export default AccountSettings
