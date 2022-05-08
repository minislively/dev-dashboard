import React from 'react'
import Table from '../components/table/Table'
const Analytics = () => {
  return (
    <div className="col-12">
      <div className="card">
        <div className="card__header">
          <div className='calcSite'>
          <h3>환율 수집 정보</h3>
        </div>
        <div className="card__body">
          <Table />
          <h3>구글 파이낸스</h3>
          <h3><a href='https://www.google.com/finance/markets/currencies'>https://www.google.com/finance/markets/currencies</a></h3>
        </div>
        <div>
          <h3>지머니트랜스</h3>
          <h3><a href='https://www.gmoneytrans.com/prices/'>https://www.gmoneytrans.com/prices/</a> </h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Analytics