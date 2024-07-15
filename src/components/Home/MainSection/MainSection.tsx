import React from 'react'
import MainSectionForm from '../../MainSectionForm/MainSectionForm'
import MainSectionSlider from './MainSectionSlider'

const MainSection = () => {
    return (
        <main className='relative w-full mb-10 lg:mb-52 flex flex-col gap-5'>
            <MainSectionSlider />
            <section className='relative lg:absolute w-full h-full lg:h-auto bottom-0 lg:bottom-[-160px] flex items-center justify-center'>
                <MainSectionForm setOpen={null}/>
            </section>
        </main>
    )
}

export default MainSection