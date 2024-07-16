"use client";
import React, { useContext, useState } from 'react';
import SelectInput from './SelectInput';
import SearchIcon from '@mui/icons-material/Search';
import Link from 'next/link';
import { carModels, carSeries, carYear } from '@/mocks/searchInputs';
import { CarContext } from '@/app/context/CarContext';
import './MainSectionForm.css';

const MainSectionForm = ({ setOpen }: { setOpen: React.Dispatch<React.SetStateAction<boolean>> | null }) => {
    const [carModelValue, setCarModelValue] = useState(carModels[0]);
    const [carYearValue, setCarYearValue] = useState(carYear[0]);
    const [carSeriesValue, setCarSeriesValue] = useState(carSeries[0]);

    const carContext = useContext(CarContext);

    const handleSearchCar = () => {
        setOpen ? setOpen(false) : null;
        const selectedCar = {
            id: Math.random(),
            name: carModelValue,
            year: carYearValue,
            series: carSeriesValue
        };
        carContext?.addCar(selectedCar);
    };

    return (
        <section className="main-section-form">
            <div className="form-container">
                <h6>FIND PARTS FOR YOUR VEHICLE</h6>
                <div className="input-container input-container-lg">
                    <SelectInput data={carModels} value={carModelValue} setValue={setCarModelValue} />
                    <div className="select-input-container">
                        <SelectInput data={carYear} value={carYearValue} setValue={setCarYearValue} />
                        <SelectInput data={carSeries} value={carSeriesValue} setValue={setCarSeriesValue} />
                    </div>
                    <Link
                        href={`/search?car_model=${carModelValue}&car_year=${carYearValue}&car_series=${carSeriesValue}`}
                        className="search-link"
                        onClick={handleSearchCar}
                    >
                        <SearchIcon />
                        <span>search cars</span>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default MainSectionForm;
