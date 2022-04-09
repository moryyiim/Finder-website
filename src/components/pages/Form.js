import React from 'react'
import useForm from './UseForm'
import validate from './ValidateInfo'
import './Form.css'


const Form = ({submitForm}) => {

    const { 
        handleChange, 
        values, 
        handleSubmit, 
        errors 
    } = useForm(submitForm, validate)


    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <h1>Get started with us today! Create your 
                    account by filling out the information below.
                </h1>
                <div className="form-inputs">
                    <label 
                        htmlFor="username" 
                        className="form-label">
                    </label>
                    <input
                        id="username"
                        type="text" 
                        name="username"
                        className="form-input" 
                        placeholder="Username"
                        value={values.username}
                        onChange={handleChange}
                    />
                    {errors.username && <div>{errors.username}</div>}
                </div>
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
                <div className="form-inputs">
                    <label 
                        htmlFor="password2" 
                        className="form-label">
                    </label>
                    <input
                        id="password2"
                        type="password" 
                        name="password2"
                        className="form-input" 
                        placeholder="Password"
                        value={values.password2}
                        onChange={handleChange}
                    />
                    {errors.password2 && <div>{errors.password2}</div>}
                </div>
                <button className="form-input-btn" type="submit">
                    Sign Up
                </button>
                <span className="form-input-login">
                    Already have an account? 
                    <a href="/login"> Login here</a>
                </span>
            </form>
        </div>
    )
}

export default Form
