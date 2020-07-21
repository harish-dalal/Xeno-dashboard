import React, { Component } from 'react';
import NavbarCustom from './components/Navbar/Navbar'
import Sidebar from './components/SideBar/SideBar'
import DashBoard from './components/DashBoard/DashBoard'
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      sideMenuOpen : false,
    }
  }

  sideMenuToggle(){
    console.log('this is sidemenu')
    this.setState(prev=>({sideMenuOpen : !prev.sideMenuOpen}))
  }

  render(){
    return (
      <div className = 'App'>
        <div className = 'sidebar-container' style = {{width : !this.state.sideMenuOpen ? '0' : '200px'}}>
          <Sidebar/>
        </div>
        <div className = 'main-container'>
          <NavbarCustom openSideMenu = {this.sideMenuToggle.bind(this)}/>
          <br/>
          <DashBoard/>
        </div>
      </div>
    );
  }
}

export default App;
