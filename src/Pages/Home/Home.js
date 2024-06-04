import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import Hero from '../../components/Hero/Hero'
import image1 from '../../assets/12.jpg'
import Destination from '../../components/Destination/Destination'
import Trip from '../../components/Trip/Trip'
import Footer from '../../components/Footer/Footer'

function Home() {
    return (
        <>
            <NavBar />
            <Hero
                cName="hero"
                heroImg={image1}
                title="Your Journey Your Story"
                text="Choose Your Favourite Destination"
                buttonText="Travel Plan"
                url="/"
                btnClass="show"
            />

            <Destination />
            <Trip />
            <Footer />

        </>
    )
}

export default Home;