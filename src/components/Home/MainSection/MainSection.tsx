"use client"
import React, { useContext, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import MainSectionSlider from './MainSectionSlider'
import SelectInput from '@/components/MainSectionForm/SelectInput'
import Link from 'next/link'
import { carModels, carSeries, carYear } from '@/mocks/searchInputs'
import { CarContext } from '@/app/context/CarContext'

const MainSection = () => {
    const [carModelValue, setCarModelValue] = useState(carModels[0]);
    const [carYearValue, setCarYearValue] = useState(carYear[0]);
    const [carSeriesValue, setCarSeriesValue] = useState(carSeries[0]);

    const carContext = useContext(CarContext);

    const handleSearchCar = () => {
        const selectedCar = {
            id: Math.random(),
            name: carModelValue,
            year: carYearValue,
            series: carSeriesValue
        }
        carContext?.addCar(selectedCar)
    }
    return (
        <main className='relative w-full mb-10 lg:mb-52 flex flex-col gap-5'>
            <MainSectionSlider />
            <section className='relative lg:absolute w-full h-full lg:h-auto bottom-0 lg:bottom-[-160px] flex items-center justify-center'>
                <div className=' bg-custom-blue rounded-md shadow-xl pb-6 pt-9 px-8 flex flex-col overflow-hidden h-full gap-[10px]'>
                    <h6 className='text-white'>FIND PARTS FOR YOUR VEHICLE</h6>
                    <div
                        className='bg-transparent lg:bg-white grid grid-cols-1 lg:grid-cols-4  items-center rounded-full p-1 lg:p-4 gap-1'
                    >
                        <SelectInput data={carModels} value={carModelValue} setValue={setCarModelValue} />
                        <div className='col-span-2 grid grid-cols-2 items-center'>
                            <SelectInput data={carYear} value={carYearValue} setValue={setCarYearValue} />
                            <SelectInput data={carSeries} value={carSeriesValue} setValue={setCarSeriesValue} />
                        </div>
                        <Link
                            href={`/search?car_model=${carModelValue}&car_year=${carYearValue}&car_series=${carSeriesValue}`}
                            className='flex flex-row items-center justify-center bg-[#001783] lg:bg-custom-blue text-white rounded-full w-full h-full '
                            onClick={handleSearchCar}
                        >
                            <SearchIcon />
                            <span className='capitalize'>search cars</span>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default MainSection