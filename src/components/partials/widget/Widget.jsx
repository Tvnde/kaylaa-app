import { Man4 } from '@mui/icons-material'
import React from 'react'

import './widget.scss'

const Widget = ({title, image, icon}) => {
  return (
    <div className='widget'>
        <div className="widget-items">
            <div className="left">
                <div className="widget-icon">
                    <Man4 className='icon' />
                </div>
            </div>
            <div className="right"></div>
        </div>
    </div>
  )
}

export default Widget