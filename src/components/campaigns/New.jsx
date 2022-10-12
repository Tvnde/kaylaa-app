import React from 'react'
import Sidebar from '../partials/sidebar/Sidebar'

import './new.scss'

const New = () => {
  return (
    <div>
        <Sidebar />
    <div className='new'>
        <div className="content">
          <div className="top-section">
              <div className="intro">New Campaign</div>
              <div className="campaign-summary">create new campaign</div>
          </div>
          <div className="main-section">
              <div className="basic-section">
                <div className="section-title">
                  <div className="title">Basic Information</div>
                  <div className="text">Basic information about the campaign</div>
                </div>
                <div className="section-form">
                  <form>
                    <div className="formInput" style={{width: '100%'}}>
                      <input type="text" className='create-input' id='campaign-title' placeholder=' ' style={{padding: '3%'}}/>
                      <label className='create-label' htmlFor='campaign-title'>Campaign Title</label>
                    </div>
                    <div className="formInput" style={{width: '46%'}}>
                      <input type="text" className='create-input' id='campaign-brand' placeholder=' ' style={{padding: '7%'}} />
                      <label htmlFor="campaign-brand" className='create-label'>Brand</label>
                    </div>
                    <div className="formInput" style={{width: '47%'}}>
                      <input type="text" className='create-input' id='campaign-brand' placeholder=' ' style={{padding: '7%'}} />
                      <label htmlFor="campaign-brand" className='create-label'>Category</label>
                    </div>
                  </form>
                </div>
              </div>
              <div className="campaign-section">
                <div className="section-title">
                  <div className="title">Campaign Info</div>
                  <div className="text">Information and description of Campaign</div>
                </div>
                <div className="section-form">
                  <form>
                  <div className="formInput" style={{width: '100%'}}>
                    <input type="text" className='create-input' id='hashtags' placeholder=' ' style={{padding: '3%'}}/>
                    <label htmlFor='hashtags' className='create-label'>Hashtags and Mentions</label>
                  </div>
                  <div className="formInput" style={{width: '100%'}}>
                    <textarea name="" className='create-input' id="" cols="30" rows="10" placeholder=' ' style={{padding: '2%'}}></textarea>
                    <label htmlFor='description' className='create-label'>Description</label>
                  </div>
                  </form>
                </div>
              </div>
              <div className="target-section">
                <div className="section-title">
                  <div className="title">Target Information</div>
                  <div className="text">Set targets for your campaign</div>
                </div>
                <div className="section-form">
                  <form>
                    <div className="formInput" style={{width: '100%'}}>
                      <input className='create-input' type="number" name="campaign-budget" id="campaign-budget" placeholder=' ' style={{padding: '3%'}} />
                      <label htmlFor="campaign-budget" className="create-label">Campaign Budget</label>
                    </div>
                    <div className="formInput" style={{width: '47%'}}>
                      <input type="number" className="create-input" name='campaign-engagements' id="campaign-engagements" placeholder=' ' style={{padding: '7%'}} />
                      <label htmlFor="campaign-engagements" className="create-label">Engagements Target</label>
                    </div>
                    <div className="formInput" style={{width: '47%'}}>
                      <input type="number" className="create-input" name='campaign-views' id="campaign-views" placeholder=' ' style={{padding: '7%'}} />
                      <label htmlFor="campaign-views" className="create-label">Views Target</label>
                    </div>
                    <div className="formInput" style={{width: '100%'}}>
                      <input type="number" className="create-input" id="campaign-audience" placeholder=' ' style={{padding: '3%'}} />
                      <label htmlFor="campaign-audience" className="create-label">Audience Target</label>
                    </div>
                  </form>
                </div>
              </div>
              <div className="button-section">
                <button>Create</button>
              </div>
          </div>
        </div>
    </div>
    </div>
  )
}

export default New