import React from 'react';
import NavbarCustom from './components/Navbar/Navbar'
import Sidebar from './components/SideBar/SideBar'
import DashBoard from './components/DashBoard/DashBoard'
import './App.css';

function App() {
  return (
    <div className = 'App'>
      <NavbarCustom/>
      {/* <Sidebar/> */}
      <br/>
      <DashBoard/>
    </div>
  );
}

export default App;
