import React from 'react'
import image1 from '../../assets/images/img-17.jpg'
import '../../App.css'
import './AboutUs.css'


function AboutUs(){
    return (
        <>
        <img src={image1} alt="" className="background-img"/>
        <div className="form-container">
            <div className="form__background" >
                <p>Who we are</p>
                <div className="about__info">
                    <span className="logo__bold">FINDR </span>
                    is a subscription based company where you make low 
                    monthly payments to easily book locations on 
                    where you want to travel to. 
                </div>
                <p>Why choose us?</p>
                <div className="about__info">
                    We specialize in finding the
                    most exotic and trendiest places to visit.
                    We also offer the lowest rates on the market.
                </div>
                <p>How to stay up to date?</p>
                <div className="about__info">
                    Make sure to follow our social-media accounts to
                    stay up to date on the latest and trendiest
                    places to visit. You can find our social-media
                    accounts at the bottom of the page. 
                </div>
               
            
            </div>
        </div>
    </>
    )
}



    


export default AboutUs
