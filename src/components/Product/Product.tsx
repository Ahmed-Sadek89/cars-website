"use client"
import { useState } from 'react';
import CustomTabs from './CustomTabs'
import Links from './Links';
import { Divider } from '@mui/material';
import ProductDetails from './ProductDetails/ProductDetails';

const Product = () => {
    const [value, setValue] = useState(0);
    return (
        <>
            <CustomTabs value={value} setValue={setValue} />
            <div className="custom-container1 py-10 flex flex-col gap-10">
                <Links />
                <ProductDetails />
            </div>
            <Divider />
            <div>other</div>
        </>
    )
}

export default Product
