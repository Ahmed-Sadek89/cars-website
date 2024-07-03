"use client"
import { usePathname } from 'next/navigation';
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import Link from 'next/link';

const CustomBottomNavigation = () => {
    const pathname = usePathname();
    const checkActiveRoute = (currentPath: string) => {
        if (pathname === currentPath) {
            return "text-5xl p-2 rounded-full text-white bg-custom-blue mb-5"
        }
        return "text-black text-3xl bg-transparent"
    }
    return (
        <Paper className='fixed bottom-0 left-0 right-0 block md:hidden border-t border-t-custom-blue ' elevation={3}>
            <BottomNavigation className=' bg-[#F4F4F4]'>
                <Link
                    className={`${pathname === '/' ? "bg-[url('/bottom-navigation-overlay.svg')]" : ""} h-full w-full  bg-no-repeat bg-center bg-cover flex items-center justify-center pt-5 pb-10`}
                    href={'/'}
                >
                    <BottomNavigationAction showLabel={false} icon={
                        <HomeOutlinedIcon
                            className={`${checkActiveRoute('/')}`}
                        />
                    } />
                </Link>
                <Link
                    className={`w-full h-full flex items-center justify-center pt-5 pb-10`}
                    href={'#'}
                >
                    <BottomNavigationAction showLabel={false} icon={
                        <GridViewOutlinedIcon
                            className={`text-black text-3xl bg-transparent`}
                        />}
                    />
                </Link>
                <Link
                    className={`${pathname === '/cart' ? "bg-[url('/bottom-navigation-overlay.svg')]" : ""} h-full w-full  bg-no-repeat bg-center bg-cover flex items-center justify-center pt-5 pb-10`}
                    href={'/cart'}
                >
                    <BottomNavigationAction showLabel={false} icon={
                        <LocalGroceryStoreOutlinedIcon className={`${checkActiveRoute('/cart')}`} />
                    } />
                </Link>
                <Link
                    className={`${pathname === '/profile' ? "bg-[url('/bottom-navigation-overlay.svg')]" : ""} h-full w-full  bg-no-repeat bg-center bg-cover flex items-center justify-center pt-5 pb-10`}
                    href={'/profile'}
                >
                    <BottomNavigationAction showLabel={false} icon={
                        <PersonOutlineOutlinedIcon className={`${checkActiveRoute('/profile')}`} />
                    } />
                </Link>
            </BottomNavigation>
        </Paper >
    )
}

export default CustomBottomNavigation;
