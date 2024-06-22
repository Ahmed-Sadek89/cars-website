import CarCollections from './CarCollections/CarCollections'
import CarModels from './CarModels'
import MainSection from './MainSection/MainSection'
import TabsAndItems from './TabsAndItems/TabsAndItems'
import Vehicles from './Vehicles'

const Homepage = () => {
    return (
        <>
            <MainSection />
            <Vehicles />
            <CarCollections />
            <CarModels />
            <TabsAndItems />
            <section>advertisments</section>
        </>
    )
}

export default Homepage