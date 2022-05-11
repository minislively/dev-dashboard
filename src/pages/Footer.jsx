import React from "react"
// import Table from "../components/table/Table"
import LiveClock from "../components/liveclock/Liveclock"
import axios from "axios";
import { useEffect, useState } from "react";



axios.defaults.withCredentials = true; // withCredentials 전역 설정
function Footer () {
  const [server, setServer] = useState([]);
// 필요한 api 여기다가 넣기. useState와 useEffect 두 개 못 쓰면 페이지 나눠서 </> 불러오는 식으로 하기. 
  useEffect(() => {
    axios.get("http://localhost:5005/api/rate")
    .then(response => {
      setServer(response.data);
      console.log(server)
    })
    .catch(error => console.log(error))
  })

  return (
    // 하루 누적 요청량 부분 
      <div className="row">
      <div className="col-4">
        <div className="card">
          <div className="card__header">
            <div className='calcSite'>
            <h3>하루 누적 요청량</h3>
          </div>
          <div className="card__body">

          </div>
          </div>
        </div>
{/* 환율 수집 정보 파트 */}
      </div>
        <div className="col-8">
        <div className="card">
          <div className="card__header">
            <div className='calcSite'>
            <h3>환율 수집 정보</h3> <LiveClock/>
          </div>
          <div className="card__body">

          </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Footer