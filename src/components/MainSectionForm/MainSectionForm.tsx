import React from 'react'
import SelectInput from './SelectInput'
import SearchIcon from '@mui/icons-material/Search';

const MainSectionForm = () => {
    return (
        <section className='custom-container2'>
            <div className=' bg-custom-blue rounded-md shadow-xl pb-6 pt-9 px-8 flex flex-col gap-3'>
                <h6 className='text-white'>FIND PARTS FOR YOUR VEHICLE</h6>
                <div className='bg-white grid grid-cols-4 gap-3 items-center rounded-full p-4'>
                    <SelectInput data={['Toyota Corolla', 'Honda Civic', 'Ford Mustang', 'Chevrolet Camaro', 'Tesla Model S', 'BMW 3 Series', 'Audi A4', 'Mercedes-Benz C-Class', 'Volkswagen Golf', 'Nissan Altima']} />
                    <SelectInput data={Array.from({ length: 2019 - 2007 + 1 }, (_, i) => (2007 + i).toString())} />
                    <SelectInput data={['1-Series', '2-Series', '3-Series', '4-Series']} />
                    <button className='flex flex-row items-center justify-center gap-4 bg-custom-blue text-white rounded-full w-full h-full'>
                        <SearchIcon />
                        <span>search cars</span>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default MainSectionForm