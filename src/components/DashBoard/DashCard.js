import React from 'react'
import {Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import {ThreeDots} from 'react-bootstrap-icons'
import './dashboard.css'

const DashCard = (props) =>{
    return(
        <div className = 'single-card' style = {{height : '100%'}}>
        <Card style = {{border : 'none' , boxShadow : '0px 0px 14px 1px #e2e2e2' , height : '100%'}}>
            <Card.Body className = 'dash-card-body' style = {{padding : '10px !important' , display : 'flex' , flexDirection : 'column'}}>
                <Card.Title className = 'dash-card-title' style = {props.style}><span>{props.title}</span><ThreeDots/></Card.Title>
                <div style = {{flex : '1 1 auto'}}>{props.children}</div>
            </Card.Body>
        </Card>
        </div>
    )
}

export default DashCard