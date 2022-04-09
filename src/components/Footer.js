import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
import Subscribe from './Subscribe'
import Cards from '../components/Cards.js'


export default function Footer() {

    return (
        <div className='footer-container'>
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Join the FINDR newsletter to 
                    receive our best vacation deals
                </p>
                <p className="footer-subscription-text">

                </p>
              
                        <Subscribe
                            buttonStyle='btn--outline'>
                                Subscribe
                        </Subscribe>
                
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                    <h2>About Us</h2>
                        <Link to='/aboutus' className="links" >How it works</Link>
                        <Link to='/signup' className="links" >Testimonials</Link>
                        <Link to='/careers' className="links" >Careers</Link>
                        <Link to='/signup' className="links" >Investors</Link>
                        <Link to='/signup' className="links" >Terms of Service</Link>
                    </div>
                    <div class='footer-link-items'>
                        <h2>Contact Us</h2>
                        <Link to='/signup' className="links" >Contact</Link>
                        <Link to='/signup' className="links" >Support</Link>
                        <Link to='/destinations' className="links" >Destinations</Link>
                        <Link to='/signup' className="links" >Sponsorships</Link>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div class='footer-link-items'>
                        <h2>Videos</h2>
                        <Link to='/signup' className="links" >Submit Video</Link>
                        <Link to='/trailer' className="links" >View Trailer</Link>
                        <Link to='/signup' className="links" >Ambassadors</Link>
                        <Link to='/signup' className="links" >Agency</Link>
                        <Link to='/signup' className="links" >Influencer</Link>
                    </div>
                    <div class='footer-link-items'>
                        <h2>Social Media</h2>
                        <Link to='/signup' className="links" >Instagram</Link>
                        <Link to='/signup' className="links" >Facebook</Link>
                        <Link to='/signup' className="links" >Youtube</Link>
                        <Link to='/signup' className="links" >Twitter</Link>
                    </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to="/" className="social-logo">
                            FINDR <i className="fas fa-globe-americas"/>
                        </Link>
                    </div>
                    <small className="website-rights">FINDR © 2021</small>
                    <div className="social-icons">
                        <Link 
                            className="social-icon-link facebook"
                            to='/'
                            target='_blank'
                            aria-label='Facebook'
                        >
                            <i className="fab fa-facebook-f"></i>
                        </Link>
                        <Link 
                            className="social-icon-link instagram"
                            to='/'
                            target='_blank'
                            aria-label='Instagram'
                        >
                            <i className="fab fa-instagram"></i>
                        </Link>
                        <Link 
                            className="social-icon-link youtube"
                            to='/'
                            target='_blank'
                            aria-label='Youtube'
                        >
                            <i className="fab fa-youtube"></i>
                        </Link>
                        <Link 
                            className="social-icon-link twitter"
                            to='/'
                            target='_blank'
                            aria-label='Twitter'
                        >
                            <i className="fab fa-twitter"></i>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

