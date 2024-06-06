import React from 'react'
import FirstPart from './components/FirstPart'
import SecondPart from './components/SecondPart'
import ThirdPart from './components/ThirdPart'
import { Divider } from '@mui/material'

const Footer = () => {
  return (
    <footer className='bg-custom-black text-white'>
      <FirstPart />
      <Divider className='bg-gray-600'/>
      <SecondPart />
      <Divider className='bg-white'/>
      <ThirdPart />
    </footer>
  )
}

export default Footer