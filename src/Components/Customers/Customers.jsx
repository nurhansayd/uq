import React, { useState } from 'react';
import CustomerTH from '../../common/CustomerTH';
import App from '../../common/AntDTable';

const Customers = () => {
 
  const data = [
    
  ];
const columns = [

    {
        title: 'Actions',
        key: 'action',

      },
  ];

  return(
    <div className='col-span-11'>
    <div className='p-5'>
  <div className='flex flex-col gap-y-5'>
   <CustomerTH/>
    <App data={data} columns={columns}/>

  </div>
    </div>

</div>
  );
  
}

export default Customers;