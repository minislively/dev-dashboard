import React from 'react'
import './topnav.css'
import Dropdown from '../dropdown/Dropdown'
import notifications from '../../assets/JsonData/notification.json'

const renderNotificationItem = (item, index) => (
  <div className="notification-item" key={index}>
    <i className={item.icon}></i>
    <span>{item.content}</span>
  </div>
)


const Topnav = () => {
  return (
    <div className='topnav'>
      <div className="topnav__search">
        <input type="text" placeholder='검색' />
        <i className='bx bx-search'></i>
      </div>
      <div className="topnav__right">
        <div className="topnav__right-item">
          <Dropdown
            icon ='bx bx-user' 
          />
        </div>
        <div className="topnav__right-item">
        <Dropdown
          icon='bx bx-bell'
          badge='12'
          contentData={notifications}
          renderItems={(item, index) => renderNotificationItem(item, index)}
          />      
        </div>
        <div className="topnav__right-item">
          <Dropdown />
        </div>
      </div>
    </div>
  )
}

export default Topnav