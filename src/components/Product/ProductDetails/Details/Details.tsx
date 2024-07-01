import FirstSection from './FirstSection';
import SecondSection from './SecondSection';
import ThirdSection from './ThirdSection';

const Details = () => {
    return (
        <div className='col-span-2 flex flex-col gap-16 justify-center'>
            <FirstSection />
            <SecondSection />
            <ThirdSection />
        </div>
    )
}

export default Details
