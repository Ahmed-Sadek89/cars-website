import React from 'react'
import FirstLine from './FirstLine'
import SecondLine from './SecondLine'

const OrderConfig = () => {
    return (
        <div className='w-3/4 flex flex-col gap-10'>
            <FirstLine />
            <SecondLine />
        </div>
    )
}

export default OrderConfig
