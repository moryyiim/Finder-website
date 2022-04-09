import React from 'react'
import './Checkout.css'


function Checkout() {
  return(
    <div className="checkout--container">
          <form action="https://buy.stripe.com/test_6oE9Eo2fJ5lO5uofYY">
              <button 
                  className="checkout-btn" 
                  type="submit">
                    Book Now!
              </button>
          </form>
    </div>
  )
}

export default Checkout