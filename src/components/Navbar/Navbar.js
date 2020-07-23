import React , {Component} from 'react'
import {Navbar , Nav , NavDropdown , Button , Form , FormControl , Dropdown , DropdownButton} from 'react-bootstrap'
import {ListNested , Search , Bell , Gear  ,PersonCircle , GripHorizontal} from 'react-bootstrap-icons'
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css'

class NavbarCustom extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <>
            <Navbar bg="light" expand="lg">
            <ListNested size = '20px' style = {{cursor : 'pointer'}} onClick = {this.props.openSideMenu}/>            
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <NavDropdown className = 'btn btn-outline-primary btn-sm btn-custom' title={
                    <span className = 'navdrop-text'>Pages</span>
                    } id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown className = 'btn btn-outline-primary btn-sm btn-custom' title={
                    <span className = 'navdrop-text'>Reports</span>
                    } id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown className = 'btn btn-outline-primary btn-sm btn-custom' title={
                    <span className = 'navdrop-text'>Apps</span>
                    } id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
                </Nav>
                <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="light"><Search/></Button>
                <Button variant = 'light'><Bell/></Button>
                <Button variant = 'light'><Gear/></Button>
                <span style = {{fontSize : '.7rem' , marginRight : '10px' , color : 'grey'}}>Hi, Apex</span><PersonCircle/>
                <Button variant = 'light'><GripHorizontal/></Button>
                </Form>
            </Navbar.Collapse>
            </Navbar>
            </>
        )
    }
}


export default NavbarCustom