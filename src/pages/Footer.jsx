import React from "react"
import Table from "../components/table/Table"
import LiveClock from "../components/liveclock/Liveclock"
const Footer = () => {

  return (
      <div className="row">
      <div className="col-4">
        <div className="card">
          <div className="card__header">
            <div className='calcSite'>
            <h3>하루 누적 요청량</h3>
          </div>
          <div className="card__body">
            <Table />
          </div>
          </div>
        </div>

      </div>
        <div className="col-8">
        <div className="card">
          <div className="card__header">
            <div className='calcSite'>
            <h3>환율 수집 정보</h3> <LiveClock/>
          </div>
          <div className="card__body">
            <Table />
          </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Footer