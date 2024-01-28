import React, { useState } from 'react';
import { Collapse } from 'antd';
import {basicInfoItems, ownerAccountItems} from '../../common/Items';
import SaveBtn from '../../common/SaveBtn';
import CancelBtn from '../../common/CancelBtn';

const Create = () => {

  return(
    <div className='col-span-11'>
<h1 className='text-slate-500 text-bold py-4' > Create New Vendor</h1>

    <div className='flex flex-col gap-y-5 '>
<Collapse className='w-5/6 text-left self-center' items={basicInfoItems} defaultActiveKey={['1']} />
<Collapse className='w-5/6 text-left self-center' items={ownerAccountItems} defaultActiveKey={['1']} />

<div className='w-5/6 flex flex-col self-center  '>
   <div className='self-end flex gap-x-3'> 
<SaveBtn />
<CancelBtn />
    </div>
</div>


</div>
        </div>


  );
  
}

export default Create;