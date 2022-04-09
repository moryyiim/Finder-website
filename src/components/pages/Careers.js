import React from 'react'
import image1 from '../../assets/images/img-20.jpg'
import './Careers.css'
import { Link } from 'react-router-dom'



function Careers(){
    return (
        <>
        <img src={image1} alt="" className="background-img"/>
        <div className="form-container">
            <div className="form__background" >
                <p>Join the FINDR team!</p>
                <div className="about__info">
                    We are currently hiring for positions. All available positions
                    are remote. Please contact us to find out which positions
                    are available.
                </div>
                <p>Why choose us?</p>
                <div className="about__info">
                    We offer competitive pay along with excellent benefits
                    such as 401k, dental, medical, vision, stocks, and
                    unlimited PTO.
                </div>
                <p>What are you waiting for?</p>
                <div className="about__info">
                    Be a part of the <span className="logo__bold">FINDR</span> team today.
                    Positions are limited so apply now!
                </div>
                    <Link to='/signup'>
                        <button className="apply-btn">
                            Apply here
                        </button>
                    </Link>
            </div>
        </div>
    </>
    )
}



export default Careers
