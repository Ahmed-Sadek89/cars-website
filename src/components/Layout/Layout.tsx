"use client"
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import CustomBottomNavigation from '../CustomBottomNavigation/CustomBottomNavigation'

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <Navbar />
            <main className='min-h-[calc(100vh-3rem)]'>{children}</main>
            <Footer />
            <CustomBottomNavigation />
        </div>
    )
}

export default Layout