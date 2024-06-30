"use client"
import { memo, useCallback, useState } from 'react';
import GridOptionsAndResults from './GridOptionsAndResults';
import Filters from './Filters/Filters';

const FilterAndItems = () => {
    const [gridColsNumber, setGridColsNumber] = useState(1);
    const handleSetGridColsNumber = useCallback((cols: number) => {
        setGridColsNumber(cols);
    }, []);
    return (
        <section className='flex flex-col gap-2 mb-10'>
            <GridOptionsAndResults setGridColsNumber={handleSetGridColsNumber} />
            <div className='grid grid-cols-4 items-start gap-10'>
                <Filters />
                <div className='col-span-3'>
                    <div>
                        items
                    </div>
                    <div>additional items</div>
                </div>
            </div>
        </section>
    )
}

export default memo(FilterAndItems)
