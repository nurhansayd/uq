import React, { useState } from 'react';
import { Collapse } from 'antd';
import {basicInfoItems, ownerAccountItems} from '../../common/Items';

const Create = () => {

  


  return(
    <div className='col-span-11'>
<h1 className='text-slate-500 text-bold py-4' > Create New Vendor</h1>

    <div className='flex flex-col gap-y-5 '>
<Collapse className='w-5/6 text-left self-center' items={basicInfoItems} defaultActiveKey={['1']} />
<Collapse className='w-5/6 text-left self-center' items={ownerAccountItems} defaultActiveKey={['1']} />

<div className='w-5/6  self-center '>
<button  className='bg-sky-700 text-white p-2 border rounded-lg w-[7rem] flex items-center justify-center rounded-md bg-primary text-white  space-x-3 '>
<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" class=" " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
    <path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z">
        </path>
        </svg>
        <span>Save</span>
    </button>
</div>

</div>
        </div>


  );
  
}

export default Create;