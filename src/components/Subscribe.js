import React, { useState} from 'react'
import './Subscribe.css'



function Subscribe() {

  const [subscribeBtn, setSubscribeBtn] = useState(false)
  const [resetForm, setResetForm] = useState(null)
  const [formKey, setFormKey] = useState(0)
  const [disable, setDisable] = useState(false)
  const [resetEmail, setResetEmail] = useState('')
  

  const toggle = () => {
    setSubscribeBtn(!subscribeBtn)
    setResetForm(resetForm)
    setFormKey(formKey + 1)
    setDisable(true)
    setResetEmail('')
  }


    return (
     
      <div className="subscribe--container">
        <form>
          <input 
              value={resetEmail}
              type="email"
              name="email" 
              placeholder="Email" 
              className="footer-input" 
              onChange={(e) => setResetEmail(e.target.value)}
              required="true"
              disabled={disable}
              />
          <div className="subscribe--outline">
            <button 
              disabled={disable} 
              type="submit" 
              onClick={toggle} 
              className={'toggle--on' ? 'toggle--off' : ''}>
              {subscribeBtn ? "Subscribed" : "Subscribe"}
            </button> 
          </div>
          </form>
      </div>
    )
}

export default Subscribe

