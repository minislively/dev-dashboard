import axios from "axios";
import { useEffect, useState } from "react";
import Table from '../components/table/Table'

const rateTableHead = [
  'std',
  'sellRate',
  'source',
  'lastModifiedDate',
  'prop',
  'buyRate'
]

axios.defaults.withCredentials = true; // withCredentials 전역 설정
function Test(){
  const [rate, setRate] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5005/api/rate")
    .then(res => {
      console.log(res)
      setRate(res.data);
    })
    .catch(error => console.log(error))
  }) // },[]) <- []안에 있는 숫자까지 반복 가능 

  return(
    <div className="card__header">
    <h3>실시간 환율 정보</h3>
    <div className="row">
    <div className="col-12">
    <div className="card">
        <div className="card__body">
          <table>
          <Table />
          <tr>
            {rateTableHead.map((rateTableHead) => (
              <th key={rateTableHead}>{rateTableHead}</th>
            ))}
          </tr>
          <tbody>
            {rate.map(item => (
                <tr key={item.id}>
                <td>{item.std}</td>
                <td>{item.sellRate}</td>
                <td>{item.source}</td>
                <td>{item.lastModifiedDate}</td>
                <td>{item.prop}</td>
                <td>{item.buyRate}</td>
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
export default Test