import React, { useState } from 'react';
import TableHeader from '../../common/TableHeader';
import { App } from '../../common/AntDTable';
import { Space, Table, Tag } from 'antd';
import { Link, Outlet } from 'react-router-dom';


const Organizations = () => {
 
    const data = [
        {
          key: '1',
          name: 'Mike',
          register: 32,
          first_code: '10 Downing Street',
        },
        {
          key: '2',
          name: 'John',
          register: 42,
          first_code: '10 Downing Street',
        },
      ];
    const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Register',
          dataIndex: 'register',
          key: 'register',
        },
        {
          title: 'First Code',
          dataIndex: 'first_code',
          key: 'first_code',
        },
        {
            title: 'Actions',
            key: 'action',
            render: () => (
              <Space size="middle">
                <a className='text-sky-600'><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" class=" " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M832 464h-68V240c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zM332 240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v224H332V240zm460 600H232V536h560v304zM484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53a48.01 48.01 0 1 0-56 0z">
                    </path>
                    </svg> </a>
                <a className='text-sky-600'><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" class=" " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 0 0 0-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 0 0 9.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z">
                    </path>
                    </svg>
                    </a>
              </Space>
            ),
          },
      ];

  return(
    <div className='col-span-11'>
        <div className='p-5'>
      <div className='flex flex-col gap-y-5'>

        <TableHeader subpath={'create'}/>

       <App data={data} columns={columns}/>
    
      </div>
        </div>
       
   </div>
  );
  
}

export default Organizations;