import axios from 'axios'
axios.defaults.withCredentials = true;
export default function Requiretest() {
  const axios = require('axios')

  const getAxios = async () => { 
    try {
      const response = await axios.getAxios('http://localhost:5005/api/serverInfo');
      const data = response.data;
      console.log(data);
    } catch(error) {
      console.error('오류입니다');
    }
  }
  return (
    <div>
      test
      <button onClick={getAxios}>get</button>

    </div>
  )
}