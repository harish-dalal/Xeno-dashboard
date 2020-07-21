import React from 'react'
import {Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import {ThreeDots} from 'react-bootstrap-icons'
import './dashboard.css'

const DashCard = (props) =>{
    return(
        <Card style = {{border : 'none' , boxShadow : '0px 0px 14px 1px #e2e2e2' , height : '100%'}}>
            <Card.Body style = {{padding : '10px'}}>
                <Card.Title className = 'dash-card-title' style = {props.style}><span>{props.title}</span><ThreeDots/></Card.Title>
                {props.children}
            </Card.Body>
        </Card>
    )
}

export default DashCard