import { AddOutlined, FilterListOutlined, SearchOutlined } from '@mui/icons-material'
import React from 'react'
import Sidebar from '../partials/sidebar/Sidebar'
import { useNavigate } from "react-router-dom"


import './outreach.scss'

const Outreach = () => {
    let navigate = useNavigate()

    let createOutreach = () => {
        navigate('/outreaches/create')
    }
  return (
    <div>
        <Sidebar/>
        <div className="outreach">
            <div className="content">
                <div className="top-section">
                    <div className="intro">Influencer Outreach</div>
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
                            <div className="new-button" onClick={createOutreach}>
                                <div className="icon"><AddOutlined /></div>
                                <div className="title">Create Outreach</div>
                            </div>
                        </div>
                    </div>
                    <div className="table">

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Outreach