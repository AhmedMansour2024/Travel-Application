import React from 'react'
import './Destination.css'
import Mountain1 from '../../assets/3.jpg'
import Mountain2 from '../../assets/4.jpg'
import Mountain3 from '../../assets/5.jpg'
import Mountain4 from '../../assets/6.jpg'
import DestinationData from './DestinationData'

function Destination() {
    return (
        <div className='destination'>
            <h1>Popular Destination</h1>
            <p>Tours give you the apportunity to see a lot within a time frame</p>

            <DestinationData
                className="first-des"
                heading="Taal Volcano, Batangas"
                text="Paragraphs can contain many different kinds of information. A paragraph could contain a series of brief examples or a single long illustration of a general point. It might describe a place, character, or process; narrate a series of events; compare or contrast two or more things; classify items into categories; or describe causes and effects. Regardless of the kind of information they contain, all paragraphs share certain characteristics. One of the most important of these is a topic sentence."
                Img1={Mountain1}
                Img2={Mountain2}
            />
            <DestinationData
                className="first-des-reverse"
                heading="Taal Volcano, Batangas"
                text="Paragraphs can contain many different kinds of information. A paragraph could contain a series of brief examples or a single long illustration of a general point. It might describe a place, character, or process; narrate a series of events; compare or contrast two or more things; classify items into categories; or describe causes and effects. Regardless of the kind of information they contain, all paragraphs share certain characteristics. One of the most important of these is a topic sentence."
                Img1={Mountain3}
                Img2={Mountain4}
            />
        </div>
    )
}

export default Destination