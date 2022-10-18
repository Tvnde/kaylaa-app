import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { login } from '../../actions/auth'

import './login.scss'

const Login = () => {
    let dispatch = useDispatch()
    let navigate = useNavigate()
    const [values, setValues] = useState({
        email: '',
        password: ''
    })
    let registerAccount = () => {
        navigate('/register')
    }
    let auth = useSelector((state) => state.auth)
    console.log(auth)
    let loginAccount = async() => {
         await dispatch(login(values, navigate))
        document.getElementById('password').focus()

    }                                                                                            
  return (
    <div className='login'>
        <div className="loginContainer">
            <div className="login-form">
                <div className="logo-brand">
                    <img src="https://kaylaastore.s3.amazonaws.com/assets/logo_full.png" alt="kaylaa" />
                </div>
                {auth ? (<div className="message-alert">{auth}</div>) : null}
                <div className="formInput">
                    <input type="text" className="login-input" id="email" defaultValue="" placeholder=" " onChange={(e) => setValues({...values, email: e.target.value}) } />
                    <label className='login-label' htmlFor="email">Email Address</label>
                </div>
                <div className="formInput">
                    <input type="password" className="login-input" id="password" defaultValue="" placeholder=" " onChange={(e) => setValues({...values, password: e.target.value})} />
                    <label className='login-label' htmlFor="password">Password</label>
                </div>
                <div className="formButton">
                    <button className='form-btn' id='formBtn' onClick={loginAccount}>
                        <span>Log In</span>
                    </button>
                </div>
                <div className="create-acct">
                    Don't have an account? <span className='create-link' onClick={registerAccount}>Create One!</span>
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