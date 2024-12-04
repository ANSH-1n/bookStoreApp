import React from 'react'
import NavBar from '../Components/NavBar.jsx'
import Banner from "../Components/Banner.jsx";
import Freebook from "../Components/Freebook.jsx";
import Footer from  "../Components/Footer.jsx"

export default function Home() {
    return (
        <>
            <NavBar />
            <Banner />
            <Freebook />
            <Footer />
        </>
    )
}
