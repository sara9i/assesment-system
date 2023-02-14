import React from 'react';
import { Typography, Divider } from 'antd';

const { Text } = Typography;

const NotedFormItem = ({ color = 'darkRed', text, note, children }) => {
  return (
    <>
      <Text
        strong
        style={{
          fontSize: '10px',
          color
        }}>
        {`${text} - ${note}`}
      </Text>
      <Divider
        style={{
          height: 0,
          marginTop: '5px',
          backgroundColor: color
        }}
      />
      {children}
      <Divider
        style={{
          height: 0,
          marginTop: '5px',
          backgroundColor: color
        }}
      />
    </>
  );
};

export default NotedFormItem;
