import React from 'react'
import { Navbar } from './Navbar'
import { Login } from './Login'
import { Footer } from './Footer'

export const Home = () => {
    return (
        <>
            <Navbar />
            <Login />
            <Footer/>
        </>
    )
}
