import React, {useState, useEffect} from 'react'
import Table from '../components/table/Table'
import axios from 'axios';

const rateTableHead = [
    'RecvPlatform',
    'RecvUser',
    'RecvCurrency',
    'RecvTime',
    'RecvValue'
]

// const renderHead = (item, index) => <th key={index}>{item}</th>



axios.defaults.withCredentials = true; // withCredentials 전역 설정
function RecvLog(){
  const [log, setLog] = useState([]);
  // 함수 뺴는 것으로 나중에 처리 해야함. -> 코드 수정  
  useEffect(() => {
    axios.get("http://localhost:8080/bridge/logs")
    .then(res => {
      setLog(res.data);
      console.log(log);
    })
    .catch(error => console.log(error))
  }) // },[]) <- []안에 있는 숫자까지 반복 가능 

  return(
    <div className="card__header">
    <h3>수취측</h3>
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
            {log.map(item => (
                <tr key={item.id}>
                <td>{item.RecvPlatform}</td>
                <td>{item.RecvUser}</td>
                <td>{item.RecvCurrency}</td>
                <td>{item.RecvTime}</td>
                <td>{item.RecvValue}</td>
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
export default RecvLog