import React ,{Component} from "react";
import {Container, Row, Col, Card, Form, Button , ProgressBar} from "react-bootstrap";
import {GeoAlt} from 'react-bootstrap-icons'
import DashCard from './DashCard'
import { withRouter } from "react-router-dom";
import Sidebar from '../SideBar/SideBar';
import Chart from 'react-apexcharts'
import './dashboard.css'
import 'bootstrap/dist/css/bootstrap.min.css';

class Dashboard extends Component{
    constructor(){
        super()
    }

    render(){
        return (
            <Container fluid = 'md'>
            <Row>
                <Col sm><DashCard title = 'Author Sales'>
                <div className = 'first-cont'>
                    <div></div>
                </div>
                </DashCard></Col>
                <Col sm><DashCard title = 'Technologies'></DashCard></Col>
                <Col sm><DashCard title = 'Total Orders'></DashCard></Col>
            </Row>
            <br/>
            <Row>
                <Col sm><DashCard title = 'ANNOUNCENMENTS' style = {{color : 'grey' , fontSize : '.8rem'}}>
                    <h3>Incredibly Positive Reciews</h3>
                    <div className = 'middle-cont'>To start a blog, think of a topic about and first brainstorm party is ways to write details<div style = {{marginTop : '10px' , marginBottom : '10px' , display : 'flex' , justifyContent : 'space-between' , fontSize : '.7rem'}}><Button className = 'date-button' variant="outline-primary">17 NOV, 2018</Button><Button className = 'dash-view-button' variant="light">VIEW</Button></div></div> 
                </DashCard></Col>
                <Col sm><DashCard title = 'PROJECTS'  style = {{color : 'grey' , fontSize : '.8rem'}}>
                    <h3>First Milestone Achievement</h3>
                    <div className = 'middle-cont'>To start a blog, think of a topic about and first brainstorm party is ways to write details<div style = {{marginTop : '10px' , marginBottom : '10px' , display : 'flex' , justifyContent : 'space-between'}}><span>Progress</span><span>55%</span></div></div>
                    <ProgressBar now = {55} style = {{height : '5px'}}/>
                </DashCard></Col>
                <Col sm><DashCard title = "TODAY'S SCHEDULE"  style = {{color : 'grey' , fontSize : '.8rem'}}>
                    <h3>UI/UX Design Updates</h3>
                    <div className = 'middle-cont' style = {{color : '#007bff' ,marginTop : '10px' , marginBottom : '10px' , fontSize : '1rem' , fontWeight :'800'}}>11:15AM - 12:30PM</div>
                    <div style = {{display : 'flex' , justifyContent : 'space-between' , fontSize :'0.8rem' , color : 'grey' , alignItems : 'center'}}><span><GeoAlt/> 246 R st Manhattan NY</span><Button className = 'dash-view-button' variant="light">VIEW MAP</Button></div>
                </DashCard></Col>
            </Row>
            <br/>
            <Row>
                <Col sm = {4}><DashCard title = 'Top Products'></DashCard></Col>
                <Col sm = {8}><DashCard title = 'Sales Statistics'></DashCard></Col>
            </Row>
            </Container>
        )
    }
  };
//   const Dashboard = withRouter(Dash);
  export default Dashboard