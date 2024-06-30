import FilterAndItems from './FilterAndItems/FilterAndItems'
import ItemTypes from './ItemTypes'
import MainSection from './MainSection'
import ShopBySize from './ShopBySize/ShopBySize'
import TiresTypes from './TiresTypes'

const CategoryName = () => {
    return (
        <>
            <MainSection />
            <ShopBySize />
            <TiresTypes />
            <div className="custom-container1">
                <ItemTypes />
                <FilterAndItems />
            </div>
        </>
    )
}

export default CategoryName
