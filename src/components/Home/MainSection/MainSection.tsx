import React from 'react'
import MainSectionForm from '../../MainSectionForm/MainSectionForm'
import MainSectionSlider from './MainSectionSlider'

const MainSection = () => {
    return (
        <main className='relative w-full mb-52'>
            <MainSectionSlider />
            <section className='absolute w-full bottom-[-160px] flex items-center justify-center'>
                <MainSectionForm />
            </section>
        </main>
    )
}

export default MainSection