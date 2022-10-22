import React, {useEffect, useState} from 'react'
import { Link, useNavigate } from "react-router-dom"
import decode from 'jwt-decode'
import { connectSDKAction } from '../../../actions/influencer'
import { useExternalScript } from "../../../helpers/useExternalScript"
import { PhylloConnectSDK } from "../../../phyllo/initialize-phyllo"

import { AnalyticsOutlined, CampaignOutlined, DraftsOutlined, LogoutOutlined, PersonSearchOutlined } from "@mui/icons-material"

import './sidebar.scss'
import { useDispatch } from 'react-redux'

const Sidebar = () => {
    useExternalScript("https://cdn.getphyllo.com/connect/v1/connect-initialize.js")
    let navigate = useNavigate()
    let dispatch = useDispatch()
    const logout1 = () => {
        dispatch({type: 'LOGOUT_SUCCESS'})
        navigate('/login')
    }
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
    console.log(user)
    const phylloSDKConnect=async(workPlatformId = null)=> {
        try {
          const env = "sandbox";
          const timeStamp = new Date();
          const isExistingUser = true;
          const sdk = await dispatch(connectSDKAction(user.id))
          console.log(sdk)
          const appName = "Kaylaa";
        
          const config = {
            env,
            userId: sdk.data.sdk.id,
            token: sdk.data.sdk.sdk_token,
            appName,
            workPlatformId,
            redirectURL : window.location.href
          }
          const phyllo = PhylloConnectSDK.initialize(config);
          phyllo.open();
    
        } catch (err) {
          console.log(err);
        }
      }
    let connectSDK = () => {
        console.log(user.id)
        dispatch(connectSDKAction(user.id))
    }

  return (
    <div className='sidebar'>
        <div className="sidebarContainer">
        <div className="top">
            <Link to="/"  style={{textDecoration: "none", display: "flex", width: "80%"}}>
                <div className="avatar">
                    <img src="https://kaylaastore.s3.amazonaws.com/assets/avatars/avatar-3.png" alt='' className='avatarImg'/>
                </div>
                {user ? (
                <div className='admin-profile'>
                    <div className="name">{user?.name}</div>
                    <div className="role">{user?.role}</div>
                </div>) : (
                    <div>
                        <div className="name"></div>
                        <div className="role"></div>
                    </div>
                )}
            </Link>
        </div>
        <div className="center">
            {user && user.role == "administrator" ? (
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
            ) : (
                <ul>
                <p className="title">Menu</p>
                <div style={{textDecoration: "none"}} onClick={phylloSDKConnect}>
                    <li>
                        <PersonSearchOutlined className='icon'/>
                        <span>Connect</span>
                    </li>
                </div>
{/*                 <Link to="/campaigns" style={{textDecoration: "none"}}>
                    <li>
                        <CampaignOutlined className='icon' />
                        <span>Campaigns</span>
                    </li>
                </Link> */}
{/*                 <Link to="/analytics" style={{textDecoration: "none"}}>
                    <li>
                        <AnalyticsOutlined className='icon' />
                        <span>Analytics</span>
                    </li>
                </Link> */}
                <div style={{textDecoration: "none"}} onClick={logout1}>
                    <li>
                        <LogoutOutlined className='icon' />
                        <span>Logout</span>
                    </li>
                </div>
            </ul>
            )}

        </div>
        </div>
    </div>
  )
}

export default Sidebar