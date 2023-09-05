import React from 'react'
import { Navbar } from '../components/Navbar'
import {ContainerInventory} from '../components/ContainerInventory'
import {Footer} from '../components/Footer'

export const ContainersSummary = () => {
    return (
        <>
            <Navbar />
            <ContainerInventory/>
            <Footer/>
        </>
    )
}
