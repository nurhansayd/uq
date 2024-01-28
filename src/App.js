
import { BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
import LoginForm from './Components/Login/Login';
import Header from './Components/Header/Header'
import MainPage from './Components/MainPage/MainPage';
import Organizations from './Components/Organizations/Organizations';
import Invoice from './Components/Invoice/Invoice';
import Customers from './Components/Customers/Customers';
import Packages from './Components/Packages/Packages';
import Create from './Components/Organizations/Create';
import PackageCreate from './Components/Packages/Create'
import './App.css';

function App() {

  return (
    <div className="App">
   <BrowserRouter>
      <Routes>
        <Route path="/header" element={<Header />} />
        <Route path="" element={ <LoginForm />} />
        <Route path="main" element={ <MainPage />} >
        <Route path="organization/create"element={<Create/>}/>
        <Route path="organization" element={<Organizations/>} />
        <Route path="customers" element={<Customers/>} />
        <Route path="invoice" element={<Invoice/>} />
        <Route path="packages/create"element={<PackageCreate/>}/>
        <Route path="packages" element={<Packages/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
