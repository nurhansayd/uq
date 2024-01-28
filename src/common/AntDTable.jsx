import React from 'react';
import { Space, Table, Tag } from 'antd';
const { Column, ColumnGroup } = Table;



export const App = ({data,columns}) => (
    
  <Table dataSource={data} columns={columns}>
  
  </Table>
);
export default App;