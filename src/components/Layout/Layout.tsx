"use client"
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import CustomBottomNavigation from '../CustomBottomNavigation/CustomBottomNavigation'
import CarContextProvider from '@/app/context/CarContext'

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <CarContextProvider>
            <Navbar />
            <main className='min-h-[calc(100vh-3rem)]'>{children}</main>
            <Footer />
            <CustomBottomNavigation />
        </CarContextProvider>
    )
}

export default Layout