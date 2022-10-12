import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { saveCampaign } from '../../actions/campaign'
import Sidebar from '../partials/sidebar/Sidebar'

import './new.scss'

const New = () => {
  let dispatch = useDispatch()
  let navigate = useNavigate()
/*   const [values, setValues] = useState({
    title: '',
    brand: '',
    category: '',
    hastags: '',
    description: '',
    budget: '',
    engagements: '',
    views: '',
    audience: '',
    goal: '',
    end_date: ''
  }) */

  let handleCampaignCreate = async(e) => {
    e.preventDefault()
    let title = document.querySelector('#campaign-title').value
    let brand = document.querySelector('#campaign-brand').value
    let category = document.querySelector('#campaign-category').value
    let hashtags = document.querySelector('#hashtags').value
    let description = document.querySelector('#description').value
    let budget = document.querySelector('#campaign-budget').value
    let engagements = document.querySelector('#campaign-engagements').value
    let audience = document.querySelector('#campaign-audience').value
    let views = document.querySelector('#campaign-views').value
    let end_date = document.querySelector('#campaign-end').value
    let goal = document.querySelector('#campaign-goal').value

    await dispatch(saveCampaign({title, brand, category, hashtags, description, budget, engagements, audience, views, end_date, goal}))
    navigate('/campaigns')
  }
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
                      <input type="text" className='create-input' id='campaign-category' placeholder=' ' style={{padding: '7%'}} />
                      <label htmlFor="campaign-category" className='create-label'>Category</label>
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
                    <textarea name="" className='create-input' id="description" cols="30" rows="10" placeholder=' ' style={{padding: '2%'}}></textarea>
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
                    <div className="formInput" style={{width: '47%'}}>
                      <input type="text" className="create-input" name='campaign-goal' id="campaign-goal" placeholder=' ' style={{padding: '7%'}} />
                      <label htmlFor="campaign-goal" className="create-label">Goal</label>
                    </div>
                    <div className="formInput" style={{width: '47%'}}>
                      <input type="date" className="create-input" name='campaign-end' id="campaign-end" placeholder=' ' style={{padding: '7%'}} />
                      <label htmlFor="campaign-end" className="create-label">Completion Target</label>
                    </div>
                  </form>
                </div>
              </div>
              <div className="button-section">
                <button onClick={handleCampaignCreate}>Create</button>
              </div>
          </div>
        </div>
    </div>
    </div>
  )
}

export default New