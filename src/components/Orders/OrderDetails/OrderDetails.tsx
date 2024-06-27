"use client"
import { useState } from 'react'
import CustomTabs from '../CustomTabs'
import Details from './Details/Details'
import OrderSlider from './OrderSilder/OrderSlider'
import OrderSummary from './OrderSummary/OrderSummary'

const OrderDetails = () => {
    const [value, setValue] = useState(0)
    return (
        <>
            <CustomTabs value={value} setValue={setValue} />
            <div className="custom-container2 py-10 flex flex-col gap-10">
                <Details />
                <OrderSlider />
                <OrderSummary />
            </div>
        </>
    )
}

export default OrderDetails
