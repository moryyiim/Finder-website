import React from 'react'
import useLogin from './UseLogin'
import validateLogin from './ValidateLogin'
import './Form.css'


const Login = ({submitForm}) => {

    const { 
        handleChange, 
        values, 
        handleSubmit, 
        errors 
    } = useLogin(submitForm, validateLogin)


    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <h1>
                    Welcome back! Log into your account to start
                    finding your journey.
                </h1>
                <div className="form-inputs">
                    <label 
                        htmlFor="email" 
                        className="form-label">
                    </label>
                    <input 
                        id="email"
                        type="email" 
                        name="email"
                        className="form-input" 
                        placeholder="Email"
                        value={values.email}
                        onChange={handleChange}
                    />
                    {errors.email && <div>{errors.email}</div>}
                </div>
                <div className="form-inputs">
                    <label 
                        htmlFor="password" 
                        className="form-label">
                    </label>
                    <input
                        id="password"
                        type="password" 
                        name="password"
                        className="form-input" 
                        placeholder="Password"
                        value={values.password}
                        onChange={handleChange}
                    />
                    {errors.password && <div>{errors.password}</div>}
                </div>
                <button className="form-input-btn" type="submit">
                    Log into your account
                </button>
                <span className="form-input-login">
                    Don't have an account? 
                    <a href="/signup"> Sign up here</a>
                </span>
            </form>
        </div>
    )
}

export default Login
