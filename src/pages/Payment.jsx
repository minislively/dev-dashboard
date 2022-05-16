import React, { useState } from "react";
import Select from "react-select";
import './info.css'

export default function App() {
  const [selectedOption, setSelectedOption] = useState([]);
  const options = [
    { value: "none", label: "Empty" },
    { value: "left", label: "Open Left" },
    { value: "right", label: "Open Right" },
    {
      value: "tilt,left",
      label: "Tilf and Open Left"
    },
    {
      value: "tilt,right",
      label: "Tilf and Open Right"
    }
  ];
  const handleTypeSelect = e => {
    setSelectedOption(e.value);
  };

  return (
    <div className="additional">
      <Select
        options={options}
        onChange={handleTypeSelect}
        value={options.filter(function(option) {
          return option.value === selectedOption;
        })}
        label="Single select"
      />
      <Select
        options={options}
        onChange={handleTypeSelect}
        value={options.filter(function(option) {
          return option.value === selectedOption;
        })}
        label="Single select"
      />
    </div>
  );
}
