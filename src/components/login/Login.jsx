import React from 'react'

import './login.scss'

const Login = () => {
  return (
    <div className='login'>
        <div className="loginContainer">
            <div className="login-form">
                <div className="logo-brand">
                    <img src="https://kaylaastore.s3.amazonaws.com/assets/logo_full.png" alt="" />
                </div>
                <div className="formInput">
                    <input type="text" className="login-input" id="email" defaultValue="" placeholder=" " />
                    <label className='login-label' htmlFor="email">Email Address</label>
                </div>
                <div className="formInput">
                    <input type="password" className="login-input" id="password" defaultValue="" placeholder=" " />
                    <label className='login-label' htmlFor="password">Password</label>
                </div>
                <div className="formButton">
                    <button className='form-btn'>Log In</button>
                </div>
                <div className="create-acct">
                    Don't have an account? <span className='create-link'>Create One!</span>
                </div>
            </div>
            <div className="login-image">
                <img src="https://kaylaastore.s3.amazonaws.com/assets/1280349927-1260x840.jpeg" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Login