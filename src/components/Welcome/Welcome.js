import React,{ Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import 'bootstrap/dist/css/bootstrap.css';
import './Welcome.css';

class Welcome extends Component {
	render() {
		return(
				<div>
				<Jumbotron className="jumbo">
				    <h1>Welcome to Bluetech Corporation</h1><hr class="new1"/>
					<h2>Who We Are</h2>
					<p>Bluetech, is an initiative by a group of individuals, offering facilities in multiple domains that help professionals march towards their goal. Power-packed with young technology enthusiasts and research scholars, our mission is to embrace game-changing technology and bring qualitative changes to the world.</p><br/>
					<h2>What we do</h2>
					<p>With many educational collaborations,we aim to explore the disruptive potential of students for achieving their self good. We offer online and offline training for technology fanatics. The technology-driven institute promotes research, development, and entrepreneurship to produce excellent batch of students.</p><br/>
				</Jumbotron>		
			</div>
			);
	}
}

export default Welcome;