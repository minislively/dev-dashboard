import React from 'react'
import StatusCard from '../components/status-card/StatusCard'
import statusCards from '../assets/JsonData/status-card-data.json'

const Analytics = () => {
  return (
    <div>
      <h2 className="page-header">Analytics</h2>
            <div className="row">
                <div className="col-6">
                    <div className="row">
                        {
                            statusCards.map((item, index) => (
                                <div className="col-6" key={index}>
                                    <StatusCard
                                        icon={item.icon}
                                        count={item.count}
                                        title={item.title}
                                    />
                                </div>
                            ))
                        }
                    </div>
                </div>
          </div>
    </div>
  )
}

export default Analytics