import { Radio } from "antd";
import { useState } from "react";

const ColorBar = ({ setColor }) => {
  const color = useState("");

  const ColorChange = (e) => {
    setColor(e.target.value);
  };

  return (
    <Radio.Group value={color} onChange={ColorChange}>
      <Radio.Button className="bg-gray-300" value="bg-gray-300"></Radio.Button>
      <Radio.Button
        className="bg-indigo-300"
        value="bg-indigo-300"
      ></Radio.Button>
      <Radio.Button
        className="bg-green-300"
        value="bg-green-300"
      ></Radio.Button>
      <Radio.Button
        className="bg-purple-300"
        value="bg-purple-300"
      ></Radio.Button>
    </Radio.Group>
  );
};

export default ColorBar;
