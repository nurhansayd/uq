const LoseFocusName = (e)=>{

  let nameErrorMsg = document.getElementById("nameErrorMsg");

  if(e.target.value == "")
  {

    nameErrorMsg.style.visibility = 'visible';
    
  }
  else{

    nameErrorMsg.style.visibility = 'hidden';
      
  }
}
const handleOnChangeName= (e) =>{
 // setPassword(e.target.value)

 let nameErrorMsg = document.getElementById("nameErrorMsg");
  if(e.target.value != ""){
    nameErrorMsg.style.visibility = 'hidden';
  }
}
const LoseFocusDesc = (e)=>{

  let descErrorMsg = document.getElementById("descErrorMsg");

  if(e.target.value == "")
  {

    descErrorMsg.style.visibility = 'visible';
    
  }
  else{

    descErrorMsg.style.visibility = 'hidden';
      
  }
}
const handleOnChangeDesc= (e) =>{
 // setPassword(e.target.value)

  if(e.target.value != ""){

    document.getElementById("descErrorMsg").style.visibility = 'hidden';

  }
}

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


  const basicInfoPackage = [
    {
      key: '1',
      label: 'Basic Info',
      children: 
      <div className='flex flex-wrap w-full gap-x-5 gap-y-5 pb-5'>
        <div className='flex flex-col w-[49%]' >
      <label htmlFor="" className=' p-1 text-sm' >Name </label>
            <input
            type="text"
            id="Name"
            onBlur={LoseFocusName}
            onChange={handleOnChangeName}
            placeholder="Please enter name"
            className="px-4 py-2  border border-gray-600 rounded-lg  focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
              <p className='  text-[red] text-xs  invisible' id="nameErrorMsg">Name is required</p>
            </div>
        <div className='flex flex-col w-[49%]' >
    <label htmlFor="" className=' p-1 text-sm' >Desc </label>
        <input
        type="text"
        id="Desc"
        onBlur={LoseFocusDesc}
        onChange={handleOnChangeDesc}
        placeholder="Please enter desc"
        className="px-4 py-2 border border-gray-600 rounded-lg  focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
            <p className='  text-[red] text-xs invisible ' id="descErrorMsg">Desc is required</p>
        </div>
        <div className='flex  w-[49%]' >
      <label htmlFor="" className=' p-1 mr-2 text-sm' >Duration </label>
            <input
            type="number"
            id="Duration"
            
            className="p-1 w-1/5 border border-gray-300 rounded-lg  focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
             
            </div>
            <div className='flex  w-[49%]' >
      <label htmlFor="" className=' p-1 mr-2 text-sm' >First branch price </label>
            <input
            type="number"
            id="Duration"
            
            className="p-1 w-1/5 border border-gray-300 rounded-lg  focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
             
            </div>
            <div className='flex  w-[49%]' >
      <label htmlFor="" className=' p-1 mr-2 text-sm' >Second branch price </label>
            <input
            type="number"
            id="Duration"
            
            className="p-1 w-1/5 border border-gray-300 rounded-lg  focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
             
            </div>
            <div className='flex  w-[49%]' >
      <label htmlFor="" className=' p-1 mr-2 text-sm' >Extra branch price </label>
            <input
            type="number"
            id="Duration"
            
            className="p-1 w-1/5 border border-gray-300 rounded-lg  focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
             
        </div>
        <div className='flex  w-[49%]' >
        <label for="default-checkbox" class="mr-2 text-sm dark:text-gray-300">Active</label>
        <input id="default-checkbox" type="checkbox" value="" class="w-4 border-sky-200 rounded dark:border-sky-300 text-blue-600 " />
    
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



  export  {basicInfoItems, ownerAccountItems, basicInfoPackage};