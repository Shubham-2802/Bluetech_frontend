import React,{ Component } from 'react';
import Accordion from 'react-bootstrap/Accordion';
//import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
//import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Courses.css';

class Courses extends Component {

	render(){
		return (
			<div>
				<Accordion defaultActiveKey="0" className="accord">
				  <Card>
				    <Card.Header>
				      <Accordion.Toggle as={Button} variant="link" eventKey="0">
				        Courses Completed
				      </Accordion.Toggle>
				    </Card.Header>
				    <Accordion.Collapse eventKey="0">
				      <Card.Body>
				      			<Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
								  <Row>
								    <Col sm={6}>
								      <ListGroup>
								        <ListGroup.Item action href="#link1">
								          Data Structures
								        </ListGroup.Item>
								        <ListGroup.Item action href="#link2">
								          Algorithms
								        </ListGroup.Item>
								      </ListGroup>
								    </Col>
								    <Col sm={6}>
								      <Tab.Content>
								        <Tab.Pane eventKey="#link1">
								          <p>Points earned:5</p>
								          <p>Completed On:25</p>
								        </Tab.Pane>
								        <Tab.Pane eventKey="#link2">
								          <p>Points earned:10</p>
								          <p>Completed On:27</p>
								        </Tab.Pane>
								      </Tab.Content>
								    </Col>
								  </Row>
								</Tab.Container>
				      </Card.Body>
				    </Accordion.Collapse>
				  </Card>
				  <Card>
				    <Card.Header>
				      <Accordion.Toggle as={Button} variant="link" eventKey="1">
				        Course Attempted
				      </Accordion.Toggle>
				    </Card.Header>
				    <Accordion.Collapse eventKey="1">
				      <Card.Body>
				      			<Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
								  <Row>
								    <Col sm={8}>
								      <ListGroup>
								        <ListGroup.Item action href="#link1">
								          <p>Computer Networks</p>
								          <p>Due By:</p>
								        </ListGroup.Item>
								      </ListGroup>
								    </Col>
								  </Row>
								</Tab.Container>
				      </Card.Body>
				    </Accordion.Collapse>
				  </Card>
				   <Card>
				    <Card.Header>
				      <Accordion.Toggle as={Button} variant="link" eventKey="2">
				        To Do List
				      </Accordion.Toggle>
				    </Card.Header>
				    <Accordion.Collapse eventKey="2">
				      <Card.Body>
				      			<Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
								  <Row>
								    <Col sm={8}>
								      <ListGroup>
								        <ListGroup.Item action href="#link1">
								          <p>Operations Research</p>
								          <p>Due By:</p>
								        </ListGroup.Item>
								      </ListGroup>
								    </Col>
								    <Col sm={8}>
								      <ListGroup>
								        <ListGroup.Item action href="#link2">
								          <p>Software Testing</p>
								          <p>Due By:</p>
								        </ListGroup.Item>
								      </ListGroup>
								    </Col>
								    <Col sm={8}>
								      <ListGroup>
								        <ListGroup.Item action href="#link3">
								          <p>Management Studies</p>
								          <p>Due By:</p>
								        </ListGroup.Item>
								      </ListGroup>
								    </Col>
								  </Row>
								</Tab.Container>
				      </Card.Body>
				    </Accordion.Collapse>
				  </Card>
				</Accordion>	
			</div>
		);
	}
}

export default Courses;