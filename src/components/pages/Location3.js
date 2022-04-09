import React from 'react'
import CardItem from '../CardItem'
import './Location.css'
import image1 from '../../assets/images/img-19.jpg'
import Checkout from '../Checkout'


function Location3() {
    return (
        <div className='card__image'>
            <div className="cards__box">
                <div className="cards__subbox">
                    <ul className="cards__things">
                        <CardItem
                            src={image1}
                            text="Take in the breathtaking views at Moraine Lake"
                            label="luxury"
                            path="/location3"
                        />
                    </ul>
                    <div className="description__background">
                    <ul className="cards__things">
                        <h1>Alberta, Canada</h1>
                        <div className="description">
                            Its waters are the most amazing colour, a vivid shade of turquoise 
                            that changes in intensity through the summer as the glaciers melt. 
                            Set in the rugged Valley of the Ten Peaks, Moraine Lake is surrounded 
                            by mountains, waterfalls, and rock piles, creating a scene so stunning 
                            it almost seems unreal. Sit lakeside and absorb the sights and pure 
                            mountain air, or explore further by canoeing and hiking. It’s an 
                            iconically jaw-dropping place that is sure to leave a lasting impression. 
                            So what are you waiting for? Book your travel.
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

export default Location3
