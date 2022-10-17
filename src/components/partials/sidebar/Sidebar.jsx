import React, {useState} from 'react'
import { Link, useNavigate } from "react-router-dom"

import { AnalyticsOutlined, CampaignOutlined, DraftsOutlined, LogoutOutlined, PersonSearchOutlined } from "@mui/icons-material"

import './sidebar.scss'
import { useDispatch } from 'react-redux'

const Sidebar = () => {
    let navigate = useNavigate()
    let dispatch = useDispatch()
    const logout1 = () => {
        dispatch({type: 'LOGOUT_SUCCESS'})
        navigate('/login')
    }
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
  return (
    <div className='sidebar'>
        <div className="sidebarContainer">
        <div className="top">
            <Link to="/"  style={{textDecoration: "none", display: "flex", width: "80%"}}>
                <div className="avatar">
                    <img src="https://kaylaastore.s3.amazonaws.com/assets/avatars/avatar-3.png" alt='' className='avatarImg'/>
                </div>
                <div className='admin-profile'>
                    <div className="name">{user?.name}</div>
                    <div className="role">{user?.role}</div>
                </div>
            </Link>
        </div>
        <div className="center">
            <ul>
                <p className="title">Menu</p>
                <Link to="/influencers" style={{textDecoration: "none"}}>
                    <li>
                        <PersonSearchOutlined className='icon'/>
                        <span>Influencers</span>
                    </li>
                </Link>
                <Link to="/campaigns" style={{textDecoration: "none"}}>
                    <li>
                        <CampaignOutlined className='icon' />
                        <span>Campaigns</span>
                    </li>
                </Link>
                <Link to="/outreaches" style={{textDecoration: "none"}}>
                    <li>
                        <DraftsOutlined className='icon' />
                        <span>Outreach</span>
                    </li>
                </Link>
                <Link to="/analytics" style={{textDecoration: "none"}}>
                    <li>
                        <AnalyticsOutlined className='icon' />
                        <span>Analytics</span>
                    </li>
                </Link>
                <div style={{textDecoration: "none"}} onClick={logout1}>
                    <li>
                        <LogoutOutlined className='icon' />
                        <span>Logout</span>
                    </li>
                </div>
            </ul>
        </div>
        </div>
    </div>
  )
}

export default Sidebar