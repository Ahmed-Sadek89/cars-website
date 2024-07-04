import FirstLine from './FirstLine';
import SecondLine from './SecondLine';

const Details = () => {
    return (
        <div className='rounded py-10 px-5 w-full bg-white lg:bg-[#E8E8E8] flex flex-col gap-5'>
            <FirstLine />
            <SecondLine />
            <div className='flex lg:hidden items-start'>
                <button className='w-auto p-2 text-center bg-custom-blue text-white rounded-lg text-lg font-bold'>
                    Add Notes
                </button>
            </div>
        </div>
    )
}

export default Details
