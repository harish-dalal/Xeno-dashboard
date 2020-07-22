import React ,{Component} from "react";
import {Container, Row, Col, Card, Form, Button , ProgressBar , ButtonGroup} from "react-bootstrap";
import {GeoAlt , GearFill , CodeSquare , Brush} from 'react-bootstrap-icons'
import DashCard from './DashCard'
import { withRouter } from "react-router-dom";
import Sidebar from '../SideBar/SideBar';
import Chart from 'react-apexcharts'
import './dashboard.css'
import 'bootstrap/dist/css/bootstrap.min.css';

class Dashboard extends Component{
    constructor(){
        super()
        this.state = {
            bar : {
                options: {
                    colors : ['rgb(93,119,255)', 'rgb(241,243,255)'],
                    plotOptions : {
                        bar :{
                            columnWidth : '30%'
                        }
                    },
                    legend : {
                        show : true,
                        position : 'top',
                        horizontalAlign : 'left',
                    },
                    dataLabels : {
                        enabled : false
                    },
                    chart: {
                    id: "basic-bar"
                    },
                    xaxis: {
                    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
                    }
                },
                series: [
                    {
                        name: "Author",
                        data: [30, 40, 45, 50, 49, 60, 70, 91]
                    },
                    {
                        name: "Customer",
                        data: [20, 45, 41, 20, 39, 50, 90, 51]
                    }

              ]},


            barNameLess : {
                options:{
                    plotOptions :{
                        bar :{
                            startingShape : 'rounded',
                            endingShape : 'rounded',
                            columnWidth : '15%',
                            colors :{
                                backgroundBarColors : ['#eff3fe' , '#eff3fe' , '#eff3fe' , '#eff3fe' , '#eff3fe' , '#eff3fe']
                            }
                        }
                    },
                    chart :{
                        id : 'nameless',
                        toolbar : {
                            show : false,
                        },
                    },
                    grid :{
                        show : false,
                    },
                    dataLabels:{
                        enabled : false
                    },
                    xaxis : {
                        type : 'category',
                        categories : [],
                        labels : {
                            show : false
                        },
                        axisBorder : {
                            show : false,
                        }
                    },
                    yaxis : {
                        labels :{
                            show : false
                        },
                        axisBorder : {
                            show : false
                        }
                    }
                },
                series : [{
                    data : [10 ,20 ,60 , 30 ,80 , 40]
                }
                ],
                legend : {
                    show : false
                }
            },
            donut :{
                options: {
                    colors: ['rgb(94,120,255)', 'rgb(100,108,155)' , 'rgb(176,180,215)'],
                    dataLabels: {
                        enabled: false,
                    },
                    plotOptions: {
                        pie: {
                            donut: {
                                  size : '80%'
                            }
                        }
                      },
                    labels: ['HTML', 'CSS', 'React'],
                    legend: {
                        show: false,
                        showForSingleSeries: false,
                        showForNullSeries: true,
                        showForZeroSeries: true,
                        position: 'left',
                        horizontalAlign: 'left', 
                        textAlign : 'start',
                        padding : 0,
                        floating: false,
                        fontSize: '10px',
                        fontFamily: 'Helvetica, Arial',
                        fontWeight: 400,
                        formatter: undefined,
                        inverseOrder: false,
                        width: 'auto',
                        height: '100%',
                        tooltipHoverFormatter: undefined,
                        offsetX: 0,
                        offsetY: 0,
                        labels: {
                            colors: undefined,
                            useSeriesColors: false,
                            textAlign : 'start',
                        },
                        markers: {
                            width: 5,
                            height: 5,
                            strokeWidth: 0,
                            strokeColor: '#fff',
                            fillColors: undefined,
                            radius: 5,
                            customHTML: undefined,
                            onClick: undefined,
                            offsetX: 0,
                            offsetY: 0
                        },
                        itemMargin: {
                            horizontal: 0,
                            vertical: 0
                        },
                    }
                },
                series: [30 , 20 , 50],
            },

            area : {
                options :{
                    chart :{
                    id : 'area',
                    toolbar : {
                        show : false,
                    },
                },
                grid :{
                    show : false,
                },
                dataLabels:{
                    enabled : false
                },
                xaxis : {
                    type : 'category',
                    categories : [],
                    labels : {
                        show : false
                    },
                    axisBorder : {
                        show : false,
                    }
                },
                yaxis : {
                    labels :{
                        show : false
                    },
                    axisBorder : {
                        show : false
                    }
                }

                },
                series : [{
                    data : [12 ,100, 23, 10 ,42,90]}
                ]
            }
        };
        
    }

