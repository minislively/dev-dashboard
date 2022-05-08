import React, {Component} from "react";
import Clock from 'react-live-clock'
import './liveclock.css'

class liveClock extends Component {
  render() {
    return(
      <div>
        <Clock format={'YYYY년 MM월 DD일 HH:mm:ss'} ticking={true} timezone={'Asia/Seoul'}/>

      </div>
    )
  }
}

export default liveClock;