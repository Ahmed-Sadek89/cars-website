import React from 'react'
import ProfileTabs from './ProfileTabs'

const ProfileTabsAndOrders = () => {
  return (
    <div className='grid grid-cols-3 items-start gap-5'>
      <ProfileTabs />
      <div
        className='py-5 col-span-2 px-10 border border-[#A4A4A4] rounded'
        style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
      >confirmed orders</div>
    </div>
  )
}

export default ProfileTabsAndOrders