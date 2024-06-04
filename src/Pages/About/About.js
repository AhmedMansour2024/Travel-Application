import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import Hero from '../../components/Hero/Hero'
import aboutImage from '../../assets/night.jpg'
import Footer from '../../components/Footer/Footer'
import AboutUs from '../../components/AboutUs/AboutUs'

function About() {
    return (
        <>
            <NavBar />
            <Hero
                cName="hero-mid"
                heroImg={aboutImage}
                title="About"
                btnClass="hide"
            />
            <AboutUs />
            <Footer />

        </>
    )
}

export default About