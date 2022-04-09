import React, { useState } from 'react'
import '../../App.css'
import LoginForm from './LoginForm'
import LoginSuccess from './LoginSuccess'
import './Form.css'
import image1 from '../../assets/images/pic04.jpg'

const Login = () => {
    const [isSubmitted, setIsSubmitted] = useState(false)

    function submitForm() {
        setIsSubmitted(true)
    }
    return(
        <div>
                <img src={image1} alt="" className="background-img" />
                    {!isSubmitted ? <LoginForm submitForm=
                        {submitForm} /> : <LoginSuccess/>}
        </div>
    )
}

export default Login