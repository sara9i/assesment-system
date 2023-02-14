import React from 'react';

const rowHeaderStyle = {
  textAlign: 'right',
  padding: '10px',
  width: '210px',
};

const tableStyle = {
  fontFamily: 'Montserrat, sans-serif',
  fontSize: '12px',
};

const RenderTableRows = (props) => {
  const items = props.items;
  return items.map((item) => {
    let text = item.text;
    if (item.text === null || item.text === undefined || item.text === '') {
      text = '--';
    } else if (item.link) {
      text = <a href={item.text}>{item.text}</a>;
    }
    return (
      <tr>
        <td style={rowHeaderStyle}>{item.label}</td>
        <td>{text}</td>
      </tr>
    );
  });
};

const ReadDataTable = (props) => {
  const items = props.items;
  return (
    <table style={tableStyle}>
      <tbody>
        <RenderTableRows items={items} />
      </tbody>
    </table>
  );
};

export default ReadDataTable;
