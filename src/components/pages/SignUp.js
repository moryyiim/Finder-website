import React, { useState } from 'react'
import '../../App.css'
import Form from './Form'
import FormSuccess from './FormSuccess'
import './Form.css'
import image1 from '../../assets/images/pic01.jpg'

const SignUp = () => {
    const [isSubmitted, setIsSubmitted] = useState(false)

    function submitForm() {
        setIsSubmitted(true)
    }
    return(
        <div>
            <img src={image1} alt="" className="background-img"/>
            {!isSubmitted ? <Form submitForm=
                {submitForm} /> : <FormSuccess/>}
        </div>
    )
}

export default SignUp