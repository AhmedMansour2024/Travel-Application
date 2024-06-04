import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import Hero from '../../components/Hero/Hero'
import serviceImg from "../../assets/1.jpg"
import Footer from '../../components/Footer/Footer'
import Trip from '../../components/Trip/Trip'

function Service() {
    return (
        <>
            <NavBar />
            <Hero
                cName="hero-mid"
                heroImg={serviceImg}
                title="Service"
                btnClass="hide"
            />
            <Trip />
            <Footer />

        </>
    )
}

export default Service