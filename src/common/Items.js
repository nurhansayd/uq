const basicInfoItems = [
    {
      key: '1',
      label: 'Basic Info',
      children: 
      <div className='flex flex-wrap w-full gap-x-5 pb-5'>
        <div className='flex flex-col w-[49%]' >
      <label htmlFor="" className=' p-1 text-sm' >Name </label>
            <input
            type="text"
            id="Name"
            placeholder="Please enter name"
            className="px-4 py-2  border border-gray-600 rounded-lg  focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
              <p className=' p-1 text-[red] text-sm ml-4 invisible' id="emailErrorMsg">Name is required</p>
            </div>
        <div className='flex flex-col w-[49%]' >
    <label htmlFor="" className=' p-1 text-sm' >Register </label>
        <input
        type="text"
        id="Register"
        placeholder="Please enter register"
        className="px-4 py-2 border border-gray-600 rounded-lg  focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
            <p className=' p-1 text-[red] text-sm ml-4 invisible' id="emailErrorMsg">Name is required</p>
        </div>
        <div className='flex flex-col w-[49%]' >
    <label htmlFor="" className=' p-1 text-sm' >Package </label>
    <select 
    placeholder="Please select"
    class=" border-none  rounded-lg bg-white p-2.5  text-sm font-semibold text-gray-500 shadow-sm ring-1 ring-inset ring-gray-300  hover:bg-gray-50" id="menu-category" >
    </select>
           
        </div>
   
</div> ,
    },

  ];



  const ownerAccountItems = [
    {
      key: '1',
      label: 'Owner Account Info',
      children: 
      <div className='flex flex-wrap w-full gap-x-5 pb-5'>
        <div className='flex flex-col w-[49%]' >
      <label htmlFor="" className=' p-1 text-sm' >Name </label>
            <input
            type="text"
            id="Name"
            placeholder="Please enter name"
            className="px-4 py-2  border border-gray-600 rounded-lg  focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
              <p className=' p-1 text-[red] text-sm ml-4 invisible' id="emailErrorMsg">Name is required</p>
            </div>
        <div className='flex flex-col w-[49%]' >
    <label htmlFor="" className=' p-1 text-sm' >Email </label>
        <input
        type="Email"
        id="Email"
        placeholder="Please enter Email"
        className="px-4 py-2 border border-gray-600 rounded-lg  focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
            <p className=' p-1 text-[red] text-sm ml-4 invisible' id="emailErrorMsg">Name is required</p>
        </div>
        <div className='flex flex-col w-[49%]' >
      <label htmlFor="" className=' p-1 text-sm' >Phone </label>
            <input
            type="phone"
            id="Phone"
            placeholder="Please enter phone"
            className="px-4 py-2  border border-gray-600 rounded-lg  focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
              <p className=' p-1 text-[red] text-sm ml-4 invisible' id="emailErrorMsg">Name is required</p>
            </div>
   
</div> ,
    },

  ];



  export  {basicInfoItems, ownerAccountItems};