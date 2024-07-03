"use client"
import { Divider } from '@mui/material'
import CustomTabs from './CustomTabs'
import FilterAndItems from './FilterAndItems/FilterAndItems'
import ItemTypes from './ItemTypes'
import MainSection from './MainSection'
import ShopBySize from './ShopBySize/ShopBySize'
import TiresTypes from './TiresTypes'
import { useState } from 'react'

const CategoryName = () => {
    const [value, setValue] = useState(0)
    return (
        <>
            <CustomTabs value={value} setValue={setValue} />
            <Divider className='mb-5'/>
            <MainSection />
            <ShopBySize />
            <TiresTypes />
            <div className="custom-container1">
                <ItemTypes />
                <FilterAndItems />
            </div>
        </>
    )
}

export default CategoryName
