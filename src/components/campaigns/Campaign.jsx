import { AddOutlined, AssessmentOutlined, FilterListOutlined, SearchOutlined } from '@mui/icons-material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { useNavigate } from "react-router-dom";
import { fetchCampaigns } from '../../actions/campaign';
import Sidebar from '../partials/sidebar/Sidebar'

import './campaign.scss'

const Campaign = () => {
    let navigate = useNavigate()
    let dispatch = useDispatch()
    let campaigns = useSelector((state) => state.campaigns)
    let newCampaign = ()=> {
        navigate('/campaigns/new')
    }
    useEffect(() => {
        dispatch(fetchCampaigns())
    }, [dispatch])
  return (
    <div>
        <Sidebar/>
        <div className='campaign'>
        <div className="content">
            <div className="top-section">
                <div className="intro">Campaigns</div>
                <div className="campaign-summary">23% Campaigns Completed</div>
            </div>
            <div className="main-section">
                <div className="top">
                    <div className="left-top"></div>
                    <div className="right-top">
                        <div className="search-box">
                            <input type="text" className='searchText' id='search-text' placeholder='Search...' />
                            <SearchOutlined className='icon' />
                        </div>
                        <div className="filter-rule">
                            <div className="icon-find"><FilterListOutlined className='icon' /></div>
                            <div className="title">Filters</div>
                        </div>
                        <div className="new-button" onClick={newCampaign}>
                            <div className="icon"><AddOutlined /></div>
                            <div className="title">New Campaign</div>
                        </div>
                    </div>
                </div>
                <div className="table">
                    <div className="campaign-headers">
                        <div className="campaign-header" style={{flex: '2.3'}}>Details</div>
                        <div className="campaign-header" style={{flex: '1'}}>Post</div>
                        <div className="campaign-header" style={{flex: '1'}}>Views</div>
                        <div className="campaign-header" style={{flex: '1'}}>Engagements</div>
                        <div className="campaign-header" style={{flex: '1'}}>Shares</div>
                        <div className="campaign-header" style={{flex: '1'}}>Status</div>
                        <div className="campaign-header" style={{flex: '1'}}>End Date</div>
                        <div className="campaign-header" style={{flex: '1'}}>Actions</div>
                    </div>
                    {campaigns.map((campaign) => (
                    <div className="campaign-instance">
                    <div className="basic-details">
                        <div className="campaign-title">{campaign.title}</div>
                        <div className="other-basic">
                            <div className="influencer-basic">No Influencer Yet</div>
                            <div className="brand-basic">{campaign.brand}</div>
                            <div className="time-posted">8:14PM</div>
                        </div>
                    </div>
                        <div className="campaign-posts">
                            0
                        </div>
                        <div className="campaign-views">
                            0
                        </div>
                        <div className="campaign-engagements">
                            0
                        </div>
                        <div className="campaign-shares">
                            0
                        </div>
                        <div className="campaign-status">
                            Active
                        </div>
                        <div className="campaign-end-date">{campaign.end_date.split("T")[0]}</div>
                        <div className="campaign-actions">
                            <div className="new-button">
                                <div className="icon"><AssessmentOutlined /></div>
                                <div className="title">View Report</div>
                            </div>
                        </div>
                </div>
                    ))}
                </div>
{/*                 <div className="filter-section">
                    <div className="top">
                        <div className="title">Filters</div>
                        <div className="icon-find"><FilterListOutlined className='icon'/></div>
                    </div>
                </div>
                <div className="table-section">
                    hfjdr
                </div> */}
            </div>
        </div>
        </div>
    </div>
  )
}

export default Campaign