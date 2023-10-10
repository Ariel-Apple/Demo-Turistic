import React, { useState } from 'react';
import { Radio, Select, Space } from 'antd';
const options = [];
for (let i = 10; i < 36; i++) {
  options.push({
    value: i.toString(36) + i,
    label: i.toString(36) + i,
  });
}
const handleChange = (value) => {
  console.log(`Selected: ${value}`);
};
const App = () => {
  const [size, setSize] = useState('middle');

  return (
    <>
   
      <Space
        direction="vertical"
        style={{
          width: '100%',
        }}
      >
        
        <Select
          mode="tags"
          size={size}
          placeholder="Please select"
          defaultValue={['a10', 'c12']}
          onChange={handleChange}
          style={{
            width: '100%',
          }}
          options={options}
        />
      </Space>
    </>
  );
};
export default App;