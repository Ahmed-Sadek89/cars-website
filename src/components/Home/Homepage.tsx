import VehicleSelectionBtn from '../Navbar/Components/VehicleSelectionBtn'
import Advertisments from './Advertisments/Advertisments'
import CarCollections from './CarCollections/CarCollections'
import CarModels from './CarModels'
import MainSection from './MainSection/MainSection'
import TabsAndItems from './TabsAndItems/TabsAndItems'
import Vehicles from './Vehicles'

const Homepage = () => {
    return (
        <>
            <div className="custom-container1 pb-5 block md:hidden">
                <VehicleSelectionBtn />
            </div>
            <MainSection />
            <Vehicles />
            <CarCollections />
            <CarModels />
            <TabsAndItems />
            <Advertisments />
        </>
    )
}

export default Homepage