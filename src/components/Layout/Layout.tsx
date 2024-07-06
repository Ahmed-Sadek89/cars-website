"use client"
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import CustomBottomNavigation from '../CustomBottomNavigation/CustomBottomNavigation'

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Navbar />
            <main className='min-h-[calc(100vh-3rem)] mt-[80px]'>{children}</main>
            <Footer />
            <CustomBottomNavigation />
        </>
    )
}

export default Layout