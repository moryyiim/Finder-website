import React from 'react'
import CardItem from '../CardItem'
import './Location.css'
import image1 from '../../assets/images/img-20.jpg'
import Checkout from '../Checkout'


function Location4() {
    return (
        <div className='card__image'>
            <div className="cards__box">
                <div className="cards__subbox">
                    <ul className="cards__things">
                        <CardItem
                            src={image1}
                            text="Experience the rich culture of Japan"
                            label="luxury"
                            path="/location4"
                        />
                    </ul>
                    <div className="description__background">
                    <ul className="cards__things">
                        <h1>Fujiyoshida, Japan</h1>
                        <div className="description">
                            Come experience the rich culture of Japan. The Chureito Pagoda
                            is a five storied pagoda on the mountainside overlooking Fujiyoshida City 
                            and Mount Fuji off in the distance. The location offers 
                            spectacular views of Mount Fuji in combination with the pagoda, especially 
                            during the cherry blossom season in mid April when there are hundreds of trees 
                            in bloom and during the autumn color season which usually takes place in the 
                            first half of November. The spot is particularly popular among photographers 
                            as it allows for some wonderfully stereotypical shots of Japan.
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

export default Location4
