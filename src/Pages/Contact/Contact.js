import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import Hero from '../../components/Hero/Hero'
import contactImg from "../../assets/2.jpg"
import Footer from '../../components/Footer/Footer'
import ContactForm from '../../components/ContactForm/ContactForm'

function Contact() {
    return (
        <>
            <NavBar />
            <Hero
                cName="hero-mid"
                heroImg={contactImg}
                title="Contact"
                btnClass="hide"
            />

            <ContactForm />
            <Footer />

        </>
    )
}

export default Contact