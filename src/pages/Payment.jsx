import React, { useState } from "react";
import Select from "react-select";

export default function App() {
  const [selectedOption, setSelectedOption] = useState("none");
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
    <div>
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
