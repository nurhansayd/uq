import React, { useState } from 'react';
import Header from '../Header/Header';
import SideBar from '../SideBar/SideBar';
import Organizations from '../Organizations/Organizations';
import Invoice from '../Invoice/Invoice';
import { BrowserRouter as Router, Switch, Route , Routes, withRouter , Outlet } from 'react-router-dom';


const MainPage = () => {


  return (

    <React.Fragment>
          <div className='grid grid-cols-12  '>
           
            <Header/>
            <SideBar/>
            <Outlet/>

          
            </div>
    </React.Fragment>
  );
}

export default MainPage;