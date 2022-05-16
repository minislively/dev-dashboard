import React, { useState } from 'react';
import Select from 'react-select';
import './info.css' 
function Info1() {
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
      <h2>보내는 플랫폼</h2>
      <Select
        placeholder="Select Option"
        value={data.find(obj => obj.value === selectedValue)} // set selected value
        options={data} // set list of the data
        onChange={handleChange} // assign onChange function
      />
      {selectedValue && <div style={{ marginTop: 20, lineHeight: '25px' }}>
        <div><b>부가정보 입력번호: </b> {selectedValue}</div>
      </div>}
    </div>
  );
}
 
export default Info1;