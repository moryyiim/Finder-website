import React from 'react'
import CardItem from '../CardItem'
import './Location.css'
// import { Link } from 'react-router-dom'
import image1 from '../../assets/images/img-10.jpg'
import Checkout from '../Checkout.js'



function Location1() {
    return (
        
        <div className='card__image'>
            <div className="cards__box">
                <div className="cards__subbox">
                    <ul className="cards__things">
                        <CardItem
                            src={image1}
                            text="Explore the stairway to heaven"
                            label="Adventure"
                            path="/location1"
                        />
                    </ul>
                    <div className="description__background">
                    <ul className="cards__things">
                        <h1>Oahu, Hawaii</h1>
                        <div className="description">
                            The Haʻikū Stairs, also known as the Stairway to Heaven 
                            or Haʻikū Ladder, are 3,000 steps with beautiful views
                            that span along Oahu's Ko'olau mountain range. This is
                            a perfect adventure for hikers to enjoy the outdoors along
                            the coastline. So what are you waiting for? Book your travel
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

export default Location1
