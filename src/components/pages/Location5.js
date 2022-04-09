import React from 'react'
import CardItem from '../CardItem'
import './Location.css'
import image1 from '../../assets/images/img-14.jpg'
import Checkout from '../Checkout'


function Location5() {
    return (
        <div className='card__image'>
            <div className="cards__box">
                <div className="cards__subbox">
                    <ul className="cards__things">
                        <CardItem
                            src={image1}
                            text="Camp at the national wonder of Yosemite"
                            label="Adrenaline"
                            path="/location5"
                        />
                    </ul>
                    <div className="description__background">
                    <ul className="cards__things">
                        <h1>Toulumne County, California</h1>
                        <div className="description">
                            An icon of America's majestic natural beauty, California's Yosemite
                            National Park welcome millions of visitors each year. Drawn to it's 
                            dramatic waterfalls, giant sequoias, abudnant wildlife, and awe-inspiring
                            cliffs, like Half Dome and El Capitan. Whether you're looking for the adventure
                            vacation of a lifetime, want to immerse yourself in the stillness of nature
                            or simply hike, backpack or ski in one of the most beautiful places on earth,
                            you'll find your place in Yosemite. So what are you waiting for? Book your travel
                            with us to make sure you get the lowest rates that can't be 
                            beat!
                        </div>
                    </ul>
                        <Checkout />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Location5
