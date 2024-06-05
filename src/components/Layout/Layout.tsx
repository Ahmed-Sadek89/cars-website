"use client"
import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Navbar />
            <main className='min-h-[calc(100vh-3rem)]'>{children}</main>
            <Footer />
        </>
    )
}

export default Layout