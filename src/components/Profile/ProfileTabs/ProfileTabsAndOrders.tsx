import React from 'react'
import ProfileTabs from './ProfileTabs'
import ConfirmedOrders from './ConfirmedOrders'

const ProfileTabsAndOrders = () => {
  return (
    <div className='grid grid-cols-3 items-start gap-5'>
      <ProfileTabs />
      <ConfirmedOrders />
    </div>
  )
}

export default ProfileTabsAndOrders