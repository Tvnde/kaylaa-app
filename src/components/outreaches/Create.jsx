import React, { useRef, useState } from 'react'
import Sidebar from '../partials/sidebar/Sidebar'

import { EditorState, Editor } from "draft-js"


import './create.scss'

const Create = () => {
  let [editorState, setEditorState] = useState(() => EditorState.createEmpty())
  let editor = useRef(null)
  let focusEditor = () => {
    editor.current.focus()
  }
  return (
    <div>
        <Sidebar />
        <div className='create'>
          <div className="content">
            <div className="top-section">
                <div className="intro">New Outreach</div>
                <div className="campaign-summary">create new outreach</div>
            </div>
            <div className="main-section">
              <div className="mail-section">
                  <form>
                    <div className="title">
                      <div className="formInput" style={{width: '80%'}}>
                        <input type="text" className='create-input' id='outreach-title' style={{padding: '3%',fontSize: '24px', fontWeight: '700'}} placeholder=' '/>
                        <label htmlFor="outreach-title" className='create-label' id='title' style={{fontSize: '24px', fontWeight: '700'}}>Title</label>
                      </div>
                    </div>
                    <div className="formInput" style={{width: '30%'}}>
                      <input type="text" className='create-input' id='outreach-subject' style={{padding: '4%', fontSize: '16px', fontWeight: '500'}} placeholder=' ' />
                      <label htmlFor="outreach-subject" className="create-label">subject</label>
                    </div>
                    <div className="formInput" style={{width: '50%'}}>
                      <Editor
                        className = "create-input"
                        ref = {editor}
                        placeholder = "Type Something..."
                        editorState = {editorState}
                        onChange = {setEditorState}
                      />
                    </div>
                  </form>
              </div>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Create