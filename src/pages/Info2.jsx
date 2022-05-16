import React, { useState } from 'react';
import Select from 'react-select';
import './info.css' 
function Info2() {
  const data = [
    {
      value: 1,
      label: "kftc"
    },
    {
      value: 2,
      label: "paypal"
    },
    {
      value: 3,
      label: "toss"
    },
    {
      value: 4,
      label: "nh"
    }
  ];
 
  // set value for default selection
  const [selectedValue, setSelectedValue] = useState(4);
 
  // handle onChange event of the dropdown
  const handleChange = e => {
    setSelectedValue(e.value);
  }
 
  return (
    <div className="App additional">
      <h2>받는 플랫폼</h2>
      <Select
        placeholder="Select Option"
        value={data.find(obj => obj.value === selectedValue)} // set selected value
        options={data} // set list of the data
        onChange={handleChange} // assign onChange function
      />

      <div className='additional'>
        <ol>
          <h2>부가정보 입력</h2>
          <li>1. 고객 성명 / 고객 계좌 은행</li>
          <li>2. 전화번호 / 국가코드 / Payment Method / Intent / Payment Description </li>
          <li>3. 생년월일 6자리 또는 사업자등록번호 10자리 / 카드 번호 / 카드 유효연도 / 카드 유효월 / 카드 비밀번호 앞 2자리 </li>
          <li>4. 은행 코드 / 생년월일 또는 사업자등록번호 / 개인 or 회사 / 고객 성명 </li>
        </ol>
        <div>
        </div>
      </div>


    </div>
  );
}
 
export default Info2;