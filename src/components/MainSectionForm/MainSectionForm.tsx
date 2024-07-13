"use client"
import React, { useContext, useState } from 'react'
import SelectInput from './SelectInput'
import SearchIcon from '@mui/icons-material/Search';
import Link from 'next/link';
import { carModels, carSeries, carYear } from '@/mocks/searchInputs';
import { CarContext } from '@/app/context/CarContext';

const MainSectionForm = ({ setOpen }: {
    setOpen: React.Dispatch<React.SetStateAction<boolean>> | null
}) => {
    const [carModelValue, setCarModelValue] = useState(carModels[0]);
    const [carYearValue, setCarYearValue] = useState(carYear[0]);
    const [carSeriesValue, setCarSeriesValue] = useState(carSeries[0]);

    const carContext = useContext(CarContext);

    const handleSearchCar = () => {
        setOpen ? setOpen(false) : null
        const selectedCar = {
            id: Math.random(),
            name: carModelValue,
            year: carYearValue,
            series: carSeriesValue
        }
        carContext?.addCar(selectedCar)
    }
    return (
        <section className='custom-container2'>
            <div className=' bg-custom-blue rounded-md shadow-xl pb-6 pt-9 px-8 flex flex-col gap-3'>
                <h6 className='text-white'>FIND PARTS FOR YOUR VEHICLE</h6>
                <div className='bg-transparent lg:bg-white grid grid-cols-1 lg:grid-cols-4 gap-x-0 lg:gap-x-3 items-center rounded-full p-1 lg:p-4'>
                    <SelectInput data={carModels} value={carModelValue} setValue={setCarModelValue} />
                    <div className='col-span-2 grid grid-cols-2 items-center gap-x-4 lg:gap-0 my-2 lg:my-0'>
                        <SelectInput data={carYear} value={carYearValue} setValue={setCarYearValue} />
                        <SelectInput data={carSeries} value={carSeriesValue} setValue={setCarSeriesValue} />
                    </div>
                    <Link
                        href={`/search?car_model=${carModelValue}&car_year=${carYearValue}&car_series=${carSeriesValue}`}
                        className='flex flex-row items-center justify-center gap-4 bg-[#001783] lg:bg-custom-blue text-white rounded-full w-full h-full py-4 lg:py-0'
                        onClick={handleSearchCar}
                    >
                        <SearchIcon />
                        <span className='capitalize'>search cars</span>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default MainSectionForm