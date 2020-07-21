import React , {Component} from 'react'
import {Accordion , Card} from 'react-bootstrap'
import './sidebar.css'
import 'bootstrap/dist/css/bootstrap.min.css';

class Sidebar extends Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div className = 'sidebar'>
                <Accordion defaultActiveKey="0">
                <Card className = 'card'>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                    Dashboards
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>
                    <ul>
                        <li>Navy Aside</li>
                        <li>Brand Aside</li>
                        <li>Navy Aside</li>
                        <li>Light Aside</li>
                    </ul>
                    </Card.Body>
                </Accordion.Collapse>
                </Card>
                <Card className = 'card'>
                <Accordion.Toggle as={Card.Header} eventKey="1">
                    Layout Builder
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                    <Card.Body><ul>
                        <li>Navy Layout</li>
                        <li>Light Layout</li>
                        <li>Brand Layout</li>
                        </ul></Card.Body>
                </Accordion.Collapse>
                </Card>
            </Accordion>
            <div className = 'sidebar-comp-title'>COMPONENTS</div>
                <Accordion defaultActiveKey="0">
                <Card className = 'card'>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                    Dashboards
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>
                    <ul>
                        <li>Navy Aside</li>
                        <li>Brand Aside</li>
                        <li>Navy Aside</li>
                        <li>Light Aside</li>
                    </ul>
                    </Card.Body>
                </Accordion.Collapse>
                </Card>
                <Card className = 'card'>
                <Accordion.Toggle as={Card.Header} eventKey="1">
                    Layout Builder
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                    <Card.Body><ul>
                        <li>Navy Layout</li>
                        <li>Light Layout</li>
                        <li>Brand Layout</li>
                        </ul></Card.Body>
                </Accordion.Collapse>
                </Card>
            </Accordion>
            </div>
        )
    }
}

export default Sidebar