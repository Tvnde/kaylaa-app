import React, {useState, useEffect} from 'react'
import decode from 'jwt-decode'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import Sidebar from '../partials/sidebar/Sidebar'

import './creator.scss'


const Creator = () => {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
  let dispatch = useDispatch()
  const navigate = useNavigate()
  const Logout = () => {
    console.log("Logout")
    dispatch({type: 'LOGOUT_SUCCESS'})
    navigate('/login')
  }
  useEffect(() => {
    const token = user?.token
    if(token) {
      const decodeToken = decode(token)
      if(decodeToken.exp * 1000 < new Date().getTime()){
        Logout()
      } else {
        setUser(JSON.parse(localStorage.getItem('profile')))
      }
    } else Logout()
  }, [dispatch])
  return (
    <div>
      <Sidebar/>
      <div className='creator'>
          <div className="main-dashboard">
            <div className="top-section">
                <div className="intro">Hi, <span>{user.name}</span></div>
            </div>

            <div className="selectors-section">
              <div className="all-selectors">
                <div className="select-insta"></div>
                <div className="select-twitter"></div>
                <div className="select-fb"></div>
                <div className="select-tiktok"></div>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Creator