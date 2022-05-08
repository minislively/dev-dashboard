import axios from "axios";
import { useEffect, useState } from "react";
import Table from '../components/table/Table'

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
  })

  return(
    <div className="col-12">
    <div className="card">
        <div className="card__header">
            <h3>실시간 환율 정보</h3>
        </div>
        <div className="card__body">
            <Table/>
            <ul>
        {rate.map(rate => (
          <span key = {rate.std} > {rate.std} </span>
          ))} 
      </ul>
            </div>
        </div>
    </div>

  )
}
export default Test