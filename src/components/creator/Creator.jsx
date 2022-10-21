import React, {useState, useEffect} from 'react'
import decode from 'jwt-decode'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import Sidebar from '../partials/sidebar/Sidebar'

import './creator.scss'
import { Groups, ReplyAll, Visibility, WineBar } from '@mui/icons-material'


const Creator = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
  const [platform, setPlatform] = useState("Instagram")
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
                <div className="intro">Hi, <span>{user? user.name: null}</span></div>
            </div>

            <div className="selectors-section">
              <div className="selector-title">{platform} Contents</div>
              <div className="all-selectors">
                <div className={platform == "Instagram" ? "selector-focus select-insta" :"selector select-insta"} onClick={() => setPlatform('Instagram')}><span>Instagram</span></div>
                <div className={platform == "Twitter" ? "selector-focus select-twitter" :"selector select-twitter"} onClick={() => setPlatform('Twitter')}><span>Twitter</span></div>
                <div className={platform == "Facebook" ? "selector-focus select-fb" :"selector select-fb"} onClick={() => setPlatform('Facebook')}><span>Facebook</span></div>
                <div className={platform == "Tiktok" ? "selector-focus select-tiktok" :"selector select-tiktok"} onClick={() => setPlatform('Tiktok')}><span>TikTok</span></div>
                <div className={platform == "Youtube" ? "selector-focus select-youtube" :"selector select-youtube"} onClick={() => setPlatform('Youtube')}><span>Youtube</span></div>
              </div>
            </div>
            <div className="summary-section">
              <div className="all-summary">
                <div className="summary">
                  <div className="summary-icon"><Groups/></div>
                  <div className="summary-value">0</div>
                  <div className="summary-title">followers</div>
                </div>
                <div className="summary">
                  <div className="summary-icon">
                    <ReplyAll/>
                  </div>
                  <div className="summary-value">0</div>
                  <div className="summary-title">engagements</div>
                </div>
                <div className="summary">
                  <div className="summary-icon">
                    <Visibility/>
                  </div>
                  <div className="summary-value">0</div>
                  <div className="summary-title">views</div>
                </div>
                <div className="summary">
                  <div className="summary-icon"><WineBar/></div>
                  <div className="summary-value">0</div>
                  <div className="summary-title">contents</div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Creator