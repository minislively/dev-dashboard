import React from 'react'

const Exchange = () => {
  return (
    <div>
      <h2 className="page-header">환율수집정보</h2>
            <div className="row-7">
                <div className="col-6">
                    <div className="row">
                        {
                          <nav className=''>
                          <div>
                            <h3>구글 파이낸스</h3>
                            <h3><a href='https://www.google.com/finance/markets/currencies'>https://www.google.com/finance/markets/currencies</a></h3>
                          </div>
                          <div>
                            <h3>지머니트랜스</h3>
                            <h3><a href='https://www.gmoneytrans.com/prices/'>https://www.gmoneytrans.com/prices/</a> </h3>
                          </div>

                        </nav>  
                        }
                    </div>
                </div>
          </div>
    </div>
  )
}

export default Exchange