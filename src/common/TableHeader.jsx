import React, { useState } from 'react';

import { Link, Outlet } from 'react-router-dom';

const TableHeader = ({subpath}) => {
 


  return(
    <nav className='flex justify-between'>

    <input type="text" placeholder="Enter Your Search" className="p-2 border border-gray-500 w-1/6 rounded-lg text-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"/>
    
      <Link to={subpath} className='bg-sky-600 text-white p-2 border rounded-lg'>+create New</Link>
    </nav>
  );
  
}

export default TableHeader;