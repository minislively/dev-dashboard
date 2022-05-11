import '../assets/css/dropdown.css'
import {useState} from "react";
 

// Dropdown -> select 
function Dropdown({selected, setSelected}) {
  const[isActive, setIsActive] = useState(false);
  return(
    <div className="dropdown">
      <div className="dropdown-btn" onClick={e => setIsActive(!isActive)}>
        Choose One
        <span className='fas fa-caret-down'></span>
      </div>
      <div className="dropdown-content">
        <div onClick={e => setSelected{e.target.textContent}} className="dropdown-item">1</div>
        <div className="dropdown-item">2</div>
        
      </div>
  )
}