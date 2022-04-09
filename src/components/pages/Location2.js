import React from 'react'
import CardItem from '../CardItem'
import './Location.css'
import image1 from '../../assets/images/img-11.jpg'
import Checkout from '../Checkout'


function Location2() {
    return (
        <div className='card__image'>
            <div className="cards__box">
                <div className="cards__subbox">
                    <ul className="cards__things">
                        <CardItem
                            src={image1}
                            text="Witness the wonder of the northern lights"
                            label="Mystery"
                            path="/location2"
                        />
                    </ul>
                    <div className="description__background">
                    <ul className="cards__things">
                        <h1 className="title">Reykjavik, Iceland</h1>
                        <div className="description">
                            Dancing in the skies above the land of ice and fire, these 
                            striking blue and green lights are at the top of many people’s bucket lists. 
                            Yet, many don’t know what they are. The northern lights, also known as the 
                            aurora borealis, are the visible result of solar particles entering the Earth’s 
                            magnetic field and ionizing high in the atmosphere. The ionization gives them their 
                            colors, usually green, but occasionally purple, red, pink, orange, and blue.
                            So what are you waiting for? Book your travel
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

export default Location2
