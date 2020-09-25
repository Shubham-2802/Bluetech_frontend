import React,{ Component } from 'react';
import Pagination from 'react-bootstrap/Pagination';
import ListGroup from 'react-bootstrap/ListGroup';
import './Users.css';


class Users extends Component {

	render(){
		return (
					<div>
						<h1>List of Registered Users</h1><hr class="new1"/>
						<ListGroup className="user">
						  <ListGroup.Item>User 1</ListGroup.Item>           {/*hard coded, need to fetch from database*/}
						  <ListGroup.Item>User 2</ListGroup.Item>
						  <ListGroup.Item>User 3</ListGroup.Item>
						  <ListGroup.Item>User 4</ListGroup.Item>
						  <ListGroup.Item>User 5</ListGroup.Item>
						  <ListGroup.Item>User 6</ListGroup.Item>
						  <ListGroup.Item>User 7</ListGroup.Item>
						</ListGroup>
					</div>
		);
	}
}

export default Users;