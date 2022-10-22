import React, {useEffect} from 'react'
import Sidebar from '../partials/sidebar/Sidebar'

import { AddOutlined, Facebook, FilterListOutlined, Instagram, MusicNote, SearchOutlined, Twitter } from '@mui/icons-material'


import './influencer.scss'
import { useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { fetchInfluencers } from '../../actions/influencer'

const Influencer = () => {
    let navigate = useNavigate()
    let dispatch = useDispatch()
    let influencers = useSelector((state) => state.influencers)
/*     let newCampaign = ()=> {
        navigate('/campaigns/new')
    } */
    useEffect(() => {
        dispatch(fetchInfluencers())
    }, [dispatch])

  return (
    <div>
        <Sidebar/>
        <div className="influencer">
        <div className="content">
            <div className="top-section">
                <div className="intro">Influencers</div>
                <div className="influencer-summary">My Network</div>
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
                        <div className="discovery-button">
                            <div className="icon"><AddOutlined /></div>
                            <div className="title">Discover Influencers</div>
                        </div>
                    </div>
                </div>
                <div className="table">
                    <div className="influencer-headers">
                        <div className="influencer-header" style={{flex: '1.5'}}>Influencer</div>
                        <div className="influencer-header" style={{flex: '1.5'}}>Social Links</div>
                        <div className="influencer-header" style={{flex: '1'}}>Campaigns</div>
                        <div className="influencer-header" style={{flex: '1'}}>Audience</div>
                    </div>
                    {influencers.map((influencer) => (
                        <div className="influencer-instance">
                            <div className="basic-details">
                                <div className="influencer-avatar">
                                    <img src="https://kaylaastore.s3.amazonaws.com/assets/avatars/avatar-3.png" alt="" />
                                </div>
                                <div className="influencer-basic">
                                    <div className="influencer-name">{`${influencer.firstname} ${influencer.lastname}`}</div>
                                </div>
                            </div>
                            <div className="influencer-socials">
                                <div className="influencer-instagram">
                                    <Instagram/>
                                </div>
                                <div className="influencer-facebook">
                                    <Facebook/>
                                </div>
                                <div className="influencer-twitter">
                                    <Twitter/>
                                </div>
                                <div className="influencer-tiktok">
                                    <MusicNote/>
                                </div>
                            </div>
                            <div className="influencer-campaigns">
                                <div className="campaign-value">24</div>
                            </div>
                            <div className="influencer-audience">
                                <div className="audience-value">36.4K</div>
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

export default Influencer