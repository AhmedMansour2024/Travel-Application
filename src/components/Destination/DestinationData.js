import React from 'react'
import './Destination.css'

function DestinationData(props) {
    return (
        <div className={props.className}>
            <div className='des-text'>
                <h2>{props.heading}</h2>
                <p>{props.text}</p>
            </div>
            <div className='image'>
                <img alt='img' src={props.Img1} />
                <img alt='img' src={props.Img2} />
            </div>
        </div>
    )
}

export default DestinationData