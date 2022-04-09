import React from 'react'
import '../App.css'
import { Button } from './Button'
import ButtonTrailer from './ButtonTrailer'
import './HeroSection.css'
import image1 from '../assets/images/img-16.jpg'






function HeroSection() {
    
    return (
        <div className='hero-container'>
            <img src={image1} alt="" className="background-img" />
            <h1>FIND YOUR DESTINATION</h1>
            <p>What are you waiting for?</p>
            <div className="hero-btns">
                <Button 
                className='btns' 
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                >
                    GET STARTED
                </Button>
                <ButtonTrailer 
                className='btns' 
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                >
                    WATCH TRAILER <i className='far fa-play-circle' />
                </ButtonTrailer>
            </div>
        </div>
    )
}

export default HeroSection
