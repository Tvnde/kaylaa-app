import { AddOutlined, AssessmentOutlined, FilterListOutlined, SearchOutlined } from '@mui/icons-material'
import React from 'react'

import { useNavigate } from "react-router-dom";
import Sidebar from '../partials/sidebar/Sidebar'

import './campaign.scss'

const Campaign = () => {
    let navigate = useNavigate()
    let newCampaign = ()=> {
        navigate('/campaigns/new')
    }
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
                    <div className="campaign-instance">
                        <div className="basic-details">
                            <div className="campaign-title">Instance of Campaign title</div>
                            <div className="other-basic">
                                <div className="influencer-basic">7 Influencers</div>
                                <div className="brand-basic">Brand Company</div>
                                <div className="time-posted">8:14PM</div>
                            </div>
                        </div>
                        <div className="campaign-info">
                            <div className="campaign-posts">
                                <div className="post-value">16</div>
                                <div className="post-title">posts</div>
                            </div>
                            <div className="campaign-views">
                                <div className="view-value">1253</div>
                                <div className="view-title">views</div>
                            </div>
                            <div className="campaign-engagement">
                                <div className="engagement-value">93</div>
                                <div className="engagement-title">engagements</div>
                            </div>
                            <div className="campaign-shares">
                                <div className="share-value">12</div>
                                <div className="share-title">shares</div>
                            </div>
                            <div className="campaign-status">
                                Active
                            </div>
                        </div>
                        <div className="campaign-actions">
                            <div className="new-button">
                                <div className="icon"><AssessmentOutlined /></div>
                                <div className="title">View Report</div>
                            </div>
                        </div>
                    </div>
                    <div className="campaign-instance">
                        <div className="basic-details">
                            <div className="campaign-title">Instance of Campaign title</div>
                            <div className="other-basic">
                                <div className="influencer-basic">7 Influencers</div>
                                <div className="brand-basic">Brand Company</div>
                                <div className="time-posted">8:14PM</div>
                            </div>
                        </div>
                        <div className="campaign-info">
                            <div className="campaign-posts">
                                <div className="post-value">16</div>
                                <div className="post-title">posts</div>
                            </div>
                            <div className="campaign-views">
                                <div className="view-value">1253</div>
                                <div className="view-title">views</div>
                            </div>
                            <div className="campaign-engagement">
                                <div className="engagement-value">93</div>
                                <div className="engagement-title">engagements</div>
                            </div>
                            <div className="campaign-shares">
                                <div className="share-value">12</div>
                                <div className="share-title">shares</div>
                            </div>
                            <div className="campaign-status">
                                Completed
                            </div>
                        </div>
                        <div className="campaign-actions">
                            <div className="new-button">
                                <div className="icon"><AssessmentOutlined /></div>
                                <div className="title">View Report</div>
                            </div>
                        </div>
                    </div>
                    <div className="campaign-instance">
                        <div className="basic-details">
                            <div className="campaign-title">Instance of Campaign title</div>
                            <div className="other-basic">
                                <div className="influencer-basic">7 Influencers</div>
                                <div className="brand-basic">Brand Company</div>
                                <div className="time-posted">8:14PM</div>
                            </div>
                        </div>
                        <div className="campaign-info">
                            <div className="campaign-posts">
                                <div className="post-value">16</div>
                                <div className="post-title">posts</div>
                            </div>
                            <div className="campaign-views">
                                <div className="view-value">1253</div>
                                <div className="view-title">views</div>
                            </div>
                            <div className="campaign-engagement">
                                <div className="engagement-value">93</div>
                                <div className="engagement-title">engagements</div>
                            </div>
                            <div className="campaign-shares">
                                <div className="share-value">12</div>
                                <div className="share-title">shares</div>
                            </div>
                            <div className="campaign-status">
                                Active
                            </div>
                        </div>
                        <div className="campaign-actions">
                            <div className="new-button">
                                <div className="icon"><AssessmentOutlined /></div>
                                <div className="title">View Report</div>
                            </div>
                        </div>
                    </div>
                    <div className="campaign-instance">
                        <div className="basic-details">
                            <div className="campaign-title">Instance of Campaign title</div>
                            <div className="other-basic">
                                <div className="influencer-basic">7 Influencers</div>
                                <div className="brand-basic">Brand Company</div>
                                <div className="time-posted">8:14PM</div>
                            </div>
                        </div>
                        <div className="campaign-info">
                            <div className="campaign-posts">
                                <div className="post-value">16</div>
                                <div className="post-title">posts</div>
                            </div>
                            <div className="campaign-views">
                                <div className="view-value">1253</div>
                                <div className="view-title">views</div>
                            </div>
                            <div className="campaign-engagement">
                                <div className="engagement-value">93</div>
                                <div className="engagement-title">engagements</div>
                            </div>
                            <div className="campaign-shares">
                                <div className="share-value">12</div>
                                <div className="share-title">shares</div>
                            </div>
                            <div className="campaign-status">
                                Completed
                            </div>
                        </div>
                        <div className="campaign-actions">
                            <div className="new-button">
                                <div className="icon"><AssessmentOutlined /></div>
                                <div className="title">View Report</div>
                            </div>
                        </div>
                    </div>
                    <div className="campaign-instance">
                        <div className="basic-details">
                            <div className="campaign-title">Instance of Campaign title</div>
                            <div className="other-basic">
                                <div className="influencer-basic">7 Influencers</div>
                                <div className="brand-basic">Brand Company</div>
                                <div className="time-posted">8:14PM</div>
                            </div>
                        </div>
                        <div className="campaign-info">
                            <div className="campaign-posts">
                                <div className="post-value">16</div>
                                <div className="post-title">posts</div>
                            </div>
                            <div className="campaign-views">
                                <div className="view-value">1253</div>
                                <div className="view-title">views</div>
                            </div>
                            <div className="campaign-engagement">
                                <div className="engagement-value">93</div>
                                <div className="engagement-title">engagements</div>
                            </div>
                            <div className="campaign-shares">
                                <div className="share-value">12</div>
                                <div className="share-title">shares</div>
                            </div>
                            <div className="campaign-status">
                                Inactive
                            </div>
                        </div>
                        <div className="campaign-actions">
                            <div className="new-button">
                                <div className="icon"><AssessmentOutlined /></div>
                                <div className="title">View Report</div>
                            </div>
                        </div>
                    </div>
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