    render(){
        return (
            <Container fluid = 'md'>
                <div style = {{textAlign : 'start' , marginBottom : '10px' , fontWeight :'800' , display : 'flex' , alignItems : 'center'}}>Dashboard <span style = {{color : 'grey' , fontWeight : '400' , fontSize : '.7rem' , marginLeft : '3px'}}> · dashboard · Navy Aside </span></div>
            <Row>
                <Col sm><DashCard title = 'Author Sales'>
                <div className = 'first-cont'>
                    <h2><span style={{fontSize : '1rem'}}>&#36;</span>60M</h2>
                    <Chart options = {this.state.barNameLess.options} series = {this.state.barNameLess.series}  type = 'bar' width = '70%' height = '80%' />
                </div>
                </DashCard></Col>
                <Col sm><DashCard title = 'Technologies'>
                    <div className = 'first-cont'>
                        <h2>9.3M</h2>
                        <div style = {{width : '70%' , height : 'auto' , display : 'flex' , justifyContent : 'center' , alignItems : 'center'}}>
                        <Chart options={this.state.donut.options} series={this.state.donut.series} type="donut"/>
                        </div>
                    </div>
                </DashCard></Col>
                <Col sm><DashCard title = 'Total Orders'>
                    <div className = 'first-cont'>
                        <h2>17M</h2>
                        <div style = {{width : '70%' , height : 'auto' , display : 'flex' , justifyContent : 'center' , alignItems : 'center'}}>
                        <Chart options = {this.state.area.options} series = {this.state.area.series} type = 'area' />
                        </div>
                    </div>    
                </DashCard></Col>
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
                <Col sm = {4}><DashCard title = 'Top Products'>
                    <div style = {{display : 'flex' , justifyContent : 'center' , flexDirection : 'column'}}><div>
                        <ButtonGroup aria-label = 'group'>
                            <Button size = 'sm' variant = 'outline-primary'><GearFill/><br/>settings</Button>
                            <Button size = 'sm' variant = 'outline-primary'><CodeSquare/><br/>Code</Button>
                            <Button size = 'sm' variant = 'outline-primary'><Brush/><br/>Design</Button>
                        </ButtonGroup>
                    </div>
                    <div style = {{width : '100%'}}>
                        <div className = 'top-prod-cont'><span className = 'top-prod-text'><h3>HTML 5 Templates</h3>Front-end, Admin and email</span><span className = 'top-prod-prog-text'>+23%<ProgressBar now = {23} className = 'top-prod-prog'/></span></div>
                        <div className = 'top-prod-cont'><span className = 'top-prod-text'><h3>Wordpress Themes</h3>eCommerce Website, Plugin</span><span className = 'top-prod-prog-text'>+21%<ProgressBar now = {23} className = 'top-prod-prog' variant = 'danger'/></span></div>
                        <div className = 'top-prod-cont'><span className = 'top-prod-text'><h3>eCommerce Websites</h3>Shops, Fashion websites and etc</span><span className = 'top-prod-prog-text'>-16%<ProgressBar now = {23} className = 'top-prod-prog' variant = 'success'/></span></div>
                        <div className = 'top-prod-cont'><span className = 'top-prod-text'><h3>UI/UX Design</h3>Everything you ever imagine</span><span className = 'top-prod-prog-text'>+4%<ProgressBar now = {23} className = 'top-prod-prog' variant = 'warning'/></span></div>
                        <div className = 'top-prod-cont'><span className = 'top-prod-text'><h3>Freebie Themes</h3>Front-end and Admin</span><span className = 'top-prod-prog-text'>+34%<ProgressBar now = {23} className = 'top-prod-prog' variant = 'info'/></span></div>
                    </div></div>
                </DashCard></Col>
                <Col sm = {8}><DashCard title = 'Sales Statistics'>
                <Chart
                options={this.state.bar.options}
                series={this.state.bar.series}
                type="bar"
                width="100%"
                />
                    </DashCard></Col>
            </Row>
            </Container>
        )
    }
  };
//   const Dashboard = withRouter(Dash);
  export default Dashboard