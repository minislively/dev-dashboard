import React from "react"
// import Table from "../components/table/Table"
import LiveClock from "../components/liveclock/Liveclock"
import axios from "axios";
import { useEffect, useState } from "react";
import Table from '../components/table/Table'


axios.defaults.withCredentials = true; // withCredentials 전역 설정
const Footer = () => {
  const [conn_google, setConn_google] = useState('');
  const [conn_gmoney, setConn_gmoney] = useState('');
  const [conn_yahoo, setConn_yahoo] = useState('');
  const [CumuReq, setReq] = useState('');
// 필요한 api 여기다가 넣기. useState와 useEffect 두 개 못 쓰면 페이지 나눠서 </> 불러오는 식으로 하기. 
  useEffect(() => {
    axios.get("http://localhost:5005/api/serverInfo")
    .then(res => {
      const connect = JSON.parse(JSON.stringify(res.data));
      const connArr = JSON.parse(JSON.stringify(connect.Connection).replace("[", "").replace("]", ""));
      
      setConn_google(connArr.googleFin);
      setConn_gmoney(connArr.gmoney);
      setConn_yahoo(connArr.yahooFin);
      setReq(JSON.stringify(connect.CumuReq));
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
          <Table />
          {CumuReq}
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
          <ul>
              <li>Google : {conn_google}</li>
              <li>GMoney : {conn_gmoney}</li>
              <li>Yahoo : {conn_yahoo}</li>
            </ul>
          </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Footer