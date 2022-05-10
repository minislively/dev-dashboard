import React from "react"
import Table from "../components/table/Table"
import LiveClock from "../components/liveclock/Liveclock"
import axios from "axios";
import { useEffect, useState } from "react";



axios.defaults.withCredentials = true; // withCredentials 전역 설정
const Footer = () => {
  const [rate, setRate] = useState([]);
// 필요한 api 여기다가 넣기. useState와 useEffect 두 개 못 쓰면 페이지 나눠서 </> 불러오는 식으로 하기. 
  useEffect(() => {
    axios.get("http://localhost:5005/api/rate")
    .then(res => {
      console.log(res)
      setRate(res.data);
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
          <table>
          <Table />
          <tbody>
            {/* 연결한 api 정보 rate에다가 쓰기. td 안에다가는 json 관련 데이터 작성 */}
            {rate.map(item => (
                <tr key={item.id}>
                <td>{item.lastModifiedDate}</td>
                <td>{item.sellRate}</td>
              </tr>
            ))}
          </tbody>
          </table>
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
          <table>
          <Table />
          <tbody>
            {/* 연결한 api 정보 rate에다가 쓰기. td 안에다가는 json 관련 데이터 작성 */}
            {rate.map(item => (
                <tr key={item.id}>
                <td>{item.std}</td>
                <td>{item.sellRate}</td>
              </tr>
            ))}
          </tbody>
          </table>
          </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Footer