import React from 'react'
import Table from '../components/table/Table'
import Rate from '../assets/JsonData/Rate.json'

const rateTableHead = [
    'std',
    'sellRate',
    'source',
    'lastModifiedDate',
    'prop',
    'buyRate'
]

const renderHead = (item, index) => <th key={index}>{item}</th>

const renderBody = (item, index) => (
    <tr key={index}>
        <td>{item.std}</td>
        <td>{item.sellRate}</td>
        <td>{item.source}</td>
        <td>{item.lastModifiedDate}</td>
        <td>{item.prop}</td>
        <td>{item.buyRate}</td>
    </tr>
)

const Ratelist = () => {
    return (
        <div>
            <h2 className="page-header">
                실시간 환율 정보 
            </h2>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card__body">
                            <Table
                                limit='10'
                                headData={rateTableHead}
                                renderHead={(item, index) => renderHead(item, index)}
                                bodyData={Rate}
                                renderBody={(item, index) => renderBody(item, index)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ratelist