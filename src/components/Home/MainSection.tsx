import Link from 'next/link'
import React from 'react'
import MainSectionForm from './MainSectionForm'

const MainSection = () => {
    return (
        <main className='relative w-full mb-10'>
            <section className="bg-[url('/home/main-background1.jpg')] min-h-screen bg-no-repeat bg-cover bg-center" >
                <div className='bg-[#00000066] w-full  min-h-screen flex items-center justify-center py-20 '>
                    <div className='w-1/2  flex flex-col gap-10 items-center justify-center text-center text-white'>
                        <h1 className='text-7xl font-bold'>Welcome</h1>
                        <h2 className='text-5xl font-semibold'>
                            <span className='text-custom-blue'>Get All Brands Of Auto Parts</span><span> Of Cars </span>
                        </h2>
                        <h3 className='text-4xl font-semibold'>
                            The Best Car Rebair Service
                        </h3>
                        <h4 className='text-lg font-semibold'>
                            Discover with us the types of spare parts you need for your type of car easily.
                            We have many types that you can see here
                        </h4>
                        <Link href={'#'} className='rounded-2xl bg-custom-blue text-white px-16 py-5'>Book Now</Link>
                    </div>
                </div>
            </section>
            <section className='absolute w-full bottom-[-50px] flex items-center justify-center'>
                <MainSectionForm />
            </section>
        </main>
    )
}

export default MainSection