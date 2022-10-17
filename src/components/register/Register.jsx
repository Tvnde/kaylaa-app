import React, {useState} from 'react'
import {useNavigate} from 'react-router'
import { useDispatch } from 'react-redux'

import { register } from "../../actions/auth"

import './register.scss'

const Register = () => {
    let navigate = useNavigate()
    let dispatch = useDispatch()
    let loginAccount = () => {
        navigate('/login')
    }
    const [values, setValues] = useState({
        email: '',
        firstname: '',
        lastname: '',
        password: ''
    })
    let handleRegister = (e) => {
        e.preventDefault()
        dispatch(register(values,navigate))
    }
  return (
    <div className='register'>
        <div className="registerContainer">
            <div className="register-form">
                <div className="logo-brand">
                    <img src="https://kaylaastore.s3.amazonaws.com/assets/logo_full.png" alt="" />
                </div>
                <div className="formInput">
                    <input type="text" className="register-input" id="firstname" defaultValue="" onChange={(e) => setValues({...values, firstname: e.target.value})} placeholder=' ' />
                    <label className='register-label' htmlFor="firstname">First Name</label>
                </div>
                <div className="formInput">
                    <input type="text" className="register-input" id="lastname" defaultValue="" onChange={(e) => setValues({...values, lastname: e.target.value})} placeholder=' ' />
                    <label className='register-label' htmlFor="lastname">Last Name</label>
                </div>
                <div className="formInput">
                    <input type="text" className="register-input" id="email" defaultValue="" onChange={(e) => setValues({...values, email: e.target.value})} placeholder=' ' />
                    <label className='register-label' htmlFor="email">Email Address</label>
                </div>
                <div className="formInput">
                    <input type="password" className='register-input' id='password' defaultValue="" onChange={(e) => setValues({...values, password: e.target.value})} placeholder=' ' />
                    <label htmlFor="password" className='register-label'>Password</label>
                </div>
                <div className="formButton">
                    <button className='form-btn' onClick={handleRegister}><span>Register</span></button>
                </div>
                <div className="create-acct">
                    Already have an account? <span className='login-link' onClick={loginAccount}>Login</span>
                </div>
            </div>
            <div className="register-image">
                <img src="https://kaylaastore.s3.amazonaws.com/assets/1280349927-1260x840.jpeg" alt="kaylaa" />
            </div>
        </div>
    </div>
  )
}

export default Register