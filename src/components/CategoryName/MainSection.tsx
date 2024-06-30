import React from 'react'
import MainSectionForm from '../MainSectionForm/MainSectionForm'

const MainSection = () => {
    return (
        <section className="bg-[url('/category_name/main-bg.png')] bg-cover bg-no-repeat bg-center w-full h-[70vh] relative mb-52">
            <section className='absolute w-full bottom-[-160px] flex items-center justify-center'>
                <MainSectionForm setOpen={null} />
            </section>
        </section>
    )
}

export default MainSection
