import React from 'react'
import "./Trip.css"
import TripData from './TripData'
import Trip1 from "../../assets/10.jpg"
import Trip2 from "../../assets/11.jpg"
import Trip3 from "../../assets/img.jpg"

function Trip() {
    return (
        <div className='trip'>
            <h1>Recent Trips</h1>
            <p>You can discover unique destinations using google Maps.</p>
            <div className='tripCard'>
                <TripData
                    image={Trip1}
                    heading="Trip in Indonesia"
                    text="At its core, conservation is the careful management and preservation of natural resources and the environment. It's a proactive approach to ensure that the wonders of our natural world - from vast forests to the tiniest insects - are safeguarded for future generations."
                />
                <TripData
                    image={Trip2}
                    heading="Trip in Malaysia"
                    text="At its core, conservation is the careful management and preservation of natural resources and the environment. It's a proactive approach to ensure that the wonders of our natural world - from vast forests to the tiniest insects - are safeguarded for future generations."
                />
                <TripData
                    image={Trip3}
                    heading="Trip in Farance"
                    text="At its core, conservation is the careful management and preservation of natural resources and the environment. It's a proactive approach to ensure that the wonders of our natural world - from vast forests to the tiniest insects - are safeguarded for future generations."
                />
            </div>
        </div>
    )
}

export default Trip