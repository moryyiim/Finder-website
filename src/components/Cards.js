import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
import image1 from '../assets/images/img-10.jpg'
import image2 from '../assets/images/img-11.jpg'
import image3 from '../assets/images/img-19.jpg'
import image4 from '../assets/images/img-20.jpg'
import image5 from '../assets/images/img-14.jpg'




function Cards() {
    return (
        <div className='container'>
            <h1>Check out these EPIC Destinations</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src={image1}
                            text="Explore the stairway to heaven"
                            label="Adventure"
                            path="/location1"
                        />
                        <CardItem
                            src={image2}
                            text="Witness the wonder of the northern lights"
                            label="Mystery"
                            path="/location2"
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                            src={image3}
                            text="Take in the breathtaking views at Moraine Lake"
                            label="Luxury"
                            path="/location3"
                        />
                        <CardItem
                            src={image4}
                            text="Experience the rich culture of Japan"
                            label="Luxury"
                            path="/location4"
                        />
                        <CardItem
                            src={image5}
                            text="Camp at the national wonder of Yosemite"
                            label="Adrenaline"
                            path="/location5"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
