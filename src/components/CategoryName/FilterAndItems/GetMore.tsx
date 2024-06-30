import AutorenewIcon from '@mui/icons-material/Autorenew';
import CustomPagination from './CustomPagination';

const GetMore = () => {
    return (
        <div className='flex flex-col gap-5 py-16'>
            <div className='w-full flex items-center justify-center'>
                <button className='flex items-center gap-3 rounded py-2 px-5 border border-custom-black text-custom-black font-bold w-1/4 justify-center'>
                    <AutorenewIcon />
                    <span className='uppercase'>next 30</span>
                </button>
            </div>
            <div className='flex w-full items-center justify-between'>
                <p className='text-custom-blue'>Showing 1-30 of 17638 Products</p>
                <CustomPagination />
            </div>
        </div>
    )
}

export default GetMore
