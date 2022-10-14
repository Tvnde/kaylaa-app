import { AttachEmail, Campaign, Man4, PowerSettingsNewOutlined } from '@mui/icons-material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import Sidebar from '../partials/sidebar/Sidebar'

import './home.scss'

const Home = () => {
  let dispatch = useDispatch()
  let navigate = useNavigate()
  const Logout = () => {
    console.log("Logout")
    dispatch({type: 'LOGOUT_SUCCESS'})
    navigate('/login')
  }
  return (
  <div>
    <Sidebar/>
    <div className='dashboard'>
        <div className="main-dashboard">
            <div className="top-section">
                <div className="intro">Hi, <span>Moses</span></div>{/* 
                <div className="campaign-summary">23% Campaigns Completed</div> */}
            </div>
            <div className="widgets-section">
                <div className="widgets">
                  <div className="widget first-widget">
                    <div className="widget-items">
                      <div className="left">
                        <div className="widget-icon">
                          <Man4 className='icon' />
                        </div>
                        <div className="widget-title">
                          Discover New Influencers
                        </div>
                        <div className="widget-button">Find Influencers</div>
                      </div>
                      <div className="right">
                        <div className="widget-image">
                          <img src='https://kaylaastore.s3.amazonaws.com/assets/boy-dynamic-color.png' alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="widget second-widget">
                    <div className="widget-items">
                      <div className="left">
                        <div className="widget-icon">
                          <Campaign className='icon' />
                        </div>
                        <div className="widget-title">
                          View Current Campaigns
                        </div>
                        <div className="widget-button">View Campaigns</div>
{/*                         <div className="widget-avatars">
                          <div className="avatar-img">
                            <img src="" alt="" />
                          </div>
                          <div className="avatar-img">
                            <img src="" alt="" />
                          </div>
                        </div> */}
                      </div>
                      <div className="right">
                        <div className="widget-image">
                          <img src='https://kaylaastore.s3.amazonaws.com/assets/megaphone-dynamic-gradient.png' alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
            <div className="activities-section">
              <div className="title">Activities</div>
              <div className="activities">
                <div className="activity-instance">
                  <div className="activity-icon">
                    <div className="icon-hold campaign-icon">
                      <Campaign className='icon' />
                    </div>
                  </div>
                  <div className="activity-info">
                    <div className="activity-title">New Campaign</div>
                    <div className="activity-text">A new campaign "How to make money Online" was created</div>
                  </div>
                </div>
                <div className="activity-instance">
                  <div className="activity-icon">
                    <div className="icon-hold outreach-icon">
                      <AttachEmail className='icon' />
                    </div>
                  </div>
                  <div className="activity-info">
                    <div className="activity-title">Outreach Message</div>
                    <div className="activity-text">An outreach message was sent to 23 influencers</div>
                  </div>
                </div>
                <div className="activity-instance">
                  <div className="activity-icon">
                    <div className="icon-hold campaign-icon">
                      <Campaign className='icon' />
                    </div>
                  </div>
                  <div className="activity-info">
                    <div className="activity-title">New Campaign</div>
                    <div className="activity-text">A new campaign "Get into the Pepsi Challenge" was created</div>
                  </div>
                </div>
              </div>

            </div>
        </div>
        <div className="utilities">
          <div className="influencer-discovery">
            <div className="discovery-title">
              Influencers Discovery.
            </div>
            <div className="discovery-text">
              Discover over 20.5M Influencers all over Africa..
            </div>
            <div className="discovery-button">
              <button>Discover Influencers</button>
            </div>
          </div>
          <div className="campaign-summary">
            <div className="summary-title">
              Campaign Summary
            </div>
            <div className="summary-details">
              <div className="summary-info">
                <div className="info-title">active</div>
                <div className="info-value">10</div>
              </div>
              <div className="summary-info">
                <div className="info-title">inactive</div>
                <div className="info-value">14</div>
              </div>
              <div className="summary-info">
                <div className="info-title">completed</div>
                <div className="info-value">6</div>
              </div>
            </div>
          </div>
          <div className="quick-links">
            <div className="link-title">Quick Links</div>
            <div className="link-buttons">
              <button className='campaign-link'>New Campaign</button>
              <button className='outreach-link'>New Outreach</button>
              <button className='analysis-link'>View Analysis</button>
            </div>
          </div>

          <div className="logout-button">
            <button onClick={Logout}><span><PowerSettingsNewOutlined className = 'icon' /></span>Logout</button>
          </div>
        </div>
    </div>
    </div>
  )
}

export default Home