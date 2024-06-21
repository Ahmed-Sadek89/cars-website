import { Metadata } from 'next'
import MainSection from './MainSection/MainSection'

export const metadata: Metadata = {
    title: 'Auto Parts | Homepage',
    description: 'Generated for Auto Parts',
}

const Homepage = () => {
    return (
        <>
            <MainSection />
            <section>Vehicles types</section>
            <section>offers</section>
            <section>car model animation</section>
            <section>tabs and its items</section>
            <section>advertisments</section>
        </>
    )
}

export default Homepage