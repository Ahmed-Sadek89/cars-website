import CarCollections from './CarCollections/CarCollections'
import CarModels from './CarModels'
import MainSection from './MainSection/MainSection'
import Vehicles from './Vehicles'

const Homepage = () => {
    return (
        <>
            <MainSection />
            <Vehicles />
            <CarCollections />
            <CarModels />
            <section>tabs and its items</section>
            <section>advertisments</section>
        </>
    )
}

export default Homepage