import React from 'react';
import { Table } from 'antd';
import { addSorters } from '../../../utilities/formatData';

const TableWithSorter = ({ columns, ...rest }) => {
  return <Table columns={addSorters(columns)} {...rest} />;
};

export default TableWithSorter;
