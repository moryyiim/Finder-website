import React from 'react'
import video1 from '../../assets/videos/video-9.mp4'
import './Trailer.css'

function Trailer() {
    return (
        <div className="video-container">
            <video autoPlay loop >
                <source src={video1} type="video/mp4"/>
            </video>
        </div>
    )
}

export default Trailer
